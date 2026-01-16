"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

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
    "/images/garage/veyron_authentic.jpg",
    "/images/garage/veneno.jpg",
    "/images/garage/f40.jpg",
];

export default function Gallery() {
    const { t } = useLanguage();
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} id="gallery" className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-10 left-0 w-full z-10 text-center">
                    <h2 className="text-4xl md:text-8xl font-heading font-black uppercase text-white/10 tracking-widest pointer-events-none">
                        {t("nav.gallery").toUpperCase()}
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-16 px-24">
                    {IMAGES.map((src, index) => (
                        <Card key={index} src={src} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

const Card = ({ src, index }: { src: string; index: number }) => {
    return (
        <div
            className="group relative h-[60vh] w-[40vw] md:w-[30vw] overflow-hidden bg-neutral-200 rounded-xl"
        >
            <div
                style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-accent font-bold tracking-widest text-sm mb-2">COLLECTION</span>
                <span className="text-white font-heading text-3xl font-bold uppercase">Masterpiece {index + 1}</span>
            </div>
        </div>
    );
};
