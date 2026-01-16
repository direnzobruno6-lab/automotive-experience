"use client";

import { Car } from "@/data/cars";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { X, TrendingUp, Calendar, DollarSign, Zap } from "lucide-react";
import ValueChart from "./ValueChart";

interface ComparisonModalProps {
    cars: Car[];
    onClose: () => void;
}

export default function ComparisonModal({ cars, onClose }: ComparisonModalProps) {
    const { t, language } = useLanguage();
    const [car1, car2] = cars;

    // Helper to get raw growth percentage for comparison
    const getGrowth = (car: Car) => {
        if (!car.chartData || car.chartData.length < 2) return 0;
        const first = car.chartData[0].value;
        const last = car.chartData[car.chartData.length - 1].value;
        return ((last - first) / first) * 100;
    };

    const growth1 = getGrowth(car1);
    const growth2 = getGrowth(car2);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
        >
            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            >
                <X className="text-white w-8 h-8" />
            </button>

            <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="w-full max-w-7xl h-full flex flex-col relative"
            >
                {/* HEADERS - SPLIT SCREEN */}
                <div className="flex h-[40vh] md:h-[50vh] relative">
                    {/* CAR 1 */}
                    <div className="w-1/2 relative overflow-hidden group">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                            style={{ backgroundImage: `url(${car1.image})`, objectPosition: car1.imagePosition || 'center' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/20" />
                        <div className="absolute bottom-8 left-8 z-10">
                            <h3 className="text-accent text-sm md:text-lg font-bold uppercase tracking-widest mb-1">{car1.brand}</h3>
                            <h2 className="text-2xl md:text-5xl font-heading font-black text-white uppercase leading-none">{car1.model}</h2>
                        </div>
                    </div>

                    {/* VS BADGE */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.6)] border-4 border-black">
                        <span className="font-sys font-black text-white text-xl md:text-3xl italic">VS</span>
                    </div>

                    {/* CAR 2 */}
                    <div className="w-1/2 relative overflow-hidden group">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                            style={{ backgroundImage: `url(${car2.image})`, objectPosition: car2.imagePosition || 'center' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-transparent to-black/20" />
                        <div className="absolute bottom-8 right-8 z-10 text-right">
                            <h3 className="text-accent text-sm md:text-lg font-bold uppercase tracking-widest mb-1">{car2.brand}</h3>
                            <h2 className="text-2xl md:text-5xl font-heading font-black text-white uppercase leading-none">{car2.model}</h2>
                        </div>
                    </div>
                </div>

                {/* DATA COMPARISON GRID */}
                <div className="flex-1 bg-neutral-900/50 border-t border-white/10 overflow-y-auto">
                    <div className="grid grid-cols-3 gap-y-8 p-8 max-w-5xl mx-auto">

                        {/* LABELS COLUMN */}
                        <div className="col-span-3 grid grid-cols-3 text-center mb-4 border-b border-white/10 pb-4">
                            <div className="text-gray-400 font-bold uppercase tracking-widest text-xs md:text-sm">{car1.model}</div>
                            <div className="text-white font-black uppercase tracking-widest text-xs md:text-sm">METRIC</div>
                            <div className="text-gray-400 font-bold uppercase tracking-widest text-xs md:text-sm">{car2.model}</div>
                        </div>

                        {/* PRICE */}
                        <div className="col-span-3 grid grid-cols-3 text-center items-center group hover:bg-white/5 py-4 rounded-lg transition-colors">
                            <div className={`text-xl md:text-3xl font-bold ${car1.price > car2.price ? 'text-green-400' : 'text-white'}`}>
                                € {(car1.price / 1000000).toFixed(2)}M
                            </div>
                            <div className="flex flex-col items-center justify-center text-gray-500 text-xs uppercase tracking-widest">
                                <DollarSign className="w-5 h-5 mb-1 text-accent" />
                                Current Value
                            </div>
                            <div className={`text-xl md:text-3xl font-bold ${car2.price > car1.price ? 'text-green-400' : 'text-white'}`}>
                                € {(car2.price / 1000000).toFixed(2)}M
                            </div>
                        </div>

                        {/* GROWTH */}
                        <div className="col-span-3 grid grid-cols-3 text-center items-center group hover:bg-white/5 py-4 rounded-lg transition-colors">
                            <div className={`text-lg md:text-2xl font-bold ${growth1 > growth2 ? 'text-green-400' : 'text-white'}`}>
                                +{growth1.toFixed(0)}%
                            </div>
                            <div className="flex flex-col items-center justify-center text-gray-500 text-xs uppercase tracking-widest">
                                <TrendingUp className="w-5 h-5 mb-1 text-accent" />
                                Growth (10y)
                            </div>
                            <div className={`text-lg md:text-2xl font-bold ${growth2 > growth1 ? 'text-green-400' : 'text-white'}`}>
                                +{growth2.toFixed(0)}%
                            </div>
                        </div>

                        {/* SPECS (Engine - Simplified extraction from string) */}
                        <div className="col-span-3 grid grid-cols-3 text-center items-center group hover:bg-white/5 py-4 rounded-lg transition-colors">
                            <div className="text-sm md:text-lg text-gray-300 px-4">
                                {language === 'it' ? car1.details.engineIt : car1.details.engineEn}
                            </div>
                            <div className="flex flex-col items-center justify-center text-gray-500 text-xs uppercase tracking-widest">
                                <Zap className="w-5 h-5 mb-1 text-accent" />
                                Engine
                            </div>
                            <div className="text-sm md:text-lg text-gray-300 px-4">
                                {language === 'it' ? car2.details.engineIt : car2.details.engineEn}
                            </div>
                        </div>

                    </div>
                </div>

            </motion.div>
        </motion.div>
    );
}
