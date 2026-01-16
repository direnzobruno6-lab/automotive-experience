"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const IMAGES = [
    "/images/garage/chiron_authentic.jpg",
    "/images/garage/laferrari_authentic.jpg",
    "/images/garage/p1_authentic.jpg",
    "/images/garage/918_authentic.jpg",
    "/images/garage/jesko_authentic.jpg",
    "/images/garage/huayra_authentic.jpg",
    "/images/garage/fordgt_authentic.jpg",
    "/images/garage/mc12_authentic.jpg",
    "/images/garage/lfa_authentic.jpg",
    "/images/garage/300sl_authentic.jpg",
    "/images/garage/countach_authentic.jpg",
    "/images/garage/veyron_authentic.jpg"
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
