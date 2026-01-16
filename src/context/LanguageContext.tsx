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
        "vision.description": "Automotive X non è semplicemente un concessionario o un club: è un santuario per l'eccellenza meccanica. Fondato sulla passione pura per l'ingegneria e il design, ci dedichiamo a preservare e celebrare la storia dell'automobile. Dalle linee immortali delle icone classiche che hanno definito il XX secolo, fino alle hypercar moderne che sfidano le leggi della fisica con tecnologie aerospaziali, curiamo una collezione che trascende il concetto di trasporto. Per noi, ogni auto è una scultura in movimento, un testimone di innovazione e audacia umana.",
        "vision.mission": "La nostra missione è offrire un'esperienza senza compromessi, dove la passione incontra l'investimento strategico. Non ci limitiamo a vendere o mostrare veicoli; creiamo un ponte tra il passato glorioso e il futuro elettrizzante. Offriamo consulenza esperta, accesso esclusivo a modelli rari e una community per chi comprende che il rombo di un motore è la più bella sinfonia mai composta. Ogni veicolo che trattiamo è selezionato non solo per le sue prestazioni, ma per la storia che racconta e l'emozione che evoca.",
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
        "vision.description": "Automotive X is not merely a dealership or a club; it is a sanctuary for mechanical excellence. Built on pure passion for engineering and design, we dedicate ourselves to preserving and celebrating automotive history. From the immortal lines of classic icons that defined the 20th century, to modern hypercars that defy the laws of physics with aerospace technology, we curate a collection that transcends the concept of transportation. To us, every car is a moving sculpture, a testament to human innovation and boldness.",
        "vision.mission": "Our mission is to offer an uncompromising experience, where passion meets strategic investment. We don't just sell or showcase vehicles; we bridge the glorious past with the electrifying future. We provide expert consulting, exclusive access to rare models, and a community for those who understand that the roar of an engine is the finest symphony ever composed. Every vehicle we handle is selected not just for its performance, but for the story it tells and the emotion it evokes.",
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
