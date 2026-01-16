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
    const [activeFilter, setActiveFilter] = useState("All");

    const FILTERS = ["All", "V12", "V10", "V8", "90s", "Modern", "Classic"];

    const handleToggleCompare = (car: Car) => {
        if (compareList.find(c => c.model === car.model)) {
            setCompareList(prev => prev.filter(c => c.model !== car.model));
        } else {
            if (compareList.length >= 2) return; // Max 2
            setCompareList(prev => [...prev, car]);
        }
    };

    // Filter logic
    const filteredCars = CARS.filter(car => {
        if (activeFilter === "All") return true;

        const engine = (car.details.engineEn + car.details.engineIt).toUpperCase();
        const year = parseInt(car.chartData[0].year); // Base year approximately

        if (activeFilter === "V12") return engine.includes("V12");
        if (activeFilter === "V10") return engine.includes("V10");
        if (activeFilter === "V8") return engine.includes("V8");

        // Approximate decade filtering based on known car data or baseYear logic
        // Since baseYear in config is mostly 2015 for calculation, we can't rely on it for age.
        // We will infer decade from model strings or description for now as data.ts baseYear is for finance.
        // ACTUALLY, checking data.ts, baseYear IS 2015 for many classics to calculate CURRENT value.
        // So I need a better heuristic. 
        // I will match specific models or keywords for eras? No, that's brittle.
        // Let's use the Description text searching for years or "90s", "80s".
        // OR better: I will manually tag them in logic here for reliability since I don't want to edit data.ts yet.

        // Refined logic: search description for "19xx" or "20xx"?
        // Let's stick to Engine filters for now which are 100% reliable?
        // Wait, "90s" was requested.
        // I will use a list of known 90s cars from the dataset: F50(not here), F1, EB110, Diablo(not here), MC12(2004), CLK GTR(not here).
        // Let's look at the dataset I have:
        // F40 (87-92), 300SL (50s), Countach (70s/80s), Chiron (Modern), Huayra (Modern), P1 (Modern), 918 (Modern), LaFerrari (Modern), Jesko (Modern), Valkyrie (Modern), Veneno (Modern), LFA (Modern), Ford GT (Modern), MC12 (2000s), Veyron (2000s), F1 (90s), Enzo (2000s), Carrera GT (2000s), Zonda (2000s), Miura (60s), EB110 (90s), 280SE (60s), 190D (80s/90s).

        // "90s" -> EB110, F1
        // "Classic" -> 300SL, Countach, Miura, 280SE, 190D, F40.
        // "Modern" -> Everything else.

        // Implementation:
        const classics = ["300 SL", "Countach", "Miura", "280 SE", "190 D", "F40"];
        const nineties = ["EB110", "F1"];

        if (activeFilter === "Classic") return classics.some(c => car.model.includes(c));
        if (activeFilter === "90s") return nineties.some(c => car.model.includes(c));
        if (activeFilter === "Modern") return !classics.some(c => car.model.includes(c)) && !nineties.some(c => car.model.includes(c));

        return true;
    });

    // Group cars by brand (from filtered list)
    const groupedCars = filteredCars.reduce((acc, car) => {
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
                <div className="text-center mb-10">
                    <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-2">{t("hero.garage")}</h2>
                    <h3 className="text-4xl md:text-6xl font-heading font-black text-white uppercase mb-8">{t("garage.title")}</h3>

                    {/* FILTER BAR */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {FILTERS.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all border ${activeFilter === filter ? 'bg-white text-black border-white scale-105' : 'bg-transparent text-gray-500 border-gray-800 hover:border-gray-500 hover:text-white'}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
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
