"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#2081C3] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl">{t.contact.title}</h2>
        <div className="flex flex-row flex-wrap items-center justify-center gap-8">
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
              height={50}
              width={50}
              className="brightness-0 invert"
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
              height={50}
              width={50}
              className="brightness-0 invert"
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
              height={50}
              width={50}
              className="brightness-0 invert"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
