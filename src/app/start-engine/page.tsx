"use client";

import { useLanguage } from "@/context/LanguageContext";
import EngineShowcase from "@/components/EngineShowcase";
import { motion } from "framer-motion";

export default function StartEnginePage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-black pt-32 pb-24 text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-heading font-black uppercase text-white mb-6">
                        <span className="text-accent">Start</span> Engine
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto uppercase tracking-widest">
                        {t("engines.subtitle") || "The heart of performance"}
                    </p>
                </motion.div>

                <EngineShowcase />
            </div>
        </div>
    );
}
