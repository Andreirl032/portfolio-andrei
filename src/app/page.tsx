"use client";

import Image from "next/image";
import Header from "./components/Header";
import myself from "../../public/assets/eu.png";
import { MutableRefObject, useEffect, useRef } from "react";

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
import native from "../../public/assets/logos/native.png";

import telemidia from "../../public/assets/labs/telemidia-removebg.png";
import pulse from "../../public/assets/labs/pulse-removebg.png";
import viplab from "../../public/assets/labs/viplab-removebg.png";
import lsdi from "../../public/assets/labs/lsdi-removebg.png";

import Footer from "./components/Footer";

interface Reference {
  inicio: MutableRefObject<null | HTMLDivElement>;
  tecnologias: MutableRefObject<null | HTMLDivElement>;
  projetos: MutableRefObject<null | HTMLDivElement>;
  contato: MutableRefObject<null | HTMLDivElement>;
}

export default function Home() {
  const inicioRef = useRef<null | HTMLDivElement>(null);
  const tecnologiasRef = useRef<null | HTMLDivElement>(null);
  const projetosRef = useRef<null | HTMLDivElement>(null);
  const contatoRef = useRef<null | HTMLDivElement>(null);

  const reference: Reference = {
    inicio: inicioRef,
    tecnologias: tecnologiasRef,
    projetos: projetosRef,
    contato: contatoRef,
  };

  const linha1 = [
    { src: html, alt: "html" },
    { src: css, alt: "css" },
    { src: js, alt: "js" },
    { src: ts, alt: "ts" },
  ];

  const linha2 = [
    { src: react, alt: "react" },
    { src: native, alt: "native" },
    { src: next, alt: "next" },
    { src: tailwind, alt: "tailwind" },
  ];

  const linha3 = [
    { src: python, alt: "python" },
    { src: sql, alt: "sql" },
    { src: firebase, alt: "firebase" },
    { src: mongodb, alt: "mongodb" },
  ];

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
      <Header reference={reference} />

      <main className="mt-16 overflow-x-hidden">
        {/* Container da página inicial */}
        <section
          className="flex w-auto flex-row items-center justify-between"
          ref={inicioRef}
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
          ref={tecnologiasRef}
        >
          <div className="flex flex-col gap-8 items-center">
            <h1 data-aos="fade-down" className="font-bold text-4xl">
              Tecnologias
            </h1>
            <h2 data-aos="fade-down" className="w-[50%] text-2xl text-center">
              Tenho conhecimentos principalmente em desenvolvimento web e
              mobile, e ao longo do tempo aprendi acerca de diversas
              tecnologias, sendo as principais:
            </h2>
            <div className="flex flex-col gap-6">
              {[linha1, linha2, linha3].map((linha, i) => (
                <div
                  key={i}
                  className="flex gap-10 justify-center items-center"
                >
                  {linha.map((img, j) => (
                    <div
                      key={j}
                      className="w-44 h-44 p-6 border-[1px] border-black dark:border-gray-300 rounded-xl flex justify-center items-center hover:scale-105 transition-all"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={100}
                        height={100}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="flex w-auto items-center justify-center mt-28"
          ref={projetosRef}
        >
          <div className="flex flex-col gap-8 items-center">
            <h1 data-aos="fade-down" className="font-bold text-4xl">
              Projetos
            </h1>
            <h2 data-aos="fade-down" className="w-[50%] text-2xl text-center">
              Ao longo do meu curso na ciência da computação, participei de
              excelentes projetos em locais de renome, como:
            </h2>
            <div className="flex flex-row gap-4">
              <div className="p-8 max-w-64 rounded-xl border-[1px] border-black dark:border-gray-300 flex flex-col items-center hover:scale-105 transition-all">
                <Image
                  width={200}
                  height={200}
                  objectFit="contain"
                  src={telemidia}
                  alt="telemidia"
                ></Image>
                <h1 className="font-bold text-xl">Telemídia-MA</h1>
                <h2 className="max-w-32 text-center text-sm">
                  Trabalhei como desenvolvedor fullstack do projeto Cosmo, um
                  website destinado ao ensino gamificado de algoritmos
                </h2>
              </div>
              <div className="p-8 max-w-64 rounded-xl border-[1px] border-black dark:border-gray-300 flex flex-col items-center hover:scale-105 transition-all">
                <Image
                  width={200}
                  height={200}
                  objectFit="contain"
                  src={pulse}
                  alt="pulse"
                  className="bg-black dark:bg-current mb-5"
                ></Image>
                <h1 className="font-bold text-xl">Pulse</h1>
                <h2 className="max-w-32 text-center text-sm">
                  Atuei como estagiário da Pulse, o setor de tecnologia do Grupo
                  Mateus, em parceria com o Telemídia-MA para a instrução de
                  jovens aprendizes e organização de uma maratona de programação
                </h2>
              </div>
              <div className="p-8 max-w-64 rounded-xl border-[1px] border-black dark:border-gray-300 flex flex-col items-center hover:scale-105 transition-all">
                <Image
                  width={200}
                  height={200}
                  objectFit="contain"
                  src={viplab}
                  alt="viplab"
                ></Image>
                <h1 className="font-bold text-xl text-center">
                  VIPLab (Vision and Image Processing Lab)
                </h1>
                <h2 className="max-w-32 text-center text-sm">
                  Desenvolvi uma aplicação móvel para acompanhamento de miopia,
                  mediante projeto de iniciação tecnológica financiado pelo CNPq
                </h2>
              </div>
              <div className="p-8 max-w-64 rounded-xl border-[1px] border-black dark:border-gray-300 flex flex-col items-center hover:scale-105 transition-all">
                <Image
                  width={200}
                  height={200}
                  objectFit="contain"
                  src={lsdi}
                  alt="lsdi"
                  className="my-10"
                ></Image>
                <h1 className="font-bold text-xl text-center">
                  LSDi (Laboratório de Sistemas Distribuídos Inteligentes)
                </h1>
                <h2 className="max-w-32 text-center text-sm">
                  Participante da versão 2.0 do SESI Monitore, atuando em coleta
                  e distribuição de dados de monitoramento da saúde dos
                  trabalhadores, na área de Internet das Coisas(IoT)
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section
          className="flex w-auto items-center justify-center mt-28"
          ref={contatoRef}
        >
          <Footer />
        </section>
      </main>
    </>
  );
}
