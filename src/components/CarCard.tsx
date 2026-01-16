"use client";

import { Car } from "@/data/cars";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import ValueChart from "./ValueChart";

import Image from "next/image";

interface CarProps {
    car: Car;
    index: number;
    onSelect: (car: Car) => void;
    isSelected?: boolean;
    onToggleCompare?: (car: Car) => void;
}

export default function CarCard({ car, index, onSelect, isSelected, onToggleCompare }: CarProps) {
    const { t, language } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-secondary/30 backdrop-blur-md border rounded-xl overflow-hidden transition-all duration-300 group cursor-pointer ${isSelected ? 'border-accent shadow-[0_0_20px_rgba(220,38,38,0.4)] scale-[1.02]' : 'border-white/10 hover:border-accent/50'}`}
            onClick={() => onSelect(car)}
        >
            <div className="h-64 overflow-hidden relative">
                <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ objectPosition: car.imagePosition || 'center' }}
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* COMPARE TOGGLE */}
                {onToggleCompare && (
                    <button
                        onClick={(e) => { e.stopPropagation(); onToggleCompare(car); }}
                        className={`absolute top-3 right-3 z-20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${isSelected ? 'bg-accent text-white border-accent' : 'bg-black/50 text-gray-300 border-white/20 hover:bg-white hover:text-black'}`}
                    >
                        {isSelected ? 'Selected' : 'Compare'}
                    </button>
                )}

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
                        <span className="text-sm font-bold text-green-400">
                            {(() => {
                                if (!car.chartData || car.chartData.length < 2) return "+0%";
                                const first = car.chartData[0].value;
                                const last = car.chartData[car.chartData.length - 1].value;
                                const growth = ((last - first) / first) * 100;
                                return `+${growth.toFixed(1)}%`;
                            })()}
                        </span>
                    </div>
                    <ValueChart data={car.chartData} />
                </div>
            </div>
        </motion.div >
    );
}
