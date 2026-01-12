"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Vision() {
    const { t } = useLanguage();

    return (
        <section id="vision" className="py-24 bg-background relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-8">
                        <span className="text-accent">Vision</span> & Heritage
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-6">
                        {t("vision.description") || "Noi ridefiniamo il concetto di eccellenza automobilistica. Dalle icone storiche che hanno segnato un'epoca alle hypercar che sfidano le leggi della fisica."}
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        {t("vision.mission") || "La nostra missione è offrire un'esperienza senza compromessi, dove la passione incontra l'investimento. Ogni veicolo è una storia, ogni motore un'opera d'arte."}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
