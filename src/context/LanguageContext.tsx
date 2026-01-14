"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "it" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Simple translation dictionary for core UI elements
const translations: Record<Language, Record<string, string>> = {
    it: {
        "nav.home": "Home",
        "nav.vision": "Chi Siamo",
        "nav.services": "Garage",
        "nav.gallery": "Gallery",
        "nav.contacts": "Contatti",
        "hero.subtitle": "Lusso. Performance. Innovazione.",
        "footer.rights": "Tutti i diritti riservati.",
        "vision.description": "Noi ridefiniamo il concetto di eccellenza automobilistica. Dalle icone storiche che hanno segnato un'epoca alle hypercar che sfidano le leggi della fisica.",
        "vision.mission": "La nostra missione è offrire un'esperienza senza compromessi, dove la passione incontra l'investimento. Ogni veicolo è una storia, ogni motore un'opera d'arte.",
        "garage.title": "Il Garage",
        "exp.subtitle": "Investimenti in Movimento",
        "card.value": "Valore Stimato",
        "card.trend": "Trend 5 Anni",
        "engine.title": "Cuore Meccanico",
        "engine.subtitle": "Scopri l'architettura della potenza. Dai 4 cilindri ai mostruosi W16.",
        "hero.start_engine": "Accendi Motori",
        "hero.garage": "Il Garage",
    },
    en: {
        "nav.home": "Home",
        "nav.vision": "Vision",
        "nav.services": "Garage",
        "nav.gallery": "Gallery",
        "nav.contacts": "Contacts",
        "hero.subtitle": "Luxury. Performance. Innovation.",
        "footer.rights": "All rights reserved.",
        "vision.description": "We redefine the concept of automotive excellence. From historic icons that defined an era to hypercars that defy the laws of physics.",
        "vision.mission": "Our mission is to offer an uncompromising experience, where passion meets investment. Every vehicle is a story, every engine a work of art.",
        "garage.title": "The Garage",
        "exp.subtitle": "Moving Investments",
        "card.value": "Estimated Value",
        "card.trend": "5-Year Trend",
        "engine.title": "Mechanical Heart",
        "engine.subtitle": "Discover the architecture of power. From 4 cylinders to monstrous W16s.",
        "hero.start_engine": "Start Engine",
        "hero.garage": "Garage",
    }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("it");

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
