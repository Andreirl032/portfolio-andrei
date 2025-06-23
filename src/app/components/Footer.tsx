"use client";

import github from "../../../public/assets/github.svg";
import linkedin from "../../../public/assets/linkedin.svg";
import email from "../../../public/assets/email.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 w-full h-48 items-center justify-center mt-28 bg-[#2081C3]">
      <h1 className="font-bold text-2xl">Entre em contato:</h1>
      <div className="flex flex-row gap-10 items-center">
        <a target="_blank" href={"https://github.com/Andreirl032"}>
          <Image
            src={github}
            alt="github"
            objectFit="contain"
            height={50}
            width={50}
          ></Image>
        </a>
        <a
          target="_blank"
          href={"https://www.linkedin.com/in/andrei-ramos-lopes-55aa89268/"}
        >
          <Image
            src={linkedin}
            alt="linkedin"
            objectFit="contain"
            height={50}
            width={50}
          ></Image>
        </a>
        <a target="_blank" href="mailto:andrei.ramos.lopes@gmail.com">
          <Image
            src={email}
            alt="email"
            objectFit="contain"
            height={50}
            width={50}
          ></Image>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
