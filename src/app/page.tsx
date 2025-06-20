"use client";

import Image from "next/image";
import Header from "./components/Header";
import myself from "../../public/assets/eu.png";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  //Inicialização do AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <body>
        {/* Header da página */}
        <Header />

        <main className="mt-16 overflow-x-hidden">
          {/* Container da página inicial */}
          <div className="flex w-auto flex-row items-center justify-between">
            {/* Texto de descrição */}
            <div className="ml-24 w-full" data-aos="fade-right">
              <h3 className="text-xl">Bem vindo!</h3>
              <h1 className="font-bold text-4xl">Eu sou Andrei Ramos Lopes</h1>
              <h2 className="text-2xl">Desenvolvedor Front-end</h2>
              
              <h2 className="text-2xl mt-10 break-normal">Sou estudante de programação pela Universidade Federal do Maranhão (UFMA) e programador Front-end.</h2>
            </div>

            {/* Foto de mim mesmo */}
            <div className="ml-auto mr-24 w-full" data-aos="fade-left">
              <Image
                width={444}
                height={444}
                src={myself}
                alt="myself"
                className="rounded-3xl ml-auto"
              />
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
