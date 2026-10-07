"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale } from "@/types";

interface LanguageContextType {
  locale: Locale;
  toggleLocale: () => void;
  setLocale: (l: Locale) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "ar",
  toggleLocale: () => {},
  setLocale: () => {},
  isRTL: true,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar");

  useEffect(() => {
    // Check saved preference or URL param
    const saved = localStorage.getItem("almaher_locale") as Locale | null;
    if (saved === "en" || saved === "ar") {
      setLocaleState(saved);
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = saved;
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("almaher_locale", l);
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = l;
  };

  const toggleLocale = () => {
    const next = locale === "ar" ? "en" : "ar";
    setLocale(next);
  };

  const isRTL = locale === "ar";

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, setLocale, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
