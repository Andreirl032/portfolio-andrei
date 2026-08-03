"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#2081C3] text-white">
      <div className="page-container flex flex-col items-center justify-center gap-5 py-10 sm:gap-6 sm:py-12">
        <h2 className="text-lg font-bold sm:text-xl lg:text-2xl">
          {t.contact.title}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Andreirl032"
            aria-label="GitHub"
            className="transition-transform duration-300 ease-out hover:scale-110"
          >
            <Image
              src="/assets/github.svg"
              alt="GitHub"
              height={44}
              width={44}
              className="h-10 w-10 brightness-0 invert sm:h-11 sm:w-11"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/andrei-ramos-lopes-55aa89268/"
            aria-label="LinkedIn"
            className="transition-transform duration-300 ease-out hover:scale-110"
          >
            <Image
              src="/assets/linkedin.svg"
              alt="LinkedIn"
              height={44}
              width={44}
              className="h-10 w-10 brightness-0 invert sm:h-11 sm:w-11"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:andrei.ramos.lopes@gmail.com"
            aria-label="Email"
            className="transition-transform duration-300 ease-out hover:scale-110"
          >
            <Image
              src="/assets/email.svg"
              alt="Email"
              height={44}
              width={44}
              className="h-10 w-10 brightness-0 invert sm:h-11 sm:w-11"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
