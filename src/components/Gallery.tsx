"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
    const [rotation, setRotation] = useState(0);

    // Auto-rotation every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => prev - (360 / IMAGES.length)); // Rotate 1 slot
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Derived constants
    const RADIUS_X = 600; // Width of ellipse
    const RADIUS_Z = 300; // Depth of ellipse (affects scale/z-index)

    // Sort images by "depth" (sin angle) so ones in front render last (on top)
    const getCardStyle = (index: number) => {
        const angleDeg = (index * (360 / IMAGES.length)) + rotation;
        const angleRad = (angleDeg * Math.PI) / 180;

        // Ellipse math
        const x = Math.cos(angleRad) * RADIUS_X;
        const z = Math.sin(angleRad) * RADIUS_Z; // This is our "depth" - positive is closer/front

        // Scale based on Z (depth). Front (z=RADIUS_Z) is scale 1, Back (z=-RADIUS_Z) is scale 0.5
        const scale = (z + RADIUS_Z * 1.5) / (RADIUS_Z * 2.5); // Ranges approx 0.4 to 1.0

        // Opacity
        const opacity = (z + RADIUS_Z * 1.5) / (RADIUS_Z * 2.5);

        return { x, z, scale, opacity, zIndex: Math.floor(z + RADIUS_Z) };
    };

    return (
        <section id="gallery" className="py-24 bg-black overflow-hidden relative min-h-screen flex flex-col items-center justify-center">
            <div className="absolute top-10 left-0 w-full z-10 text-center">
                <h2 className="text-4xl md:text-8xl font-heading font-black uppercase text-white/5 tracking-widest pointer-events-none">
                    {t("nav.gallery").toUpperCase()}
                </h2>
                <p className="text-secondary/50 text-sm tracking-widest mt-4 uppercase">Orbital Collection</p>
            </div>

            <div className="relative w-full max-w-[1400px] h-[600px] flex items-center justify-center perspective-1000">
                {IMAGES.map((src, index) => {
                    const style = getCardStyle(index);
                    return (
                        <motion.div
                            key={index}
                            animate={{
                                x: style.x,
                                scale: style.scale,
                                opacity: style.opacity,
                                zIndex: style.zIndex,
                                filter: `blur(${Math.max(0, (1 - style.scale) * 10)}px) brightness(${style.opacity})`
                            }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute w-[300px] h-[400px] md:w-[400px] md:h-[550px] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900"
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                        >
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${src})` }}
                            />

                            {/* Reflection/Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-30 pointer-events-none" />
                        </motion.div>
                    );
                })}

                {/* Central "Sun" or Gravity Point (optional, keeping clean for now or maybe a logo) */}
                <div className="absolute w-2 h-2 bg-accent rounded-full blur-[50px] opacity-20 pointer-events-none" />
            </div>
        </section>
    );
}
