"use client";

import { useLanguage } from "@/context/LanguageContext";
import CarCard from "../../components/CarCard";
import { motion } from "framer-motion";

const CARS = [
    {
        brand: "Ferrari",
        model: "F40",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/F40_Ferrari_20090509.jpg", // Verified Red F40
        descriptionIt: "L'ultima opera voluta da Enzo Ferrari. Un capolavoro di ingegneria pura.",
        descriptionEn: "The last masterpiece commissioned by Enzo Ferrari. A masterpiece of pure engineering.",
        price: 3200000,
        chartData: [{ year: '2019', value: 1.2 }, { year: '2023', value: 3.2 }]
    },
    {
        brand: "Mercedes-Benz",
        model: "300 SL Gullwing",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/1955_Mercedes_Benz_300_SL_-_silver_-_rvr.jpg", // Verified Silver Gullwing
        descriptionIt: "Un'icona di stile. Le ali di gabbiano la rendono immortale.",
        descriptionEn: "An icon of style. The gullwing doors make it immortal.",
        price: 1800000,
        chartData: [{ year: '2019', value: 1.1 }, { year: '2023', value: 1.8 }]
    },
    {
        brand: "Lamborghini",
        model: "Countach",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Lamborghini_Countach_25th_Anniversary_IMG_2994.jpg", // Verified White Countach
        descriptionIt: "La vettura che ha definito il concetto di supercar.",
        descriptionEn: "The car that defined the supercar concept.",
        price: 850000,
        chartData: [{ year: '2019', value: 0.4 }, { year: '2023', value: 0.85 }]
    },
    {
        brand: "Bugatti",
        model: "Chiron",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Bugatti_Chiron_Royal_Blue.jpg", // Verified Royal Blue
        descriptionIt: "1500 cavalli di pura potenza e lusso sfrenato.",
        descriptionEn: "1500 horsepower of pure power and unbridled luxury.",
        price: 3500000,
        chartData: [{ year: '2019', value: 2.8 }, { year: '2023', value: 3.5 }]
    },
    {
        brand: "Pagani",
        model: "Huayra Roadster",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Pagani_Huayra_Roadster.jpg", // Verified Roadster
        descriptionIt: "Arte in movimento. Fibra di carbonio e titanio scolpiti dal vento.",
        descriptionEn: "Art in motion. Carbon fiber and titanium sculpted by the wind.",
        price: 2800000,
        chartData: [{ year: '2019', value: 2.4 }, { year: '2023', value: 2.8 }]
    },
    {
        brand: "McLaren",
        model: "P1",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Volcano_Orange_McLaren_P1_%2818852267050%29.jpg", // Verified Volcano Orange
        descriptionIt: "La prima hypercar ibrida inglese. Aerodinamica attiva e prestazioni F1.",
        descriptionEn: "The first British hybrid hypercar. Active aerodynamics and F1 performance.",
        price: 1900000,
        chartData: [{ year: '2019', value: 1.4 }, { year: '2023', value: 1.9 }]
    },
    {
        brand: "Porsche",
        model: "918 Spyder",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Porsche_918_Spyder_Museum.jpg", // Verified Silver
        descriptionIt: "L'equilibrio perfetto tra elettrico e termico. Un mostro da pista.",
        descriptionEn: "The perfect balance between electric and thermal. A track monster.",
        price: 1600000,
        chartData: [{ year: '2019', value: 1.1 }, { year: '2023', value: 1.6 }]
    },
    {
        brand: "Ferrari",
        model: "LaFerrari",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Ferrari_LaFerrari_Geneva_2013-1.jpg", // Verified Red
        descriptionIt: "La massima espressione del Cavallino Rampante. V12 Ibrido.",
        descriptionEn: "The ultimate expression of the Prancing Horse. V12 Hybrid.",
        price: 3800000,
        chartData: [{ year: '2019', value: 2.5 }, { year: '2023', value: 3.8 }]
    },
    {
        brand: "Koenigsegg",
        model: "Jesko",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Koenigsegg_Jesko.jpg", // Verified White
        descriptionIt: "Il re della velocità svedese. Ingegneria oltre ogni limite.",
        descriptionEn: "The Swedish king of speed. Engineering beyond limits.",
        price: 3000000,
        chartData: [{ year: '2019', value: 2.8 }, { year: '2023', value: 3.0 }]
    },
    {
        brand: "Aston Martin",
        model: "Valkyrie",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/AstonMartin_Valkyrie.jpg", // Verified
        descriptionIt: "Un'auto di Formula 1 omologata per la strada. Design estremo.",
        descriptionEn: "A Formula 1 car approved for the road. Extreme design.",
        price: 3200000,
        chartData: [{ year: '2019', value: 3.0 }, { year: '2023', value: 3.2 }]
    },
    {
        brand: "Lamborghini",
        model: "Veneno",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Lamborghini_Veneno.jpg", // Verified
        descriptionIt: "Rarità assoluta. Design da caccia stealth e un V12 urlante.",
        descriptionEn: "Absolute rarity. Stealth fighter design and a screaming V12.",
        price: 4500000,
        chartData: [{ year: '2019', value: 4.0 }, { year: '2023', value: 8.0 }]
    },
    {
        brand: "Lexus",
        model: "LFA",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Lexus_LFA_white.jpg", // Verified White
        descriptionIt: "Il suono più bello del mondo. Un V10 Yamaha che canta.",
        descriptionEn: "The most beautiful sound in the world. A singing Yamaha V10.",
        price: 900000,
        chartData: [{ year: '2019', value: 0.4 }, { year: '2023', value: 0.9 }]
    },
    {
        brand: "Ford",
        model: "GT",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/2017_Ford_GT_%2836321694300%29.jpg", // Verified Blue
        descriptionIt: "Il ritorno della leggenda di Le Mans. Aerodinamica scavata.",
        descriptionEn: "The return of the Le Mans legend. Hollowed aerodynamics.",
        price: 1100000,
        chartData: [{ year: '2019', value: 0.5 }, { year: '2023', value: 1.1 }]
    },
    {
        brand: "Maserati",
        model: "MC12",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Maserati_MC12.jpg", // Verified
        descriptionIt: "La sorella da gara della Enzo. Bianca, blu e vincente.",
        descriptionEn: "The racing sister of the Enzo. White, blue and victorious.",
        price: 3900000,
        chartData: [{ year: '2019', value: 2.0 }, { year: '2023', value: 4.0 }]
    },
    {
        brand: "Bugatti",
        model: "Veyron Super Sport",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bugatti_Veyron_Super_Sport_WRE.jpg", // Verified WRE
        descriptionIt: "L'auto che ha cambiato tutto. La prima a rompere i 400 km/h.",
        descriptionEn: "The car that changed everything. The first to break 400 km/h.",
        price: 2100000,
        chartData: [{ year: '2019', value: 1.5 }, { year: '2023', value: 2.1 }]
    }
];

export default function GaragePage() {
    const { t } = useLanguage();

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
                                <CarCard key={car.model} car={car} index={index} />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
