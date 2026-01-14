"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2566&auto=format&fit=crop")', // Placeholder automotive image
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

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
