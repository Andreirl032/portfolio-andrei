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
        ? elmRef.current.offsetTop - 112
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
    <header className="page-container sticky top-0 z-50 pt-3 sm:pt-4">
      <div className="theme-transition flex h-14 items-center justify-between gap-3 rounded-xl border border-gray-300 bg-[#e6e6e6] px-3 shadow-lg dark:border-gray-600 dark:bg-[#122131] sm:h-16 sm:gap-4 sm:px-5 lg:px-6">
        <button
          type="button"
          className="shrink-0 text-base font-bold sm:text-lg md:hidden"
          onClick={() => scrollToSection(reference.inicio)}
        >
          ARL
        </button>

        <nav
          key={locale}
          className="hidden min-w-0 flex-1 animate-fade-in items-center justify-center gap-4 lg:gap-6 md:flex"
        >
          {navItems.map(({ key, ref }) => (
            <button
              key={key}
              type="button"
              onClick={() => scrollToSection(ref)}
              className="whitespace-nowrap text-sm transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 lg:text-base"
            >
              {t.nav[key]}
            </button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <div className="hidden h-5 w-px bg-gray-300 dark:bg-gray-600 sm:block" />
          <ThemeToggle />

          <button
            type="button"
            className="rounded-md p-1.5 md:hidden"
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
          className="theme-transition card-surface mt-2 flex animate-slide-down flex-col gap-1 p-2 shadow-lg md:hidden"
        >
          {navItems.map(({ key, ref }) => (
            <button
              key={key}
              type="button"
              onClick={() => scrollToSection(ref)}
              className="rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 sm:text-base"
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
