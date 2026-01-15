"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
    const { t } = useLanguage();
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2566&auto=format&fit=crop", // McLaren/Supercar dark
        "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070&auto=format&fit=crop", // Porsche dark
        "https://images.unsplash.com/photo-1544614629-99609c1fa6e9?q=80&w=2070&auto=format&fit=crop", // Modern abstract fluid car
        "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2067&auto=format&fit=crop", // Mercedes detail
        "https://images.unsplash.com/photo-1611599553556-912df04f1418?q=80&w=2070&auto=format&fit=crop", // Ferrari red/dark
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop", // Chevrolet Corvette
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop", // Ferrari 488 Pista
        "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop", // Audi R8
        "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop", // Lamborghini Huracan
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop", // Dodge Challenger
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop", // Rolls Royce
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop", // Mercedes AMG
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop", // Classic Mustang
        "https://images.unsplash.com/photo-1553440291-6c2cb5d56df6?q=80&w=2070&auto=format&fit=crop", // Modern Sports Car
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop"  // Lamborghini Aventador
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Background Slideshow */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url("${images[currentImage]}")` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-black uppercase tracking-tighter text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        Automotive <span className="text-white">Experience</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light tracking-widest uppercase mb-12">
                        {t("hero.subtitle")}
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                        <motion.a
                            href="#garage"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-white text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors duration-300"
                        >
                            {t("hero.garage")}
                        </motion.a>
                        <motion.a
                            href="/start-engine"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-accent text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors duration-300"
                        >
                            {t("hero.start_engine")}
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
