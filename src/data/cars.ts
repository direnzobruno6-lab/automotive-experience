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

interface CarConfig {
    brand: string;
    model: string;
    image: string;
    descriptionIt: string;
    descriptionEn: string;
    basePrice: number; // Price in baseYear
    baseYear: number;
    growthRate: number; // e.g. 0.15 for 15% annual growth
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

const CAR_CONFIGS: CarConfig[] = [
    {
        brand: "Ferrari",
        model: "F40",
        image: "/images/garage/f40.jpg",
        descriptionIt: "L'ultima opera voluta dal Drake, un tributo brutale alla velocità senza compromessi. Nata per celebrare i 40 anni del marchio, la F40 è pura emozione meccanica: niente aiuti elettronici, solo un V8 biturbo che urla dietro la schiena e un telaio che trasmette ogni vibrazione.",
        descriptionEn: "The Drake's final commission, a brutal tribute to uncompromising speed. Born to celebrate the brand's 40th anniversary, the F40 is pure mechanical emotion: no electronic aids, just a twin-turbo V8 screaming behind your back and a chassis that transmits every vibration.",
        basePrice: 1200000,
        baseYear: 2015,
        growthRate: 0.12, // High growth
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
        descriptionIt: "Un'icona di stile che trascende il tempo, famosa per le sue portiere 'Gullwing' nate da una necessità tecnica. Più che un'auto, è un pezzo di storia dell'arte che ha definito il concetto di supercar negli anni '50, unendo lusso e prestazioni da gara.",
        descriptionEn: "A style icon that transcends time, famous for its 'Gullwing' doors born of technical necessity. More than a car, it is a piece of art history that defined the supercar concept in the 50s, blending luxury with racing performance.",
        basePrice: 1100000,
        baseYear: 2015,
        growthRate: 0.08,
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
        descriptionIt: "La vettura che ha scioccato il mondo e definito l'estetica delle supercar moderne. Con le sue linee a cuneo aggressive e le portiere a forbice, la Countach non è solo un mezzo di trasporto, ma una dichiarazione di pura audacia e ribellione su ruote.",
        descriptionEn: "The car that shocked the world and defined modern supercar aesthetics. With its aggressive wedge lines and scissor doors, the Countach is not just a mode of transport, but a statement of pure boldness and rebellion on wheels.",
        basePrice: 350000,
        baseYear: 2015,
        growthRate: 0.11,
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
        descriptionIt: "Il vertice dell'ingegneria automobilistica di lusso, dove 1500 cavalli incontrano l'opulenza assoluta. La Chiron non è solo veloce, è una forza della natura domata, capace di attraversare continenti a velocità aeronautiche nel più totale comfort.",
        descriptionEn: "The pinnacle of luxury automotive engineering, where 1500 horsepower meets absolute opulence. The Chiron is not just fast, it is a tamed force of nature, capable of crossing continents at aeronautical speeds in total comfort.",
        basePrice: 2400000,
        baseYear: 2016, // Launched later
        growthRate: 0.06,
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
        descriptionIt: "Un'opera d'arte in movimento scolpita dal vento e ispirata al Rinascimento. Ogni dettaglio, dal titanio intrecciato al carbonio alle viti marchiate, è un omaggio all'artigianato italiano, fondendo scienza e arte in una sinfonia meccanica.",
        descriptionEn: "A moving work of art sculpted by the wind and inspired by the Renaissance. Every detail, from woven titanium to carbon to branded screws, is a tribute to Italian craftsmanship, merging science and art into a mechanical symphony.",
        basePrice: 2400000,
        baseYear: 2017,
        growthRate: 0.05,
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
        descriptionIt: "La progenitrice delle hypercar ibride, progettata con un unico obiettivo: essere la migliore auto da pilota su strada e pista. L'aerodinamica attiva e il sistema IPAS derivato dalla Formula 1 la rendono un'arma di precisione chirurgica.",
        descriptionEn: "The progenitor of hybrid hypercars, designed with a single goal: to be the best driver's car on road and track. Active aerodynamics and the Formula 1-derived IPAS system make it a surgical precision weapon.",
        basePrice: 1400000,
        baseYear: 2015,
        growthRate: 0.06,
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
        descriptionIt: "L'equilibrio perfetto tra passato e futuro: un V8 aspirato da corsa accoppiato a motori elettrici all'avanguardia. La 918 Spyder ha dimostrato che l'ibrido può emozionare, offrendo prestazioni mostruose con un'efficienza sorprendente.",
        descriptionEn: "The perfect balance between past and future: a naturally aspirated racing V8 coupled with cutting-edge electric motors. The 918 Spyder proved that hybrids can thrill, offering monstrous performance with surprising efficiency.",
        basePrice: 1100000,
        baseYear: 2015,
        growthRate: 0.08,
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
        descriptionIt: "Il nome dice tutto: è 'La' Ferrari. La massima espressione tecnologica di Maranello, che unisce un V12 urlante al sistema HY-KERS. Non è solo veloce, è un'estensione del sistema nervoso del pilota, reattiva come un'auto da F1.",
        descriptionEn: "The name says it all: it is 'The' Ferrari. Maranello's ultimate technological expression, combining a screaming V12 with the HY-KERS system. It's not just fast, it's an extension of the driver's nervous system, responsive like an F1 car.",
        basePrice: 2500000,
        baseYear: 2015,
        growthRate: 0.07,
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
        descriptionIt: "Un tributo alla velocità assoluta, progettato per infrangere ogni record. La Jesko è ingegneria svedese portata all'estremo, con soluzioni tecniche rivoluzionarie come il cambio LST che cambia marcia alla velocità della luce.",
        descriptionEn: "A tribute to absolute speed, designed to shatter every record. The Jesko is Swedish engineering taken to the extreme, with revolutionary technical solutions like the LST gearbox that shifts gears at the speed of light.",
        basePrice: 3000000,
        baseYear: 2020,
        growthRate: 0.07,
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
        descriptionIt: "Nessun compromesso. La Valkyrie è letteralmente un'auto di Formula 1 con la targa. Progettata dal genio Adrian Newey, genera un carico aerodinamico così elevato da poter teoricamente guidare a testa in giù in un tunnel.",
        descriptionEn: "No compromises. The Valkyrie is literally a Formula 1 car with a license plate. Designed by genius Adrian Newey, it generates such high downforce that it could theoretically drive upside down in a tunnel.",
        basePrice: 3000000,
        baseYear: 2021,
        growthRate: 0.04,
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
        descriptionIt: "Un prototipo da corsa omologato per la strada, prodotto in pochissimi esemplari. La Veneno è l'incarnazione del DNA Lamborghini: esagerata, rumorosa e visivamente scioccante, sembra un caccia stealth atterrato per errore in autostrada.",
        descriptionEn: "A racing prototype approved for the road, produced in very few units. The Veneno is the embodiment of Lamborghini DNA: exaggerated, loud, and visually shocking, looking like a stealth fighter landed by mistake on the highway.",
        basePrice: 4000000,
        baseYear: 2014,
        growthRate: 0.11, // Massive growth
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
        descriptionIt: "La ricerca della perfezione giapponese. La LFA è celebra per il suo motore V10, sviluppato con Yamaha per suonare come una F1 degli anni 2000. Un capolavoro incompreso alla nascita, ora venerato come una delle migliori auto mai costruite.",
        descriptionEn: "The Japanese pursuit of perfection. The LFA is celebrated for its V10 engine, developed with Yamaha to sound like a 2000s F1 car. A masterpiece misunderstood at birth, now revered as one of the best cars ever built.",
        basePrice: 380000,
        baseYear: 2015,
        growthRate: 0.15, // Cult status explosion
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
        descriptionIt: "Una moderna interpretazione della leggenda che vinse a Le Mans. La nuova Ford GT è un'auto da corsa adattata alla strada, con un'aerodinamica radicale e una carrozzeria a goccia che lascia a bocca aperta per la sua audacia.",
        descriptionEn: "A modern interpretation of the legend that won at Le Mans. The new Ford GT is a race car adapted for the road, with radical aerodynamics and a teardrop body that leaves you speechless with its boldness.",
        basePrice: 500000,
        baseYear: 2017,
        growthRate: 0.12,
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
        descriptionIt: "La gemella diversa della Ferrari Enzo, nata per dominare le competizioni GT. Più lunga, più larga e con un tetto rimovibile, la MC12 è una rarità assoluta che ha riportato il Tridente sul gradino più alto del podio mondiale.",
        descriptionEn: "The Ferrari Enzo's twisted twin, born to dominate GT racing. Longer, wider, and featuring a removable roof, the MC12 is an absolute rarity that brought the Trident back to the top of the world podium.",
        basePrice: 1800000,
        baseYear: 2015,
        growthRate: 0.13,
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
        descriptionIt: "L'auto che ha riscritto le regole della fisica. Quando la Veyron SS ha infranto il muro dei 431 km/h, ha dimostrato che non esistono limiti all'ingegneria umana. È il Concorde della strada: potenza infinita in un abito elegante.",
        descriptionEn: "The car that rewrote the laws of physics. When the Veyron SS broke the 431 km/h barrier, it proved there are no limits to human engineering. It is the Concorde of the road: infinite power in an elegant suit.",
        basePrice: 1500000,
        baseYear: 2015,
        growthRate: 0.05,
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

function calculateCurrentValue(basePrice: number, growthRate: number, yearsPassed: number): number {
    // Compound interest formula: P = P0 * (1 + r)^t
    return Math.floor(basePrice * Math.pow(1 + growthRate, yearsPassed));
}

function generateDynamicData(): Car[] {
    const currentYear = new Date().getFullYear();

    return CAR_CONFIGS.map(config => {
        // Generate chart data up to next year or current year + 1 to show forecast
        const chartData = [];
        const startChartYear = config.baseYear;
        const endChartYear = currentYear;

        // Generate points every ~2-3 years to keep chart clean, but ensure current year is included
        for (let y = startChartYear; y <= endChartYear; y++) {
            // Simple "noisy" growth to make it look realistic (not a perfect curve)
            // We use sin() based on year char code to be deterministic but readable
            const noise = (Math.sin(y * 99) * 0.05); // +/- 5% variance
            const yearsPassed = y - config.baseYear;
            const rawValue = calculateCurrentValue(config.basePrice, config.growthRate + (noise * 0.2), yearsPassed);

            // Push specific years or just start, mid, end
            if (y === startChartYear || y === endChartYear || (y - startChartYear) % 4 === 0) {
                chartData.push({
                    year: y.toString(),
                    value: parseFloat((rawValue / 1000000).toFixed(2)) // Convert to Millions with 1 decimal
                });
            }
        }

        // Ensure the last point is exactly current year price
        const currentPrice = calculateCurrentValue(config.basePrice, config.growthRate, currentYear - config.baseYear);

        // Update last chart point to match exactly
        if (chartData.length > 0) {
            chartData[chartData.length - 1] = {
                year: currentYear.toString(),
                value: parseFloat((currentPrice / 1000000).toFixed(2))
            };
        }

        return {
            brand: config.brand,
            model: config.model,
            image: config.image,
            descriptionIt: config.descriptionIt,
            descriptionEn: config.descriptionEn,
            price: currentPrice,
            chartData: chartData,
            imagePosition: config.imagePosition,
            details: config.details
        };
    });
}

// Export the dynamically generated array
export const CARS: Car[] = generateDynamicData();
