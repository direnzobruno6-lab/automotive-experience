"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const ENGINES = [
    {
        type: "Inline-4",
        name: "Pure Energy",
        descriptionIt: "L'equilibrio perfetto tra efficienza e prestazioni. Il cuore pulsante delle sportive leggere.",
        descriptionEn: "The perfect balance between efficiency and performance. The beating heart of lightweight sports cars."
    },
    {
        type: "Inline-6",
        name: "Perfect Balance",
        descriptionIt: "Famoso per la sua fluidità naturale e l'erogazione lineare. Un classico intramontabile.",
        descriptionEn: "Famous for its natural smoothness and linear power delivery. A timeless classic."
    },
    {
        type: "V6",
        name: "Dynamic Force",
        descriptionIt: "Compatto e potente, la scelta moderna per le performance ibride di nuova generazione.",
        descriptionEn: "Compact and powerful, the modern choice for next-generation hybrid performance."
    },
    {
        type: "Boxer",
        name: "Low Center",
        descriptionIt: "Baricentro basso per una tenuta di strada ineguagliabile. Il suono inconfondibile della passione.",
        descriptionEn: "Low center of gravity for unrivaled handling. The unmistakable sound of passion."
    },
    {
        type: "V8",
        name: "American & Italian Muscle",
        descriptionIt: "Il re del sound. Rombante, aggressivo, emozionante. L'architettura più amata dagli appassionati.",
        descriptionEn: "The king of sound. Roaring, aggressive, emotional. The architecture most loved by enthusiasts."
    },
    {
        type: "V10",
        name: "The Scream",
        descriptionIt: "Un urlo acuto derivato dalla F1. Raro, esotico e capace di regimi di rotazione incredibili.",
        descriptionEn: "A high-pitched scream derived from F1. Rare, exotic, and capable of incredible RPMs."
    },
    {
        type: "V12",
        name: "Symphony of Cylinders",
        descriptionIt: "La massima espressione del lusso e della potenza. Vellutato ai bassi, devastante agli alti.",
        descriptionEn: "The ultimate expression of luxury and power. Velvety at low revs, devastating at high revs."
    },
    {
        type: "W16",
        name: "Engineering Miracle",
        descriptionIt: "Oltre ogni limite. 16 cilindri, 4 turbo, velocità che sfidano l'aeronautica.",
        descriptionEn: "Beyond all limits. 16 cylinders, 4 turbos, speeds that challenge aeronautics."
    }
];

export default function EngineShowcase() {
    const { t, language } = useLanguage();

    return (
        <section className="min-h-screen bg-black text-white pt-32 pb-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-heading font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-6">
                        {t("engine.title")}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {t("engine.subtitle")}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ENGINES.map((engine, index) => (
                        <motion.div
                            key={engine.type}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-secondary/10 border border-white/5 p-8 rounded-2xl hover:bg-secondary/20 hover:border-accent/50 transition-all duration-300 group cursor-default"
                        >
                            <div className="text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors mb-4">{engine.type}</div>
                            <h3 className="text-xl font-bold text-accent mb-2">{engine.name}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {language === 'it' ? engine.descriptionIt : engine.descriptionEn}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
