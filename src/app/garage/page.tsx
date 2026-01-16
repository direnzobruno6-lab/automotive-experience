"use client";

import { useLanguage } from "@/context/LanguageContext";
import CarCard from "../../components/CarCard";
import { motion, AnimatePresence } from "framer-motion";
import { CARS, Car } from "@/data/cars";
import { useState } from "react";
import { X, Wind, Armchair, Zap } from "lucide-react";

export default function GaragePage() {
    const { t, language } = useLanguage();
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);

    // Group cars by brand
    const groupedCars = CARS.reduce((acc, car) => {
        if (!acc[car.brand]) {
            acc[car.brand] = [];
        }
        acc[car.brand].push(car);
        return acc;
    }, {} as Record<string, typeof CARS>);

    // Sort brands alphabetically
    const sortedBrands = Object.keys(groupedCars).sort();

    return (
        <main className="min-h-screen bg-black pt-32 pb-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-2">{t("hero.garage")}</h2>
                    <h3 className="text-4xl md:text-6xl font-heading font-black text-white uppercase">{t("garage.title")}</h3>
                </div>

                {sortedBrands.map((brand) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        key={brand}
                        className="mb-20"
                    >
                        <h4 className="text-3xl font-heading font-bold text-red-600 mb-8 border-b border-gray-800 pb-4 flex items-center">
                            <span className="w-2 h-8 bg-white mr-4"></span>
                            {brand}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {groupedCars[brand].map((car, index) => (
                                <CarCard key={car.model} car={car} index={index} onSelect={setSelectedCar} />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* DETAIL MODAL */}
            <AnimatePresence>
                {selectedCar && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
                        onClick={() => setSelectedCar(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            className="bg-neutral-900 border border-white/10 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCar(null)}
                                className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full hover:bg-white/20 transition-colors"
                            >
                                <X className="text-white w-6 h-6" />
                            </button>

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${selectedCar.image})`,
                                        backgroundPosition: selectedCar.imagePosition || 'center'
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent md:bg-gradient-to-r" />
                                <div className="absolute bottom-6 left-6 z-10">
                                    <h2 className="text-4xl font-heading font-black text-white uppercase mb-1">{selectedCar.model}</h2>
                                    <h3 className="text-xl font-bold text-accent uppercase tracking-widest">{selectedCar.brand}</h3>
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <Wind className="text-blue-400 w-5 h-5" />
                                            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Exterior Design</h4>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed">
                                            {language === 'it' ? selectedCar.details.exteriorIt : selectedCar.details.exteriorEn}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <Armchair className="text-orange-400 w-5 h-5" />
                                            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Interior & Cockpit</h4>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed">
                                            {language === 'it' ? selectedCar.details.interiorIt : selectedCar.details.interiorEn}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <Zap className="text-yellow-400 w-5 h-5" />
                                            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Engine & Specs</h4>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed">
                                            {language === 'it' ? selectedCar.details.engineIt : selectedCar.details.engineEn}
                                        </p>
                                    </div>

                                    <div className="pt-6 border-t border-white/10 mt-8 flex justify-between items-center">
                                        <span className="text-gray-500 text-sm">{selectedCar.chartData[selectedCar.chartData.length - 1].year} Market Value</span>
                                        <span className="text-3xl font-bold text-white">€ {selectedCar.price.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
