"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import ValueChart from "./ValueChart";

import Image from "next/image";

interface CarProps {
    brand: string;
    model: string;
    image: string;
    descriptionIt: string;
    descriptionEn: string;
    price: number;
    chartData: { year: string; value: number }[];
}

export default function CarCard({ car, index }: { car: CarProps; index: number }) {
    const { t, language } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-secondary/30 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-accent/50 transition-colors duration-500 group"
        >
                <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 z-10">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-1">{car.brand}</h3>
                    <h4 className="text-2xl font-heading font-bold text-white max-w-[90%]">{car.model}</h4>
                </div>
            </div>

            <div className="p-6">
                <p className="text-gray-400 text-sm leading-relaxed mb-6 h-20 overflow-hidden">
                    {language === 'it' ? car.descriptionIt : car.descriptionEn}
                </p>

                <div className="mb-4">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-xs uppercase text-gray-500 tracking-wider">{t("card.value")}</span>
                        <span className="text-xl font-bold text-white">€ {car.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-xs uppercase text-gray-500 tracking-wider">{t("card.trend")}</span>
                        <span className="text-sm font-bold text-green-400">+12.5%</span> {/* Dynamic calculation logic could go here */}
                    </div>
                    <ValueChart data={car.chartData} />
                </div>
            </div>
        </motion.div >
    );
}
