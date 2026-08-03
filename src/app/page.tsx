"use client";

import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortfolioCard from "./components/PortfolioCard";
import { MutableRefObject, useEffect, useRef } from "react";
import { useLanguage } from "./components/LanguageProvider";
import LocaleTransition from "./components/LocaleTransition";
import { projects } from "./data/projects";

import AOS from "aos";
import "aos/dist/aos.css";

interface Reference {
  inicio: MutableRefObject<null | HTMLDivElement>;
  tecnologias: MutableRefObject<null | HTMLDivElement>;
  experiencia: MutableRefObject<null | HTMLDivElement>;
  portfolio: MutableRefObject<null | HTMLDivElement>;
  contato: MutableRefObject<null | HTMLDivElement>;
}

const techLogos = [
  { src: "/assets/logos/html.png", alt: "HTML" },
  { src: "/assets/logos/css.png", alt: "CSS" },
  { src: "/assets/logos/js.png", alt: "JavaScript" },
  { src: "/assets/logos/ts.png", alt: "TypeScript" },
  { src: "/assets/logos/react.png", alt: "React" },
  { src: "/assets/logos/native.png", alt: "React Native" },
  { src: "/assets/logos/next.png", alt: "Next.js" },
  { src: "/assets/logos/tailwind.png", alt: "Tailwind CSS" },
  { src: "/assets/logos/nodejs.svg", alt: "Node.js" },
  { src: "/assets/logos/express.svg", alt: "Express.js" },
  { src: "/assets/logos/postgresql.svg", alt: "PostgreSQL" },
  { src: "/assets/logos/prisma.svg", alt: "Prisma" },
  { src: "/assets/logos/python.png", alt: "Python" },
  { src: "/assets/logos/sql.png", alt: "SQL" },
  { src: "/assets/logos/firebase.png", alt: "Firebase" },
  { src: "/assets/logos/mongodb.png", alt: "MongoDB" },
];

const experienceItems = [
  {
    key: "semit" as const,
    image: "/assets/labs/semit.svg",
    alt: "SEMIT - Prefeitura de São Luís",
  },
  {
    key: "lsdi" as const,
    image: "/assets/labs/lsdi-removebg.png",
    alt: "LSDi",
  },
  {
    key: "viplab" as const,
    image: "/assets/labs/viplab-removebg.png",
    alt: "VIPLab",
  },
  {
    key: "telemidia" as const,
    image: "/assets/labs/telemidia-removebg.png",
    alt: "Telemídia-MA",
  },
  {
    key: "pulse" as const,
    image: "/assets/labs/pulse-removebg.png",
    alt: "Pulse",
    imageClass: "bg-black dark:bg-gray-700 rounded-lg p-2",
  },
];

export default function Home() {
  const { t } = useLanguage();

  const inicioRef = useRef<null | HTMLDivElement>(null);
  const tecnologiasRef = useRef<null | HTMLDivElement>(null);
  const experienciaRef = useRef<null | HTMLDivElement>(null);
  const portfolioRef = useRef<null | HTMLDivElement>(null);
  const contatoRef = useRef<null | HTMLDivElement>(null);

  const reference: Reference = {
    inicio: inicioRef,
    tecnologias: tecnologiasRef,
    experiencia: experienciaRef,
    portfolio: portfolioRef,
    contato: contatoRef,
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Header reference={reference} />

      <LocaleTransition>
      <main className="mx-auto max-w-7xl overflow-x-hidden px-4 pb-8 sm:px-6 lg:px-8">
        {/* Hero */}
        <section
          ref={inicioRef}
          className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center gap-10 py-12 md:flex-row md:gap-16 lg:py-20"
        >
          <div className="flex-1 text-center md:text-left" data-aos="fade-right">
            <p className="text-lg text-blue-600 dark:text-blue-400 sm:text-xl">
              {t.hero.welcome}
            </p>
            <h1 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
              {t.hero.name}
            </h1>
            <h2 className="mt-2 text-xl sm:text-2xl">{t.hero.role}</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
              {t.hero.description}
            </p>
          </div>

          <div
            className="flex shrink-0 justify-center md:justify-end"
            data-aos="fade-left"
          >
            <Image
              width={400}
              height={400}
              src="/assets/eu.png"
              alt="Andrei Ramos Lopes"
              priority
              className="h-auto w-64 rounded-3xl shadow-xl sm:w-80 lg:w-[400px]"
            />
          </div>
        </section>

        {/* Technologies */}
        <section
          ref={tecnologiasRef}
          className="scroll-mt-24 py-16 lg:py-24"
        >
          <div className="flex flex-col items-center gap-8">
            <h2
              data-aos="fade-down"
              className="text-3xl font-bold sm:text-4xl"
            >
              {t.technologies.title}
            </h2>
            <p
              data-aos="fade-down"
              className="max-w-2xl text-center text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg"
            >
              {t.technologies.description}
            </p>

            <div className="mt-4 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {techLogos.map((logo, index) => (
                <div
                  key={logo.alt}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
              className="card-hover theme-transition flex aspect-square items-center justify-center rounded-xl border border-gray-300 bg-white p-4 dark:border-gray-600 dark:bg-[#1a3044] sm:p-6"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={80}
                    height={80}
                    className="h-auto w-full max-w-[80px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          ref={experienciaRef}
          className="scroll-mt-24 py-16 lg:py-24"
        >
          <div className="flex flex-col items-center gap-8">
            <h2
              data-aos="fade-down"
              className="text-3xl font-bold sm:text-4xl"
            >
              {t.experience.title}
            </h2>
            <p
              data-aos="fade-down"
              className="max-w-2xl text-center text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg"
            >
              {t.experience.description}
            </p>

            <div className="mt-4 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {experienceItems.map((item, index) => (
                <div
                  key={item.key}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="card-hover theme-transition flex flex-col items-center rounded-xl border border-gray-300 bg-white p-6 dark:border-gray-600 dark:bg-[#1a3044]"
                >
                  <Image
                    width={160}
                    height={160}
                    src={item.image}
                    alt={item.alt}
                    className={`mb-4 h-32 w-auto object-contain ${item.imageClass ?? ""}`}
                  />
                  <h3 className="text-center text-lg font-bold">
                    {t.experience.items[item.key].name}
                  </h3>
                  <p className="mt-2 text-center text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {t.experience.items[item.key].description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section ref={portfolioRef} className="scroll-mt-24 py-16 lg:py-24">
          <div className="flex flex-col items-center gap-8">
            <h2
              data-aos="fade-down"
              className="text-3xl font-bold sm:text-4xl"
            >
              {t.portfolio.title}
            </h2>
            <p
              data-aos="fade-down"
              className="max-w-2xl text-center text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg"
            >
              {t.portfolio.description}
            </p>

            <div className="mt-4 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <PortfolioCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <section ref={contatoRef} className="scroll-mt-24">
        <Footer />
      </section>
      </LocaleTransition>
    </>
  );
}
