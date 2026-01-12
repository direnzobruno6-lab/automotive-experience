"use client";

import { useLanguage } from "@/context/LanguageContext";
import CarCard from "./CarCard";

const CARS = [
    {
        brand: "Ferrari",
        model: "F40",
        image: "https://images.unsplash.com/photo-1621213320268-e3c3b4991197?q=80&w=2662&auto=format&fit=crop", // F40 ish or generic red supercar
        descriptionIt: "L'ultima opera voluta da Enzo Ferrari. Un capolavoro di ingegneria pura, niente assistenze elettroniche, solo potenza brutale e un'aerodinamica iconica.",
        descriptionEn: "The last masterpiece commissioned by Enzo Ferrari. A masterpiece of pure engineering, no electronic aids, just brutal power and iconic aerodynamics.",
        price: 3200000,
        chartData: [
            { year: '2019', value: 1200000 },
            { year: '2020', value: 1400000 },
            { year: '2021', value: 1800000 },
            { year: '2022', value: 2400000 },
            { year: '2023', value: 3200000 },
        ]
    },
    {
        brand: "Mercedes-Benz",
        model: "300 SL Gullwing",
        image: "https://images.unsplash.com/photo-1541893979-35451a4f00b1?q=80&w=2670&auto=format&fit=crop", // Classic Mercedes
        descriptionIt: "Un'icona di stile e design. Le portiere ad ali di gabbiano e un motore derivato dalle corse la rendono una delle auto più desiderabili della storia.",
        descriptionEn: "An icon of style and design. The gullwing doors and race-derived engine make it one of the most desirable cars in history.",
        price: 1800000,
        chartData: [
            { year: '2019', value: 1100000 },
            { year: '2020', value: 1200000 },
            { year: '2021', value: 1350000 },
            { year: '2022', value: 1600000 },
            { year: '2023', value: 1800000 },
        ]
    },
    {
        brand: "Lamborghini",
        model: "Countach",
        image: "https://images.unsplash.com/photo-1627453308736-234694488340?q=80&w=2670&auto=format&fit=crop", // Lamborghini
        descriptionIt: "La vettura che ha definito il concetto di supercar negli anni '70 e '80. Linee a cuneo, portiere a forbice, un sogno su ruote.",
        descriptionEn: "The car that defined the supercar concept in the 70s and 80s. Wedge lines, scissor doors, a dream on wheels.",
        price: 850000,
        chartData: [
            { year: '2019', value: 400000 },
            { year: '2020', value: 450000 },
            { year: '2021', value: 600000 },
            { year: '2022', value: 750000 },
            { year: '2023', value: 850000 },
        ]
    }
];

export default function Garage() {
    const { t } = useLanguage();

    return (
        <section id="garage" className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-2">{t("exp.subtitle")}</h2>
                    <h3 className="text-4xl md:text-6xl font-heading font-black text-white uppercase">{t("garage.title")}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CARS.map((car, index) => (
                        <CarCard key={car.model} car={car} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
