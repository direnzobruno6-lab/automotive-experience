"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const ENGINES = [
    {
        type: "Inline-4",
        name: "Pure Energy",
        pitch: 0.8,
        descriptionIt: "L'equilibrio perfetto tra efficienza e prestazioni. Il cuore pulsante delle sportive leggere.",
        descriptionEn: "The perfect balance between efficiency and performance. The beating heart of lightweight sports cars."
    },
    {
        type: "Inline-6",
        name: "Perfect Balance",
        pitch: 0.9,
        descriptionIt: "Famoso per la sua fluidità naturale e l'erogazione lineare. Un classico intramontabile.",
        descriptionEn: "Famous for its natural smoothness and linear power delivery. A timeless classic."
    },
    {
        type: "V6",
        name: "Dynamic Force",
        pitch: 0.95,
        descriptionIt: "Compatto e potente, la scelta moderna per le performance ibride di nuova generazione.",
        descriptionEn: "Compact and powerful, the modern choice for next-generation hybrid performance."
    },
    {
        type: "Boxer",
        name: "Low Center",
        pitch: 0.75,
        descriptionIt: "Baricentro basso per una tenuta di strada ineguagliabile. Il suono inconfondibile della passione.",
        descriptionEn: "Low center of gravity for unrivaled handling. The unmistakable sound of passion."
    },
    {
        type: "V8",
        name: "American & Italian Muscle",
        pitch: 0.6,
        descriptionIt: "Il re del sound. Rombante, aggressivo, emozionante. L'architettura più amata dagli appassionati.",
        descriptionEn: "The king of sound. Roaring, aggressive, emotional. The architecture most loved by enthusiasts."
    },
    {
        type: "V10",
        name: "The Scream",
        pitch: 1.1,
        descriptionIt: "Un urlo acuto derivato dalla F1. Raro, esotico e capace di regimi di rotazione incredibili.",
        descriptionEn: "A high-pitched scream derived from F1. Rare, exotic, and capable of incredible RPMs."
    },
    {
        type: "V12",
        name: "Symphony of Cylinders",
        pitch: 1.2,
        descriptionIt: "La massima espressione del lusso e della potenza. Vellutato ai bassi, devastante agli alti.",
        descriptionEn: "The ultimate expression of luxury and power. Velvety at low revs, devastating at high revs."
    },
    {
        type: "W16",
        name: "Engineering Miracle",
        pitch: 0.5,
        descriptionIt: "Oltre ogni limite. 16 cilindri, 4 turbo, velocità che sfidano l'aeronautica.",
        descriptionEn: "Beyond all limits. 16 cylinders, 4 turbos, speeds that challenge aeronautics."
    }
];

export default function EngineShowcase() {
    const { t, language } = useLanguage();
    const [activeEngine, setActiveEngine] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Cleanup audio on unmount (navigation away)
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, []);

    const handleEngineClick = (engine: typeof ENGINES[0]) => {
        // Stop currently playing audio if exists
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        setActiveEngine(engine.name);

        // Use the master high-quality sample for all, but modulate pitch
        // This ensures reliability while providing distinct characteristics
        const audio = new Audio(`/sounds/v12.mp3`); // Using v12.mp3 (aggressive motorcycle) as master base

        // Preserve pitch processing (for browsers that support it, though simple rate change shifts pitch naturally)
        audio.playbackRate = engine.pitch;
        // @ts-ignore - mozPreservesPitch is non-standard but useful for older Firefox
        if (audio.mozPreservesPitch) audio.mozPreservesPitch = false;
        // @ts-ignore
        if (audio.webkitPreservesPitch) audio.webkitPreservesPitch = false;
        // Standard (though typically true by default, we rely on the speed change affecting pitch naturally)
        audio.preservesPitch = false;

        audio.volume = 0.6;

        audioRef.current = audio;
        audio.play().catch(e => console.log("Audio not found or blocked:", e));
    };

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
                            onClick={() => handleEngineClick(engine)}
                            className={`relative bg-secondary/10 border p-8 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden ${activeEngine === engine.name
                                ? "bg-secondary/30 border-red-600/50 shadow-[0_0_30px_rgba(220,38,38,0.2)] scale-105 z-10"
                                : "border-white/5 hover:bg-secondary/20 hover:border-accent/30"
                                }`}
                        >
                            <div
                                className={`text-4xl font-black transition-colors duration-500 mb-4 ${activeEngine === engine.name ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "text-white/10 group-hover:text-white/20"
                                    }`}
                            >
                                {engine.type}
                            </div>
                            <h3
                                className={`text-2xl font-bold uppercase mb-2 transition-all duration-500 ${activeEngine === engine.name ? "text-white scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" : "text-accent opacity-70"
                                    }`}
                            >
                                {engine.name}
                            </h3>
                            <p className={`text-sm leading-relaxed transition-colors duration-500 ${activeEngine === engine.name ? "text-gray-200" : "text-gray-500"
                                }`}>
                                {language === 'it' ? engine.descriptionIt : engine.descriptionEn}
                            </p>

                            {activeEngine === engine.name && (
                                <motion.div
                                    layoutId="active-indicator"
                                    className="absolute inset-0 border-2 border-red-600/50 rounded-2xl pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
