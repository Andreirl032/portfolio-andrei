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
  { src: "/assets/logos/mysql.svg", alt: "MySQL" },
  { src: "/assets/logos/firebase.png", alt: "Firebase" },
  { src: "/assets/logos/mongodb.png", alt: "MongoDB" },
];

const experienceItems = [
  {
    key: "semit" as const,
    image: "/assets/logos/semit.jpg",
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
    imageClass: "rounded-lg bg-black p-2 dark:bg-gray-700",
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
        <main className="page-container overflow-x-hidden pb-10 sm:pb-12">
          <section
            ref={inicioRef}
            className="section flex min-h-[calc(100dvh-5.5rem)] flex-col items-center justify-center gap-8 sm:gap-10 md:flex-row md:gap-12 lg:gap-16"
          >
            <div
              className="w-full flex-1 text-center md:text-left"
              data-aos="fade-right"
            >
              <p className="text-base text-blue-600 dark:text-blue-400 sm:text-lg lg:text-xl">
                {t.hero.welcome}
              </p>
              <h1 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl">
                {t.hero.name}
              </h1>
              <h2 className="mt-2 text-lg sm:text-xl lg:text-2xl">
                {t.hero.role}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base lg:text-lg md:mx-0">
                {t.hero.description}
              </p>
            </div>

            <div
              className="flex w-full shrink-0 justify-center md:w-auto md:justify-end"
              data-aos="fade-left"
            >
              <Image
                width={400}
                height={400}
                src="/assets/eu.png"
                alt="Andrei Ramos Lopes"
                priority
                className="h-auto w-48 rounded-2xl shadow-xl sm:w-56 md:w-64 lg:w-72 xl:w-80"
              />
            </div>
          </section>

          <section ref={tecnologiasRef} className="section">
            <div className="section-inner">
              <h2 data-aos="fade-down" className="section-title">
                {t.technologies.title}
              </h2>
              <p data-aos="fade-down" className="section-description">
                {t.technologies.description}
              </p>

              <div className="grid-tech w-full">
                {techLogos.map((logo, index) => (
                  <div
                    key={logo.alt}
                    data-aos="fade-up"
                    data-aos-delay={index * 40}
                    className="card-hover theme-transition card-surface flex aspect-square items-center justify-center p-3 sm:p-4"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={64}
                      height={64}
                      className="h-auto w-full max-w-[56px] object-contain sm:max-w-[64px] lg:max-w-[72px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section ref={experienciaRef} className="section">
            <div className="section-inner">
              <h2 data-aos="fade-down" className="section-title">
                {t.experience.title}
              </h2>
              <p data-aos="fade-down" className="section-description">
                {t.experience.description}
              </p>

              <div className="grid-experience w-full">
                {experienceItems.map((item, index) => (
                  <div
                    key={item.key}
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                    className="card-hover theme-transition card-surface flex h-full min-h-[280px] flex-col items-center p-5 sm:min-h-[300px] sm:p-6"
                  >
                    <div className="mb-4 flex h-28 w-full shrink-0 items-center justify-center sm:h-32">
                      <Image
                        width={140}
                        height={140}
                        src={item.image}
                        alt={item.alt}
                        className={`max-h-24 max-w-[140px] object-contain sm:max-h-28 ${item.imageClass ?? ""}`}
                      />
                    </div>
                    <h3 className="text-center text-base font-bold sm:text-lg">
                      {t.experience.items[item.key].name}
                    </h3>
                    <p className="mt-2 flex-1 text-center text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {t.experience.items[item.key].description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section ref={portfolioRef} className="section">
            <div className="section-inner">
              <h2 data-aos="fade-down" className="section-title">
                {t.portfolio.title}
              </h2>
              <p data-aos="fade-down" className="section-description">
                {t.portfolio.description}
              </p>

              <div className="grid-portfolio w-full">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 60}
                    className="h-full"
                  >
                    <PortfolioCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <section ref={contatoRef} className="scroll-mt-28">
          <Footer />
        </section>
      </LocaleTransition>
    </>
  );
}
