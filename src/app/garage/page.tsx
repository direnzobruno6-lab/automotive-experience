"use client";

import { useLanguage } from "@/context/LanguageContext";
import CarCard from "../../components/CarCard";
import ComparisonModal from "../../components/ComparisonModal";
import { motion, AnimatePresence } from "framer-motion";
import { CARS, Car } from "@/data/cars";
import { useState } from "react";
import { X, Wind, Armchair, Zap } from "lucide-react";

export default function GaragePage() {
    const { t, language } = useLanguage();
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);
    const [compareList, setCompareList] = useState<Car[]>([]);
    const [showCompareModal, setShowCompareModal] = useState(false);

    const handleToggleCompare = (car: Car) => {
        if (compareList.find(c => c.model === car.model)) {
            setCompareList(prev => prev.filter(c => c.model !== car.model));
        } else {
            if (compareList.length >= 2) return; // Max 2
            setCompareList(prev => [...prev, car]);
        }
    };

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
        <main className="min-h-screen bg-black pt-32 pb-24 relative">
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
                                <CarCard
                                    key={car.model}
                                    car={car}
                                    index={index}
                                    onSelect={setSelectedCar}
                                    isSelected={!!compareList.find(c => c.model === car.model)}
                                    onToggleCompare={handleToggleCompare}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* COMPARISON FLOATING DOCK */}
            <AnimatePresence>
                {compareList.length > 0 && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 bg-neutral-900/90 backdrop-blur-lg border border-white/10 px-6 py-4 rounded-full shadow-2xl flex items-center gap-6"
                    >
                        <div className="flex -space-x-4">
                            {compareList.map((car, i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-black overflow-hidden relative">
                                    <img src={car.image} className="w-full h-full object-cover" />
                                </div>
                            ))}
                            {compareList.length < 2 && (
                                <div className="w-12 h-12 rounded-full border-2 border-white/10 bg-white/5 flex items-center justify-center text-gray-500 text-xs">
                                    +1
                                </div>
                            )}
                        </div>

                        <div className="h-8 w-[1px] bg-white/10"></div>

                        <button
                            onClick={() => setShowCompareModal(true)}
                            disabled={compareList.length < 2}
                            className={`px-6 py-2 rounded-full font-bold uppercase text-sm tracking-wider transition-all ${compareList.length === 2 ? 'bg-accent text-white hover:bg-white hover:text-black shadow-[0_0_15px_rgba(220,38,38,0.5)]' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}
                        >
                            Compare
                        </button>

                        <button
                            onClick={() => setCompareList([])}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-400" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* COMPARISON MODAL */}
            <AnimatePresence>
                {showCompareModal && compareList.length === 2 && (
                    <ComparisonModal
                        cars={compareList}
                        onClose={() => setShowCompareModal(false)}
                    />
                )}
            </AnimatePresence>

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
                                    <div className="mb-8">
                                        <div className="flex items-center gap-3 mb-3">
                                            <h4 className="text-2xl font-heading font-black text-white uppercase tracking-wider">{t("garage.story")}</h4>
                                        </div>
                                        <p className="text-gray-300 leading-relaxed text-lg italic border-l-2 border-accent pl-4">
                                            "{language === 'it' ? selectedCar.extendedDescriptionIt : selectedCar.extendedDescriptionEn}"
                                        </p>
                                    </div>

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
