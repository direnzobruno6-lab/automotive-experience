"use client";

import { useLanguage } from "@/context/LanguageContext";
import CarCard from "./CarCard";

const CARS = [
    {
        brand: "Ferrari",
        model: "F40",
        image: "https://images.unsplash.com/photo-1621213320268-e3c3b4991197?q=80&w=2662&auto=format&fit=crop",
        descriptionIt: "L'ultima opera voluta da Enzo Ferrari. Un capolavoro di ingegneria pura.",
        descriptionEn: "The last masterpiece commissioned by Enzo Ferrari. A masterpiece of pure engineering.",
        price: 3200000,
        chartData: [{ year: '2019', value: 1.2 }, { year: '2023', value: 3.2 }]
    },
    {
        brand: "Mercedes-Benz",
        model: "300 SL Gullwing",
        image: "https://images.unsplash.com/photo-1541893979-35451a4f00b1?q=80&w=2670&auto=format&fit=crop",
        descriptionIt: "Un'icona di stile. Le ali di gabbiano la rendono immortale.",
        descriptionEn: "An icon of style. The gullwing doors make it immortal.",
        price: 1800000,
        chartData: [{ year: '2019', value: 1.1 }, { year: '2023', value: 1.8 }]
    },
    {
        brand: "Lamborghini",
        model: "Countach",
        image: "https://images.unsplash.com/photo-1627453308736-234694488340?q=80&w=2670&auto=format&fit=crop",
        descriptionIt: "La vettura che ha definito il concetto di supercar.",
        descriptionEn: "The car that defined the supercar concept.",
        price: 850000,
        chartData: [{ year: '2019', value: 0.4 }, { year: '2023', value: 0.85 }]
    },
    {
        brand: "Bugatti",
        model: "Chiron",
        image: "https://images.unsplash.com/photo-1594956795861-f3b3b4f62131?q=80&w=2670&auto=format&fit=crop",
        descriptionIt: "1500 cavalli di pura potenza e lusso sfrenato.",
        descriptionEn: "1500 horsepower of pure power and unbridled luxury.",
        price: 3500000,
        chartData: [{ year: '2019', value: 2.8 }, { year: '2023', value: 3.5 }]
    },
    {
        brand: "Pagani",
        model: "Huayra Roadster",
        image: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?q=80&w=2670&auto=format&fit=crop",
        descriptionIt: "Arte in movimento. Fibra di carbonio e titanio scolpiti dal vento.",
        descriptionEn: "Art in motion. Carbon fiber and titanium sculpted by the wind.",
        price: 2800000,
        chartData: [{ year: '2019', value: 2.4 }, { year: '2023', value: 2.8 }]
    },
    {
        brand: "McLaren",
        model: "P1",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop",
        descriptionIt: "La prima hypercar ibrida inglese. Aerodinamica attiva e prestazioni F1.",
        descriptionEn: "The first British hybrid hypercar. Active aerodynamics and F1 performance.",
        price: 1900000,
        chartData: [{ year: '2019', value: 1.4 }, { year: '2023', value: 1.9 }]
    },
    {
        brand: "Porsche",
        model: "918 Spyder",
        image: "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2670&auto=format&fit=crop",
        descriptionIt: "L'equilibrio perfetto tra elettrico e termico. Un mostro da pista.",
        descriptionEn: "The perfect balance between electric and thermal. A track monster.",
        price: 1600000,
        chartData: [{ year: '2019', value: 1.1 }, { year: '2023', value: 1.6 }]
    },
    {
        brand: "Ferrari",
        model: "LaFerrari",
        image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2670&auto=format&fit=crop",
        descriptionIt: "La massima espressione del Cavallino Rampante. V12 Ibrido.",
        descriptionEn: "The ultimate expression of the Prancing Horse. V12 Hybrid.",
        price: 3800000,
        chartData: [{ year: '2019', value: 2.5 }, { year: '2023', value: 3.8 }]
    },
    {
        brand: "Koenigsegg",
        model: "Jesko",
        image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2667&auto=format&fit=crop",
        descriptionIt: "Il re della velocità svedese. Ingegneria oltre ogni limite.",
        descriptionEn: "The Swedish king of speed. Engineering beyond limits.",
        price: 3000000,
        chartData: [{ year: '2019', value: 2.8 }, { year: '2023', value: 3.0 }]
    },
    {
        brand: "Aston Martin",
        model: "Valkyrie",
        image: "https://images.unsplash.com/photo-1600712242805-5f786716d4ae?q=80&w=2665&auto=format&fit=crop",
        descriptionIt: "Un'auto di Formula 1 omologata per la strada. Design estremo.",
        descriptionEn: "A Formula 1 car approved for the road. Extreme design.",
        price: 3200000,
        chartData: [{ year: '2019', value: 3.0 }, { year: '2023', value: 3.2 }]
    },
    {
        brand: "Lamborghini",
        model: "Veneno",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop",
        descriptionIt: "Rarità assoluta. Design da caccia stealth e un V12 urlante.",
        descriptionEn: "Absolute rarity. Stealth fighter design and a screaming V12.",
        price: 4500000,
        chartData: [{ year: '2019', value: 4.0 }, { year: '2023', value: 8.0 }]
    },
    {
        brand: "Lexus",
        model: "LFA",
        image: "https://images.unsplash.com/photo-1605515298946-d063f204226a?q=80&w=2670&auto=format&fit=crop",
        descriptionIt: "Il suono più bello del mondo. Un V10 Yamaha che canta.",
        descriptionEn: "The most beautiful sound in the world. A singing Yamaha V10.",
        price: 900000,
        chartData: [{ year: '2019', value: 0.4 }, { year: '2023', value: 0.9 }]
    },
    {
        brand: "Ford",
        model: "GT",
        image: "https://images.unsplash.com/photo-1553440291-6c2cb5d56df6?q=80&w=2070&auto=format&fit=crop",
        descriptionIt: "Il ritorno della leggenda di Le Mans. Aerodinamica scavata.",
        descriptionEn: "The return of the Le Mans legend. Hollowed aerodynamics.",
        price: 1100000,
        chartData: [{ year: '2019', value: 0.5 }, { year: '2023', value: 1.1 }]
    },
    {
        brand: "Maserati",
        model: "MC12",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop",
        descriptionIt: "La sorella da gara della Enzo. Bianca, blu e vincente.",
        descriptionEn: "The racing sister of the Enzo. White, blue and victorious.",
        price: 3900000,
        chartData: [{ year: '2019', value: 2.0 }, { year: '2023', value: 4.0 }]
    },
    {
        brand: "Bugatti",
        model: "Veyron Super Sport",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop",
        descriptionIt: "L'auto che ha cambiato tutto. La prima a rompere i 400 km/h.",
        descriptionEn: "The car that changed everything. The first to break 400 km/h.",
        price: 2100000,
        chartData: [{ year: '2019', value: 1.5 }, { year: '2023', value: 2.1 }]
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
