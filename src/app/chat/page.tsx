"use client";

import CustomMarkdown from "@/components/CustomMarkdown";
import { CircularProgress } from "@nextui-org/react";
import React, { memo, Suspense, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import useTokenSession from "@/hooks/useTokenSession";
import { sendMessage } from "@/services/chatbot";

type Chat = {
  text: string;
  isFromSender: boolean;
  references: any[];
};

const ChatBotContent = memo(function ChatBotContent({
  content,
}: {
  content: string;
}) {
  return (
    <Suspense>
      <CustomMarkdown source={content} />
    </Suspense>
  );
});

const defaultComponentTransition = {
  type: "tween",
  ease: ["easeIn", "easeOut"],
  duration: 0.4,
};

export default function ChatPage(): React.ReactElement {
  const [chats, setChats] = useState<Chat[]>([]);
  const [query, setQuery] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const [showLoadingBot, setShowLoadingBot] = useState(false);

  const token = useTokenSession();

  const chatListRef = useRef<HTMLDivElement>(null);
  const inputBoxRef = useRef<HTMLTextAreaElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputBoxRef.current?.style.height) {
      inputBoxRef.current.style.height =
        inputBoxRef.current.scrollHeight + "px";
    }
  }, []);

  const handleSendMessage = async () => {
    setShowLoadingBot(true);
    setShowWelcome(false);

    const chat = query;
    setQuery("");

    const newChats = [
      ...chats,
      {
        text: query,
        isFromSender: true,
        references: [],
      },
    ];
    setChats(newChats);

    const response = await sendMessage({
      thread_id: token,
      user_message: query,
    });

    if (response.success) {
      setChats([
        ...newChats,
        {
          text: response.success.data?.response ?? "",
          isFromSender: false,
          references: response.success.data?.references ?? [],
        },
      ]);
    } else {
      setChats([
        ...newChats,
        {
          text: response.error?.toString() ?? "",
          isFromSender: false,
          references: [],
        },
      ]);
    }

    // Reset the form
    setShowLoadingBot(false);
  };

  return (
    <main className="flex flex-col overflow-hidden h-screen pt-20">
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={defaultComponentTransition}
            className="flex-1 flex flex-col justify-center items-center"
            exit={{ opacity: 0 }}
          >
            <h1 className="mx-auto text-center text-4xl font-semibold leading-10">
              Hi! How can <span className="text-colorPrimary">Lexicon</span>{" "}
              help you?
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {!showWelcome && (
        <motion.div
          className="flex-1 px-4 md:px-72 py-9 space-y-6 overflow-scroll relative"
          ref={chatListRef}
          onScroll={(event) => {
            const currentScrollPosition = event.currentTarget.scrollTop;
            const fullHeight = chatListRef.current?.scrollHeight ?? 0;
            const offsetHeight = chatListRef.current?.offsetHeight ?? 0;
            if (fullHeight > offsetHeight) {
              if (currentScrollPosition < fullHeight - offsetHeight - 100) {
                setShowScrollToBottom(true);
              } else {
                setShowScrollToBottom(false);
              }
            } else {
              setShowScrollToBottom(false);
            }
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={defaultComponentTransition}
        >
          {/* Chat List */}
          {chats.map((chat, index) => {
            if (chat.isFromSender) {
              return (
                <div key={index} className="flex justify-end items-end">
                  <p
                    className="p-4 bg-colorSecondaryBackground text-gray-900 rounded-xl flex justify-end max-w-md"
                    dangerouslySetInnerHTML={{
                      __html: chat.text.replace(/\n/g, "<br />"),
                    }}
                  ></p>
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className="flex flex-row gap-4 justify-start items-start"
                >
                  <div className="px-2 py-2 bg-colorSecondaryBackground border border-colorBorder rounded-full">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 20C9.90273 20 12.324 17.9387 12.88 15.2H18.7746L19.0323 12.32H12.7616C12.0351 9.824 9.73055 8 7 8C3.68629 8 1 10.6863 1 14C1 17.3137 3.68629 20 7 20ZM19.6384 12.32L19.3806 15.2H20.9859L21.3644 12.32H19.6384ZM23.2294 15.2H21.7652L22.1437 12.32H23.6079L23.2294 15.2ZM23.9479 15.2H25.0158L25.3942 12.32H24.3264L23.9479 15.2ZM26.4766 15.2H25.979L26.3575 12.32H26.8551L26.4766 15.2ZM26.9201 12.3286L26.8551 12.32H26.9201V12.3286ZM7 17.5999C8.98822 17.5999 10.6 15.9882 10.6 13.9999C10.6 12.0117 8.98822 10.3999 7 10.3999C5.01178 10.3999 3.4 12.0117 3.4 13.9999C3.4 15.9882 5.01178 17.5999 7 17.5999Z"
                        fill="#236084"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <ChatBotContent content={chat.text} />
                  </div>
                </div>
              );
            }
          })}

          {/* Loading State */}
          {showLoadingBot && (
            <div className="flex flex-row gap-4 items-center w-fit bg-slate-50 px-4 py-2 rounded-xl">
              <CircularProgress size="sm" />
            </div>
          )}

          {/* Go to bottom */}
          <AnimatePresence>
            {showScrollToBottom && (
              <motion.div
                onClick={() =>
                  bottomRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "linear",
                }}
                className="sticky flex flex-row justify-center items-center rounded-full px-4 py-2 gap-2 bg-colorSecondaryBackground left-1/3 right-1/3 bottom-0 w-fit mx-auto cursor-pointer hover:opacity-85 transition-all duration-200"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6666 10L15.4916 8.82504L10.8333 13.475V3.33337H9.16665V13.475L4.51665 8.81671L3.33331 10L9.99998 16.6667L16.6666 10Z"
                    fill="#0095A4"
                  />
                </svg>
                <h5 className="font-semibold text-colorPrimary text-sm">
                  Go to bottom
                </h5>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Scrolling */}
          <div id="bottom" ref={bottomRef} />
        </motion.div>
      )}

      <div className="px-4 md:px-72 w-full">
        <div className="relative mb-6 md:mb-24">
          <textarea
            className="w-full m-0 align-bottom inline-block resize-none border-1 pl-4 pe-8 py-2 text-base rounded-lg placeholder:text-base placeholder:font-light shadow-sm outline-colorPrimary placeholder:m-0 placeholder:p-0"
            name="message"
            id="message"
            rows={1}
            ref={inputBoxRef}
            autoComplete="off"
            onInput={(event) => {
              event.currentTarget.style.height =
                event.currentTarget.scrollHeight + "px";
              setQuery(event.currentTarget.value);
            }}
            value={query}
            placeholder="Message Chatbot"
            onKeyDown={async (event) => {
              if (event.key == "Enter") {
                if (event.shiftKey) {
                  event.preventDefault();
                  setQuery(query + "\n");
                } else {
                  event.preventDefault();
                  event.currentTarget.blur();
                  event.currentTarget.style.height = "auto";
                  await handleSendMessage();
                }
              }
            }}
          ></textarea>
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-85 transition-all duration-200"
            onClick={async () => {
              await handleSendMessage();
              if (inputBoxRef.current) {
                inputBoxRef.current.blur();
                inputBoxRef.current.style.height = "auto";
              }
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.925 5.025L9.18333 7.70833L2.91667 6.875L2.925 5.025ZM9.175 12.2917L2.91667 14.975V13.125L9.175 12.2917ZM1.25833 2.5L1.25 8.33333L13.75 10L1.25 11.6667L1.25833 17.5L18.75 10L1.25833 2.5Z"
                fill="#6D6D6D"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
