"use client";

import { useLanguage } from "./LanguageProvider";

interface LocaleTransitionProps {
  children: React.ReactNode;
}

export default function LocaleTransition({ children }: LocaleTransitionProps) {
  const { locale } = useLanguage();

  return (
    <div key={locale} className="animate-locale-in">
      {children}
    </div>
  );
}
