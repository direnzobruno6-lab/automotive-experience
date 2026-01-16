export interface Car {
    brand: string;
    model: string;
    image: string;
    descriptionIt: string;
    descriptionEn: string;
    price: number;
    chartData: { year: string; value: number }[];
    imagePosition?: string;
    details: {
        exteriorIt: string;
        exteriorEn: string;
        interiorIt: string;
        interiorEn: string;
        engineIt: string;
        engineEn: string;
    };
}

export const CARS: Car[] = [
    {
        brand: "Ferrari",
        model: "F40",
        image: "/images/garage/f40.jpg",
        descriptionIt: "L'ultima opera voluta da Enzo Ferrari. Un capolavoro di ingegneria pura.",
        descriptionEn: "The last masterpiece commissioned by Enzo Ferrari. A masterpiece of pure engineering.",
        price: 3400000,
        chartData: [{ year: '2015', value: 1.2 }, { year: '2020', value: 1.8 }, { year: '2025', value: 3.4 }],
        details: {
            exteriorIt: "Carrozzeria in kevlar e fibra di carbonio, vernice Rosso Corsa, alettone posteriore iconico e feritoie trasparenti in Lexan per il motore.",
            exteriorEn: "Kevlar and carbon fiber bodywork, Rosso Corsa paint, iconic rear wing and transparent Lexan engine louvers.",
            interiorIt: "Spartano e racing: sedili a guscio rossi, niente maniglie (solo cavi), cruscotto rivestito in feltro antiriflesso.",
            interiorEn: "Spartan and racing: red bucket seats, no handles (cable pulls only), anti-glare felt dashboard.",
            engineIt: "V8 Biturbo da 2.9 litri, 478 CV. Un'erogazione brutale vecchia scuola.",
            engineEn: "2.9-liter Twin-Turbo V8, 478 hp. Brutal old-school power delivery."
        }
    },
    {
        brand: "Mercedes-Benz",
        model: "300 SL Gullwing",
        image: "/images/garage/300sl_authentic.jpg",
        descriptionIt: "Un'icona di stile. Le ali di gabbiano la rendono immortale.",
        descriptionEn: "An icon of style. The gullwing doors make it immortal.",
        price: 2100000,
        chartData: [{ year: '2015', value: 1.1 }, { year: '2020', value: 1.4 }, { year: '2025', value: 2.1 }],
        details: {
            exteriorIt: "Argento metallizzato, porte ad ali di gabbiano necessarie per il telaio tubolare alto, linee eleganti e senza tempo.",
            exteriorEn: "Silver metallic, gullwing doors necessitated by the high tubular chassis, elegant and timeless lines.",
            interiorIt: "Pelle rossa scozzese o beige, volante grande in avorio, strumentazione classica VDO.",
            interiorEn: "Red plaid or beige leather, large ivory steering wheel, classic VDO instrumentation.",
            engineIt: "6 cilindri in linea da 3.0 litri, iniezione diretta meccanica (prima al mondo).",
            engineEn: "3.0-liter inline-6, mechanical direct injection (world's first)."
        }
    },
    {
        brand: "Lamborghini",
        model: "Countach",
        image: "/images/garage/countach_authentic.jpg",
        descriptionIt: "La vettura che ha definito il concetto di supercar.",
        descriptionEn: "The car that defined the supercar concept.",
        price: 950000,
        chartData: [{ year: '2015', value: 0.35 }, { year: '2020', value: 0.5 }, { year: '2025', value: 0.95 }],
        details: {
            exteriorIt: "Design a cuneo di Marcello Gandini, porte a forbice, passaruota larghi e alettone opzionale iconico.",
            exteriorEn: "Wedge design by Marcello Gandini, scissor doors, wide wheel arches and iconic optional wing.",
            interiorIt: "Futuristico per l'epoca, tunnel centrale alto, sedili avvolgenti in pelle.",
            interiorEn: "Futuristic for the time, high center tunnel, bucket leather seats.",
            engineIt: "V12 aspirato longitudinale, il suono che urla fino a 8000 giri.",
            engineEn: "Longitudinal naturally aspirated V12, a sound that screams up to 8000 rpm."
        }
    },
    {
        brand: "Bugatti",
        model: "Chiron",
        image: "/images/garage/chiron_authentic.jpg",
        descriptionIt: "1500 cavalli di pura potenza e lusso sfrenato.",
        descriptionEn: "1500 horsepower of pure power and unbridled luxury.",
        price: 3800000,
        chartData: [{ year: '2018', value: 2.9 }, { year: '2021', value: 3.2 }, { year: '2025', value: 3.8 }],
        details: {
            exteriorIt: "Design a ferro di cavallo laterale (C-bar), verniciatura bicolore, aerodinamica attiva posteriore.",
            exteriorEn: "C-bar side design, two-tone paintwork, active rear aerodynamics.",
            interiorIt: "Opulenza minimalista: alluminio ricavato dal pieno, pelle pregiata, tachimetro analogico centrale.",
            interiorEn: "Minimalist opulence: billet aluminum, fine leather, central analog speedometer.",
            engineIt: "W16 Quad-Turbo da 8.0 litri. Una centrale nucleare portatile.",
            engineEn: "8.0-liter Quad-Turbo W16. A portable nuclear power plant."
        }
    },
    {
        brand: "Pagani",
        model: "Huayra Roadster",
        image: "/images/garage/huayra_authentic.jpg",
        descriptionIt: "Arte in movimento. Fibra di carbonio e titanio scolpiti dal vento.",
        descriptionEn: "Art in motion. Carbon fiber and titanium sculpted by the wind.",
        price: 3200000,
        chartData: [{ year: '2017', value: 2.4 }, { year: '2021', value: 2.7 }, { year: '2025', value: 3.2 }],
        details: {
            exteriorIt: "Carbo-titanio a vista, flap aerodinamici attivi anteriori e posteriori, specchietti scultorei.",
            exteriorEn: "Exposed Carbotanium, active front and rear aerodynamic flaps, sculptural mirrors.",
            interiorIt: "Barocco meccanico: levette in alluminio, pelle cucita a mano, meccanismi del cambio esposti.",
            interiorEn: "Mechanical baroque: aluminum toggles, hand-stitched leather, exposed gear linkage.",
            engineIt: "V12 Biturbo AMG costruito su misura, 764 CV.",
            engineEn: "Bespoke AMG Twin-Turbo V12, 764 hp."
        }
    },
    {
        brand: "McLaren",
        model: "P1",
        image: "/images/garage/p1_authentic.jpg",
        descriptionIt: "La prima hypercar ibrida inglese. Aerodinamica attiva e prestazioni F1.",
        descriptionEn: "The first British hybrid hypercar. Active aerodynamics and F1 performance.",
        price: 2200000,
        chartData: [{ year: '2015', value: 1.4 }, { year: '2020', value: 1.6 }, { year: '2025', value: 2.2 }],
        imagePosition: "50% 80%",
        details: {
            exteriorIt: "Disegnata dall'aria: forma a goccia, alettone posteriore massiccio estensibile, carrozzeria in carbonio.",
            exteriorEn: "Designed by air: teardrop shape, massive extendable rear wing, carbon body.",
            interiorIt: "Cockpit da caccia: parabrezza profondo, fibra di carbonio ovunque, posizione di guida perfetta.",
            interiorEn: "Fighter jet cockpit: deep windshield, carbon fiber everywhere, perfect driving position.",
            engineIt: "V8 Biturbo 3.8L + Motore Elettrico (IPAS). 916 CV combinati.",
            engineEn: "3.8L Twin-Turbo V8 + Electric Motor (IPAS). 916 hp combined."
        }
    },
    {
        brand: "Porsche",
        model: "918 Spyder",
        image: "/images/garage/918_authentic.jpg",
        descriptionIt: "L'equilibrio perfetto tra elettrico e termico. Un mostro da pista.",
        descriptionEn: "The perfect balance between electric and thermal. A track monster.",
        price: 1950000,
        chartData: [{ year: '2015', value: 1.1 }, { year: '2020', value: 1.3 }, { year: '2025', value: 1.95 }],
        details: {
            exteriorIt: "Scarichi alti ('Top Pipes'), silhouette bassa e larga, aerodinamica attiva Weissach.",
            exteriorEn: "Top Pipes exhaust, low and wide silhouette, active Weissach aerodynamics.",
            interiorIt: "Console centrale sospesa touch, sedili in carbonio, volante multifunzione ispirato al motorsport.",
            interiorEn: "Floating touch center console, carbon seats, motorsport-inspired multifunction wheel.",
            engineIt: "V8 aspirato 4.6L (derivato LMP2) + 2 motori elettrici.",
            engineEn: "4.6L naturally aspirated V8 (LMP2 derived) + 2 electric motors."
        }
    },
    {
        brand: "Ferrari",
        model: "LaFerrari",
        image: "/images/garage/laferrari_authentic.jpg",
        descriptionIt: "La massima espressione del Cavallino Rampante. V12 Ibrido.",
        descriptionEn: "The ultimate expression of the Prancing Horse. V12 Hybrid.",
        price: 4200000,
        chartData: [{ year: '2015', value: 2.5 }, { year: '2020', value: 3.1 }, { year: '2025', value: 4.2 }],
        imagePosition: "50% 80%",
        details: {
            exteriorIt: "Design estremo F1, specchietti lunghi, aerodinamica attiva integrata nel fondo piatto.",
            exteriorEn: "Extreme F1 design, long mirrors, active aerodynamics integrated into the flat floor.",
            interiorIt: "Volante quadrato con manettino, sedili fissi (si muovono i pedali), minimalismo racing.",
            interiorEn: "Square steering wheel with manettino, fixed seats (pedals move), racing minimalism.",
            engineIt: "V12 6.3L aspirato + HY-KERS. 963 CV e un sound epico.",
            engineEn: "6.3L naturally aspirated V12 + HY-KERS. 963 hp and epic sound."
        }
    },
    {
        brand: "Koenigsegg",
        model: "Jesko",
        image: "/images/garage/jesko_authentic.jpg",
        descriptionIt: "Il re della velocità svedese. Ingegneria oltre ogni limite.",
        descriptionEn: "The Swedish king of speed. Engineering beyond limits.",
        price: 4100000,
        chartData: [{ year: '2020', value: 3.0 }, { year: '2022', value: 3.4 }, { year: '2025', value: 4.1 }],
        details: {
            exteriorIt: "Alettone posteriore a boomerang enorme, splitter anteriore aggressivo, porte a elica.",
            exteriorEn: "Massive boomerang rear wing, aggressive front splitter, dihedral synchro-helix doors.",
            interiorIt: "G-Force meter nel cruscotto digitale SmartCluster che ruota con il volante.",
            interiorEn: "G-Force meter in the SmartCluster digital dash that rotates with the wheel.",
            engineIt: "V8 Biturbo 5.0L Flat-plane. 1600 CV a E85. Cambio LST a 9 marce.",
            engineEn: "5.0L Flat-plane Twin-Turbo V8. 1600 hp on E85. 9-speed LST gearbox."
        }
    },
    {
        brand: "Aston Martin",
        model: "Valkyrie",
        image: "/images/garage/valkyrie.jpg",
        descriptionIt: "Un'auto di Formula 1 omologata per la strada. Design estremo.",
        descriptionEn: "A Formula 1 car approved for the road. Extreme design.",
        price: 3500000,
        chartData: [{ year: '2021', value: 3.0 }, { year: '2023', value: 3.2 }, { year: '2025', value: 3.5 }],
        details: {
            exteriorIt: "Fondo piatto con tunnel Venturi enormi, cabina a goccia, niente paraurti tradizionale.",
            exteriorEn: "Flat floor with massive Venturi tunnels, teardrop cabin, no traditional bumpers.",
            interiorIt: "Posizione di guida 'piedi in alto' come in F1, schermi retrovisori, volante removibile.",
            interiorEn: "'Feet up' F1 driving position, rear-view screens, removable steering wheel.",
            engineIt: "V12 6.5L Cosworth aspirato. 11.100 giri/min. Il motore stradale definitivo.",
            engineEn: "6.5L naturally aspirated Cosworth V12. 11,100 rpm. The ultimate road engine."
        }
    },
    {
        brand: "Lamborghini",
        model: "Veneno",
        image: "/images/garage/veneno.jpg",
        descriptionIt: "Rarità assoluta. Design da caccia stealth e un V12 urlante.",
        descriptionEn: "Absolute rarity. Stealth fighter design and a screaming V12.",
        price: 9500000,
        chartData: [{ year: '2014', value: 4.0 }, { year: '2019', value: 6.5 }, { year: '2025', value: 9.5 }],
        details: {
            exteriorIt: "Pinna dorsale centrale, estetica da prototipo Le Mans, prese d'aria massicce.",
            exteriorEn: "Central dorsal fin, Le Mans prototype aesthetics, massive air intakes.",
            interiorIt: "Carbon Skin (tessuto in fibra di carbonio), sedili Forged Composite.",
            interiorEn: "Carbon Skin fabric, Forged Composite seats.",
            engineIt: "V12 6.5L aspirato potenziato a 750 CV.",
            engineEn: "6.5L naturally aspirated V12 tuned to 750 hp."
        }
    },
    {
        brand: "Lexus",
        model: "LFA",
        image: "/images/garage/lfa_authentic.jpg",
        descriptionIt: "Il suono più bello del mondo. Un V10 Yamaha che canta.",
        descriptionEn: "The most beautiful sound in the world. A singing Yamaha V10.",
        price: 1300000,
        chartData: [{ year: '2015', value: 0.38 }, { year: '2020', value: 0.7 }, { year: '2025', value: 1.3 }],
        details: {
            exteriorIt: "Telaio in CFRP (carbonio), prese d'aria posteriori integrate, alettone attivo.",
            exteriorEn: "CFRP (carbon) chassis, integrated rear intakes, active wing.",
            interiorIt: "Strumentazione digitale che sposta l'anello fisico, finiture in metallo e pelle superbe.",
            interiorEn: "Digital instrumentation with moving physical ring, superb metal and leather finishes.",
            engineIt: "V10 4.8L Yamaha. Sale di giri così veloce che serviva il contagiri digitale.",
            engineEn: "4.8L Yamaha V10. Revs so fast it needed a digital tachometer."
        }
    },
    {
        brand: "Ford",
        model: "GT",
        image: "/images/garage/fordgt_authentic.jpg",
        descriptionIt: "Il ritorno della leggenda di Le Mans. Aerodinamica scavata.",
        descriptionEn: "The return of the Le Mans legend. Hollowed aerodynamics.",
        price: 1400000,
        chartData: [{ year: '2017', value: 0.5 }, { year: '2021', value: 0.9 }, { year: '2025', value: 1.4 }],
        imagePosition: "50% 80%",
        details: {
            exteriorIt: "Canali aerodinamici 'Flying Buttress' che attraversano la carrozzeria posteriore.",
            exteriorEn: "'Flying Buttress' aero channels running through the rear bodywork.",
            interiorIt: "Volante rettangolare con controlli integrati, cruscotto digitale fisso.",
            interiorEn: "Rectangular steering wheel with integrated controls, fixed digital dashboard.",
            engineIt: "V6 EcoBoost 3.5L Biturbo. Compatto ma potente (647+ CV).",
            engineEn: "3.5L Twin-Turbo EcoBoost V6. Compact but powerful (647+ hp)."
        }
    },
    {
        brand: "Maserati",
        model: "MC12",
        image: "/images/garage/mc12_authentic.jpg",
        descriptionIt: "La sorella da gara della Enzo. Bianca, blu e vincente.",
        descriptionEn: "The racing sister of the Enzo. White, blue and victorious.",
        price: 5200000,
        chartData: [{ year: '2015', value: 1.8 }, { year: '2020', value: 3.5 }, { year: '2025', value: 5.2 }],
        imagePosition: "50% 80%",
        details: {
            exteriorIt: "Lunghissima (oltre 5m), livrea bianco-blu, tetto targa rimovibile.",
            exteriorEn: "Extremely long (over 5m), white-blue livery, removable targa roof.",
            interiorIt: "Orologio analogico Maserati ovale, pelle blu, molto spazio ma spartana.",
            interiorEn: "Oval Maserati analog clock, blue leather, spacious but spartan.",
            engineIt: "V12 6.0L di derivazione Ferrari Enzo. 630 CV.",
            engineEn: "6.0L V12 derived from Ferrari Enzo. 630 hp."
        }
    },
    {
        brand: "Bugatti",
        model: "Veyron Super Sport",
        image: "/images/garage/veyron_authentic.jpg",
        descriptionIt: "L'auto che ha cambiato tutto. La prima a rompere i 400 km/h.",
        descriptionEn: "The car that changed everything. The first to break 400 km/h.",
        price: 2500000,
        chartData: [{ year: '2015', value: 1.5 }, { year: '2020', value: 1.9 }, { year: '2025', value: 2.5 }],
        details: {
            exteriorIt: "Forma a uovo levigato, prese d'aria NACA sul tetto, colorazione World Record (nero/arancio).",
            exteriorEn: "Smoothed egg shape, roof NACA ducts, World Record livery (black/orange).",
            interiorIt: "Alluminio tornito, pelle di altissima qualità, comfort da GT a 400 km/h.",
            interiorEn: "Turned aluminum, highest quality leather, GT comfort at 400 km/h.",
            engineIt: "W16 Quad-Turbo da 1200 CV. La regina della velocità.",
            engineEn: "1200 hp Quad-Turbo W16. The queen of speed."
        }
    }
];
