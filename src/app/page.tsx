"use client";

import Image from "next/image";
import Header from "./components/Header";
import myself from "../../public/assets/eu.png";
import { useEffect, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import html from "../../public/assets/logos/html.png";
import css from "../../public/assets/logos/css.png";
import js from "../../public/assets/logos/js.png";
import ts from "../../public/assets/logos/ts.png";
import react from "../../public/assets/logos/react.png";
import next from "../../public/assets/logos/next.png";
import python from "../../public/assets/logos/python.png";
import sql from "../../public/assets/logos/sql.png";
import firebase from "../../public/assets/logos/firebase.png";
import mongodb from "../../public/assets/logos/mongodb.png";
import tailwind from "../../public/assets/logos/tailwind.png";
import native from "../../public/assets/logos/html.png";

export default function Home() {
  const scrollRef = useRef<null | HTMLDivElement>(null);
  //Inicialização do AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      {/* Header da página */}
      <Header ref={scrollRef} />

      <main className="mt-16 overflow-x-hidden">
        {/* Container da página inicial */}
        <section
          className="flex w-auto flex-row items-center justify-between"
          ref={scrollRef}
        >
          {/* Texto de descrição */}
          <div className="ml-24 w-full" data-aos="fade-right">
            <h3 className="text-xl">Bem vindo!</h3>
            <h1 className="font-bold text-4xl">Eu sou Andrei Ramos Lopes</h1>
            <h2 className="text-2xl">Desenvolvedor front-end</h2>

            <h2 className="text-2xl mt-10 break-normal">
              Sou estudante de programação pela Universidade Federal do Maranhão
              (UFMA) e programador Front-end.
            </h2>
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
        </section>
        <section
          className="flex w-auto items-center justify-center mt-28"
          ref={scrollRef}
        >
          <div className="flex flex-col gap-8 items-center">
            <h1 className="font-bold text-4xl">Tecnologias</h1>
            <h2 className="w-[50%] text-2xl text-center">
              Tenho conhecimentos principalmente em desenvolvimento web e
              mobile, e ao longo do tempo aprendi acerca de diversas
              tecnologias, sendo as principais:
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-10 justify-center items-center">
                <div className="max-w-18 max-h-18">
                  <Image
                    height={100}
                    width={100}
                    objectFit="contain"
                    src={html}
                    alt="html"
                  />
                </div>
                <div className="max-w-18 max-h-18">
                  <Image
                    height={100}
                    width={100}
                    objectFit="contain"
                    src={css}
                    alt="css"
                  />
                </div>
                <div className="max-w-18 max-h-18">
                  <Image
                    height={100}
                    width={100}
                    objectFit="contain"
                    src={js}
                    alt="js"
                  />
                </div>
                <div className="max-w-18 max-h-18">
                  <Image
                    height={100}
                    width={100}
                    objectFit="contain"
                    src={ts}
                    alt="ts"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <div className="max-w-18 max-h-18">
                  <Image
                    height={100}
                    width={100}
                    objectFit="contain"
                    src={react}
                    alt="react"
                  />
                </div>
                <div className="max-w-18 max-h-18">
                  <Image
                    height={100}
                    width={100}
                    objectFit="contain"
                    src={native}
                    alt="native"
                  />
                </div>
                <div className="max-w-18 max-h-18">
                  <Image
                    height={100}
                    width={100}
                    objectFit="contain"
                    src={next}
                    alt="next"
                  />
                </div>
                <div className="max-w-18 max-h-18">
                  <Image
                    height={100}
                    width={100}
                    objectFit="contain"
                    src={tailwind}
                    alt="tailwind"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <div className="max-w-18 max-h-18">
                  <Image
                    height={100}
                    width={100}
                    objectFit="contain"
                    src={python}
                    alt="python"
                  />
                </div>
                <div className="max-w-18 max-h-18">
                  <Image
                    height={100}
                    width={100}
                    objectFit="contain"
                    src={sql}
                    alt="sql"
                  />
                </div>
                <div className="max-w-18 max-h-18">
                  <Image
                    height={100}
                    width={100}
                    objectFit="contain"
                    src={firebase}
                    alt="firebase"
                  />
                </div>
                <div className="max-w-18 max-h-18">
                  <Image
                    height={100}
                    width={100}
                    objectFit="contain"
                    src={mongodb}
                    alt="mongodb"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="flex w-auto items-center justify-center mt-28"
          ref={scrollRef}
        ></section>
      </main>
    </>
  );
}
