"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { uz } from "../locales/uz";
import { en } from "../locales/en";
import { ru } from "../locales/ru";

const translations = { uz, en, ru };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("uz");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale && ["uz", "en", "ru"].includes(savedLocale)) {
      setLocale(savedLocale);
    }
  }, []);

  const t = (section, key) => {
    if (!translations[locale] || !translations[locale][section] || !translations[locale][section][key]) {
      return key;
    }
    return translations[locale][section][key];
  };

  const changeLanguage = (lang) => {
    if (["uz", "en", "ru"].includes(lang)) {
      setLocale(lang);
      localStorage.setItem("locale", lang);
    }
  };

  // To prevent hydration mismatch, we can optionally provide a value that is stable
  // But usually, just ensuring the state is consistent is enough.
  return (
    <LanguageContext.Provider value={{ locale, changeLanguage, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
