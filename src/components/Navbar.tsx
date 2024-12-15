"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import OptionalRendering from "./ui/OptionalRendering";

const navigations: Array<{
  title: string;
  link: string;
}> = [
  {
    title: "Data",
    link: "/data",
  },
  {
    title: "Chatbot",
    link: "/chat",
  },
  {
    title: "Visualization",
    link: "/visualization",
  },
  {
    title: "FAQ",
    link: "/faq",
  },
  {
    title: "About",
    link: "/about",
  },
];

export default function Navbar(): React.ReactElement {
  const [showMenu, setShowMenu] = useState(false);
  const path = usePathname();

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="relative flex px-4 sm:px-28 py-4 h-20 flex-row justify-between items-center gap-8 bg-white z-10">
        <a href="/">
          <Image
            src="/images/img_logo.png"
            width={154}
            height={40}
            priority={true}
            alt="Lexicon Beneficial Ownership Logo"
          />
        </a>
        <div className="hidden sm:flex flex-row items-center mt-1 gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {navigations.map((navigation, index) => (
            <div key={index}>
              <a
                href={navigation.link}
                className={
                  "text-sm font-medium hover:cursor-pointer hover:opacity-40 transition-all duration-200"
                }
              >
                {navigation.title}
              </a>
              <div
                className={`w-full h-[1px] rounded-md ${
                  path === navigation.link
                    ? "bg-colorPrimary"
                    : "bg-transparent"
                }`}
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="absolute sm:hidden bg-slate-100 hover:bg-slate-200 transition-all duration-200 rounded-sm right-4"
        >
          <Image
            width={30}
            height={30}
            src="/icons/ic_hamburger.png"
            alt="Hamburger Icon"
          />
        </button>
      </nav>
      <OptionalRendering condition={showMenu}>
        <nav className="flex flex-col gap-2 md:hidden bg-white pb-4">
          {navigations.map((navigation, index) => (
            <a
              key={index}
              href={navigation.link}
              className="bg-slate-100 px-4 py-2 rounded-md mx-4"
            >
              {navigation.title}
            </a>
          ))}
        </nav>
      </OptionalRendering>
      <div
        id="border-bottom"
        className={"w-full h-[1px] bg-gray20 rounded-md hidden sm:block"}
      />
    </header>
  );
}
