"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const IMAGES = [
    "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544605975-d449e75529f7?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1570733117311-d990c3816c47?q=80&w=2670&auto=format&fit=crop",
];

export default function Gallery() {
    const { t } = useLanguage();

    return (
        <section id="gallery" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-heading font-black uppercase text-center mb-16">
                    <span className="text-secondary/50">Visual</span> {t("nav.gallery")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {IMAGES.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square overflow-hidden group rounded-lg"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${src})` }}
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-heading uppercase tracking-widest text-sm border border-white px-4 py-2">View</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
