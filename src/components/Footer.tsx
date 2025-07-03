"use client";

import Image from "next/image";
import React from "react";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import GithubIcon from "./icons/GithubIcon";
import OptionalRendering from "./ui/OptionalRendering";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/react";

export default function Footer(): React.ReactElement {
  const path = usePathname();

  return (
    <OptionalRendering condition={path !== "/chat"}>
      <footer className="bg-white border-t border-colorBorder">
        {/* Main Footer Content */}
        <div className="sm:px-32 sm:py-16 px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-6 flex flex-col">
              <Image
                src={"/images/img_logo.png"}
                width={155}
                height={40}
                alt="Lexicon Logo"
                className="mb-6"
              />
              <p className="text-colorSecondaryText text-base leading-relaxed mb-8 max-w-md">
                Lexicon Beneficial Ownership is a comprehensive tool designed to
                help procurement officials quickly identify individuals or
                companies with a history of fraud and corruption through
                advanced search capabilities.
              </p>

              {/* Social Media */}
              <div className="flex flex-col gap-4">
                <h4 className="text-colorPrimaryText font-semibold text-sm">
                  Follow Us
                </h4>
                <div className="flex flex-row gap-4">
                  <a
                    href="https://www.instagram.com/lexiconsearch/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-colorSecondaryBackground flex items-center justify-center hover:bg-slate-200 p-2 hover:shadow-md hover:text-white transition-all duration-200 group"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/lexicon-indo"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-colorSecondaryBackground flex items-center justify-center hover:bg-slate-200 p-2 hover:shadow-md hover:text-white transition-all duration-200 group"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 flex flex-col">
              <h4 className="text-colorPrimaryText font-semibold text-lg mb-6">
                Quick Links
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="/data"
                  className="text-colorSecondaryText hover:text-colorPrimary transition-all duration-200 text-sm"
                >
                  Search Data
                </a>
                <a
                  href="/visualization"
                  className="text-colorSecondaryText hover:text-colorPrimary transition-all duration-200 text-sm"
                >
                  Visualizations
                </a>
                <a
                  href="/chat"
                  className="text-colorSecondaryText hover:text-colorPrimary transition-all duration-200 text-sm"
                >
                  AI Chatbot
                </a>
                <a
                  href="/about"
                  className="text-colorSecondaryText hover:text-colorPrimary transition-all duration-200 text-sm"
                >
                  About Us
                </a>
                <a
                  href="/faq"
                  className="text-colorSecondaryText hover:text-colorPrimary transition-all duration-200 text-sm"
                >
                  FAQ
                </a>
              </div>
            </div>

            {/* CTA Section */}
            <div className="lg:col-span-3 flex flex-col">
              <h4 className="text-colorPrimaryText font-semibold text-lg mb-6">
                Open Source
              </h4>
              <div className="bg-gradient-to-br from-slate-100 via-colorPrimary/70 to-colorPrimary/40 rounded-3xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <GithubIcon fill="#0095A4" />
                  </div>
                  <div>
                    <h5 className="text-colorPrimaryText font-semibold text-sm">
                      Join Our Community
                    </h5>
                    <p className="text-colorTertiaryText text-xs">
                      Contribute to transparency
                    </p>
                  </div>
                </div>
                <Button
                  as="a"
                  href="https://github.com/Lexicon-Open-Source"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-colorPrimary text-white font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-lg"
                  radius="lg"
                  size="md"
                >
                  Contribute Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-colorBorder bg-lightGray">
          <div className="sm:px-32 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-colorTertiaryText text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Lexicon Beneficial Ownership. All
              rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-colorTertiaryText">
              <a
                href="#"
                className="hover:text-colorPrimary transition-all duration-200"
              >
                Privacy Policy
              </a>
              <span>•</span>
              <a
                href="#"
                className="hover:text-colorPrimary transition-all duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </OptionalRendering>
  );
}
