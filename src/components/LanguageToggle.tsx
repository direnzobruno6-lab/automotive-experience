"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center space-x-2 bg-secondary/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            <button
                onClick={() => setLanguage("it")}
                className={`text-sm font-medium transition-colors ${language === "it" ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
            >
                IT
            </button>
            <span className="text-gray-600">|</span>
            <button
                onClick={() => setLanguage("en")}
                className={`text-sm font-medium transition-colors ${language === "en" ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
            >
                EN
            </button>
        </div>
    );
}
