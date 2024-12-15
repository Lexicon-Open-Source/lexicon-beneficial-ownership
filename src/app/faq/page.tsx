"use client";

import ChevronIcon from "@/components/icons/ChevronIcon";
import OptionalRendering from "@/components/ui/OptionalRendering";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";

type FaqItem = {
  type: string;
  question: string;
  paragraph: string;
  values: string[];
};

const faq: FaqItem[] = [
  {
    type: "paragraph",
    question: "What is Lexicon Beneficial Owner",
    paragraph:
      "Lexicon Beneficial Owner is a platform designed to assist procurement officers, HR professionals, law enforcement, and researchers in conducting background checks. It provides detailed information on individuals or entities, including blacklists, criminal records, and sanctions, to enhance transparency, accountability, and decision-making.",
    values: [],
  },
  {
    type: "list",
    question: "Who can use Lexicon Beneficial Owner?",
    paragraph: "Lexicon Beneficial Owner ideal for:",
    values: [
      "Procurement Officers: To verify tender participants and ensure compliance with regulations.",
      "HR Professionals: For employment background checks.",
      "Law Enforcement: To identify individuals or entities linked to fraud and corruption.",
      "Academia: For research purposes in law, public policy, or governance.",
    ],
  },
  {
    type: "list",
    question: "What data sources does Lexicon Beneficial Owner use?",
    paragraph:
      "Lexicon Beneficial Owner gathers data from Official government websites from Indonesia, Singapore, Malaysia, and global sources that focus on:",
    values: [
      "Corruption Case law.",
      "Blacklists.",
      "Blacklists.",
      "Sanction databases.",
    ],
  },
  {
    type: "list",
    question: "What tools does Lexicon Beneficial Owner use provide?",
    paragraph: "",
    values: [
      "Person/Entity Search Engine: Search for individuals or entities using keywords and filters.",
      "Data Extractor & Repository: Processes data using OCR and Natural Language Processing (NLP).",
      "Visualization Tools: Provides charts and other visuals to simplify data analysis.",
    ],
  },
  {
    type: "list",
    question: "How do I use the Person/Entity Search Engine?",
    paragraph: "",
    values: [
      "Go to Lexicon Beneficial Owner platform.",
      "Enter the name or keyword of the person/entity.",
      "Apply filters (e.g., blacklist status, criminal record).",
      "View results, including detailed information.",
    ],
  },
  {
    type: "list",
    question: "How does Lexicon Beneficial Owner ensure data accuracy?",
    paragraph:
      "Information is crawled directly from official government sources and validated through classification, tokenization, and clustering processes using advanced NLP algorithms.",
    values: [],
  },
  {
    type: "list",
    question: "Can I use Lexicon Beneficial Owner tools offline?",
    paragraph:
      "Currently, Lexicon Beneficial Owner services are primarily online. Offline solutions can be customized for specific government or enterprise clients.",
    values: [],
  },
  {
    type: "list",
    question: "How frequently is the data updated?",
    paragraph:
      "Lexicon Beneficial Owner updates its databases regularly to ensure the latest information on regulations, blacklists, and sanctions is available.",
    values: [],
  },
  {
    type: "list",
    question: "What are the benefits of using Lexicon Beneficial Owner?",
    paragraph: "",
    values: [
      "Faster background checks, saving time in procurement and HR processes.",
      "Reliable and accountable results from trusted sources.",
      "Visualized data for improved decision-making.",
    ],
  },
  {
    type: "list",
    question:
      "How does Lexicon Beneficial Owner contribute to transparency and accountability?",
    paragraph:
      "By providing access to accurate, up-to-date information on regulations, blacklists, and sanctions, Lexicon promotes public participation, regulatory transparency, and accountable governance.",
    values: [],
  },
  {
    type: "list",
    question: "How do I contact Lexicon Beneficial Owner for support?",
    paragraph: "For support or inquiries:",
    values: [
      "Lexicon Beneficial Owner: info @lexicon.id",
      "Phone: +62 813 1515 9792",
    ],
  },
];

function DropdownItem({ item }: { item: FaqItem }): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-1 rounded-md shadow-sm active:shadow-md transition-all duration-200 bg-white">
      <div
        className="header flex flex-row justify-between w-full cursor-pointer px-4 py-4"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h1 className="font-semibold text-lg select-none">{item.question}</h1>
        <ChevronIcon rotation={isOpen ? "up" : "down"} />
      </div>
      <div className={`${isOpen ? "block" : "hidden"} px-4 pb-4`}>
        <Divider className="mb-2" />
        <div className="content">
          <p className="font-light text-sm mt-2 leading-6">{item.paragraph}</p>
          <OptionalRendering condition={item.values.length > 0}>
            <ul className="list-disc pl-4">
              {item.values.map((value) => (
                <li className="text-sm font-light leading-6" key={value}>
                  {value}
                </li>
              ))}
            </ul>
          </OptionalRendering>
        </div>
      </div>
    </div>
  );
}

export default function FaqPage(): React.ReactElement {
  return (
    <main className="py-8 flex flex-col justify-center items-center pt-20">
      <div className="py-16">
        <Image
          src="/images/img_background_small.png"
          alt="Background Hero"
          className="absolute w-full h-52 top-10 left-0 right-0 -z-10 mt-2 hidden sm:block"
          width={1000}
          height={500}
        />
        <div className="flex flex-col items-center bg-white z-10">
          <h1 className="text-[40px] font-semibold">
            Explore Common Questions
          </h1>
        </div>
      </div>
      <div className="flex flex-col w-full px-32 py-16 gap-4">
        {faq.map((faqItem) => (
          <DropdownItem key={faqItem.question} item={faqItem} />
        ))}
      </div>
    </main>
  );
}
