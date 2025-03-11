import React, { createContext, useContext, ReactNode, useState } from "react";

type Language = "en" | "vi" | "fr";

interface LocalizationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Simple translation object - can be expanded for more languages and phrases
const translations = {
  en: {
    greeting: "Hello I'm Minh Tran",
    "job.title": "Software Engineer",
    "download.cv": "Download CV",
    "hire.me": "Hire me",
    // Add more translations as needed
  },
  vi: {
    greeting: "Xin chào tôi là Minh Trần",
    "job.title": "Kỹ sư phần mềm",
    "download.cv": "Tải CV",
    "hire.me": "Thuê tôi",
    // Add more translations as needed
  },
  fr: {
    greeting: "Bonjour, je suis Minh Tran",
    "job.title": "Ingénieur logiciel",
    "download.cv": "Télécharger CV",
    "hire.me": "Embauchez-moi",
    // Add more translations as needed
  },
};

const LocalizationContext = createContext<LocalizationContextType | undefined>(
  undefined
);

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  // Translate function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LocalizationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error(
      "useLocalization must be used within a LocalizationProvider"
    );
  }
  return context;
};
