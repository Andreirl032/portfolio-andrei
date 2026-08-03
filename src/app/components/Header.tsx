"use client";

import { MutableRefObject, useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import ThemeToggle from "./ThemeToggleButton";
import LanguageToggle from "./LanguageToggle";

interface Reference {
  inicio: MutableRefObject<null | HTMLDivElement>;
  tecnologias: MutableRefObject<null | HTMLDivElement>;
  experiencia: MutableRefObject<null | HTMLDivElement>;
  portfolio: MutableRefObject<null | HTMLDivElement>;
  contato: MutableRefObject<null | HTMLDivElement>;
}

interface HeaderProps {
  reference: Reference;
}

const Header = ({ reference }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, t } = useLanguage();

  const navItems = [
    { key: "home", ref: reference.inicio },
    { key: "technologies", ref: reference.tecnologias },
    { key: "experience", ref: reference.experiencia },
    { key: "portfolio", ref: reference.portfolio },
    { key: "contact", ref: reference.contato },
  ] as const;

  const scrollToSection = (
    elmRef: MutableRefObject<null | HTMLDivElement>
  ) => {
    setMenuOpen(false);
    window.scrollTo({
      top: elmRef.current?.offsetTop
        ? elmRef.current.offsetTop - 96
        : undefined,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
      <div className="theme-transition flex h-16 items-center justify-between rounded-xl border-2 border-gray-300 bg-[#e6e6e6] px-4 shadow-lg dark:border-gray-600 dark:bg-[#122131] sm:px-6">
        <button
          type="button"
          className="text-lg font-bold md:hidden"
          onClick={() => scrollToSection(reference.inicio)}
        >
          ARL
        </button>

        <nav key={locale} className="hidden animate-fade-in items-center gap-6 md:flex">
          {navItems.map(({ key, ref }) => (
            <button
              key={key}
              type="button"
              onClick={() => scrollToSection(ref)}
              className="text-base transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {t.nav[key]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageToggle />
          <div className="h-5 w-px bg-gray-300 dark:bg-gray-600" />
          <ThemeToggle />

          <button
            type="button"
            className="rounded-md p-2 md:hidden"
            aria-label="Menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          key={`mobile-${locale}`}
          className="theme-transition mt-2 flex animate-slide-down flex-col gap-2 rounded-xl border-2 border-gray-300 bg-[#e6e6e6] p-4 shadow-lg dark:border-gray-600 dark:bg-[#122131] md:hidden"
        >
          {navItems.map(({ key, ref }) => (
            <button
              key={key}
              type="button"
              onClick={() => scrollToSection(ref)}
              className="rounded-md px-3 py-2 text-left text-base transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {t.nav[key]}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
