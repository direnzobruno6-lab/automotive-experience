export interface Car {
    brand: string;
    model: string;
    image: string;
    descriptionIt: string; // Short for card
    descriptionEn: string; // Short for card
    extendedDescriptionIt: string; // Long for modal
    extendedDescriptionEn: string; // Long for modal
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
    extendedDescriptionIt: string;
    extendedDescriptionEn: string;
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
        descriptionIt: "L'ultima opera voluta da Enzo Ferrari. Un capolavoro di ingegneria pura.",
        descriptionEn: "The last masterpiece commissioned by Enzo Ferrari. A masterpiece of pure engineering.",
        extendedDescriptionIt: "L'ultima opera voluta dal Drake, un tributo brutale alla velocità senza compromessi. Nata per celebrare i 40 anni del marchio, la F40 è pura emozione meccanica: niente aiuti elettronici, solo un V8 biturbo che urla dietro la schiena e un telaio che trasmette ogni vibrazione.",
        extendedDescriptionEn: "The Drake's final commission, a brutal tribute to uncompromising speed. Born to celebrate the brand's 40th anniversary, the F40 is pure mechanical emotion: no electronic aids, just a twin-turbo V8 screaming behind your back and a chassis that transmits every vibration.",
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
        descriptionIt: "Un'icona di stile. Le ali di gabbiano la rendono immortale.",
        descriptionEn: "An icon of style. The gullwing doors make it immortal.",
        extendedDescriptionIt: "Un'icona di stile che trascende il tempo, famosa per le sue portiere 'Gullwing' nate da una necessità tecnica. Più che un'auto, è un pezzo di storia dell'arte che ha definito il concetto di supercar negli anni '50, unendo lusso e prestazioni da gara.",
        extendedDescriptionEn: "A style icon that transcends time, famous for its 'Gullwing' doors born of technical necessity. More than a car, it is a piece of art history that defined the supercar concept in the 50s, blending luxury with racing performance.",
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
        descriptionIt: "La vettura che ha definito il concetto di supercar.",
        descriptionEn: "The car that defined the supercar concept.",
        extendedDescriptionIt: "La vettura che ha scioccato il mondo e definito l'estetica delle supercar moderne. Con le sue linee a cuneo aggressive e le portiere a forbice, la Countach non è solo un mezzo di trasporto, ma una dichiarazione di pura audacia e ribellione su ruote.",
        extendedDescriptionEn: "The car that shocked the world and defined modern supercar aesthetics. With its aggressive wedge lines and scissor doors, the Countach is not just a mode of transport, but a statement of pure boldness and rebellion on wheels.",
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
        descriptionIt: "1500 cavalli di pura potenza e lusso sfrenato.",
        descriptionEn: "1500 horsepower of pure power and unbridled luxury.",
        extendedDescriptionIt: "Il vertice dell'ingegneria automobilistica di lusso, dove 1500 cavalli incontrano l'opulenza assoluta. La Chiron non è solo veloce, è una forza della natura domata, capace di attraversare continenti a velocità aeronautiche nel più totale comfort.",
        extendedDescriptionEn: "The pinnacle of luxury automotive engineering, where 1500 horsepower meets absolute opulence. The Chiron is not just fast, it is a tamed force of nature, capable of crossing continents at aeronautical speeds in total comfort.",
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
        descriptionIt: "Arte in movimento. Fibra di carbonio e titanio scolpiti dal vento.",
        descriptionEn: "Art in motion. Carbon fiber and titanium sculpted by the wind.",
        extendedDescriptionIt: "Un'opera d'arte in movimento scolpita dal vento e ispirata al Rinascimento. Ogni dettaglio, dal titanio intrecciato al carbonio alle viti marchiate, è un omaggio all'artigianato italiano, fondendo scienza e arte in una sinfonia meccanica.",
        extendedDescriptionEn: "A moving work of art sculpted by the wind and inspired by the Renaissance. Every detail, from woven titanium to carbon to branded screws, is a tribute to Italian craftsmanship, merging science and art into a mechanical symphony.",
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
        descriptionIt: "La prima hypercar ibrida inglese. Aerodinamica attiva e prestazioni F1.",
        descriptionEn: "The first British hybrid hypercar. Active aerodynamics and F1 performance.",
        extendedDescriptionIt: "La progenitrice delle hypercar ibride, progettata con un unico obiettivo: essere la migliore auto da pilota su strada e pista. L'aerodinamica attiva e il sistema IPAS derivato dalla Formula 1 la rendono un'arma di precisione chirurgica.",
        extendedDescriptionEn: "The progenitor of hybrid hypercars, designed with a single goal: to be the best driver's car on road and track. Active aerodynamics and the Formula 1-derived IPAS system make it a surgical precision weapon.",
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
        descriptionIt: "L'equilibrio perfetto tra elettrico e termico. Un mostro da pista.",
        descriptionEn: "The perfect balance between electric and thermal. A track monster.",
        extendedDescriptionIt: "L'equilibrio perfetto tra passato e futuro: un V8 aspirato da corsa accoppiato a motori elettrici all'avanguardia. La 918 Spyder ha dimostrato che l'ibrido può emozionare, offrendo prestazioni mostruose con un'efficienza sorprendente.",
        extendedDescriptionEn: "The perfect balance between past and future: a naturally aspirated racing V8 coupled with cutting-edge electric motors. The 918 Spyder proved that hybrids can thrill, offering monstrous performance with surprising efficiency.",
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
        descriptionIt: "La massima espressione del Cavallino Rampante. V12 Ibrido.",
        descriptionEn: "The ultimate expression of the Prancing Horse. V12 Hybrid.",
        extendedDescriptionIt: "Il nome dice tutto: è 'La' Ferrari. La massima espressione tecnologica di Maranello, che unisce un V12 urlante al sistema HY-KERS. Non è solo veloce, è un'estensione del sistema nervoso del pilota, reattiva come un'auto da F1.",
        extendedDescriptionEn: "The name says it all: it is 'The' Ferrari. Maranello's ultimate technological expression, combining a screaming V12 with the HY-KERS system. It's not just fast, it's an extension of the driver's nervous system, responsive like an F1 car.",
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
        descriptionIt: "Il re della velocità svedese. Ingegneria oltre ogni limite.",
        descriptionEn: "The Swedish king of speed. Engineering beyond limits.",
        extendedDescriptionIt: "Un tributo alla velocità assoluta, progettato per infrangere ogni record. La Jesko è ingegneria svedese portata all'estremo, con soluzioni tecniche rivoluzionarie come il cambio LST che cambia marcia alla velocità della luce.",
        extendedDescriptionEn: "A tribute to absolute speed, designed to shatter every record. The Jesko is Swedish engineering taken to the extreme, with revolutionary technical solutions like the LST gearbox that shifts gears at the speed of light.",
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
        descriptionIt: "Un'auto di Formula 1 omologata per la strada. Design estremo.",
        descriptionEn: "A Formula 1 car approved for the road. Extreme design.",
        extendedDescriptionIt: "Nessun compromesso. La Valkyrie è letteralmente un'auto di Formula 1 con la targa. Progettata dal genio Adrian Newey, genera un carico aerodinamico così elevato da poter teoricamente guidare a testa in giù in un tunnel.",
        extendedDescriptionEn: "No compromises. The Valkyrie is literally a Formula 1 car with a license plate. Designed by genius Adrian Newey, it generates such high downforce that it could theoretically drive upside down in a tunnel.",
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
        descriptionIt: "Rarità assoluta. Design da caccia stealth e un V12 urlante.",
        descriptionEn: "Absolute rarity. Stealth fighter design and a screaming V12.",
        extendedDescriptionIt: "Un prototipo da corsa omologato per la strada, prodotto in pochissimi esemplari. La Veneno è l'incarnazione del DNA Lamborghini: esagerata, rumorosa e visivamente scioccante, sembra un caccia stealth atterrato per errore in autostrada.",
        extendedDescriptionEn: "A racing prototype approved for the road, produced in very few units. The Veneno is the embodiment of Lamborghini DNA: exaggerated, loud, and visually shocking, looking like a stealth fighter landed by mistake on the highway.",
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
        descriptionIt: "Il suono più bello del mondo. Un V10 Yamaha che canta.",
        descriptionEn: "The most beautiful sound in the world. A singing Yamaha V10.",
        extendedDescriptionIt: "La ricerca della perfezione giapponese. La LFA è celebra per il suo motore V10, sviluppato con Yamaha per suonare come una F1 degli anni 2000. Un capolavoro incompreso alla nascita, ora venerato come una delle migliori auto mai costruite.",
        extendedDescriptionEn: "The Japanese pursuit of perfection. The LFA is celebrated for its V10 engine, developed with Yamaha to sound like a 2000s F1 car. A masterpiece misunderstood at birth, now revered as one of the best cars ever built.",
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
        descriptionIt: "Il ritorno della leggenda di Le Mans. Aerodinamica scavata.",
        descriptionEn: "The return of the Le Mans legend. Hollowed aerodynamics.",
        extendedDescriptionIt: "Una moderna interpretazione della leggenda che vinse a Le Mans. La nuova Ford GT è un'auto da corsa adattata alla strada, con un'aerodinamica radicale e una carrozzeria a goccia che lascia a bocca aperta per la sua audacia.",
        extendedDescriptionEn: "A modern interpretation of the legend that won at Le Mans. The new Ford GT is a race car adapted for the road, with radical aerodynamics and a teardrop body that leaves you speechless with its boldness.",
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
        descriptionIt: "La sorella da gara della Enzo. Bianca, blu e vincente.",
        descriptionEn: "The racing sister of the Enzo. White, blue and victorious.",
        extendedDescriptionIt: "La gemella diversa della Ferrari Enzo, nata per dominare le competizioni GT. Più lunga, più larga e con un tetto rimovibile, la MC12 è una rarità assoluta che ha riportato il Tridente sul gradino più alto del podio mondiale.",
        extendedDescriptionEn: "The Ferrari Enzo's twisted twin, born to dominate GT racing. Longer, wider, and featuring a removable roof, the MC12 is an absolute rarity that brought the Trident back to the top of the world podium.",
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
        descriptionIt: "L'auto che ha cambiato tutto. La prima a rompere i 400 km/h.",
        descriptionEn: "The car that changed everything. The first to break 400 km/h.",
        extendedDescriptionIt: "L'auto che ha riscritto le regole della fisica. Quando la Veyron SS ha infranto il muro dei 431 km/h, ha dimostrato che non esistono limiti all'ingegneria umana. È il Concorde della strada: potenza infinita in un abito elegante.",
        extendedDescriptionEn: "The car that rewrote the laws of physics. When the Veyron SS broke the 431 km/h barrier, it proved there are no limits to human engineering. It is the Concorde of the road: infinite power in an elegant suit.",
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
    },
    {
        brand: "McLaren",
        model: "F1",
        image: "/images/garage/mclarenf1_authentic.jpg",
        descriptionIt: "L'auto stradale più veloce del 20° secolo. Posto centrale, motore BMW V12.",
        descriptionEn: "The fastest road car of the 20th century. Central seat, BMW V12 engine.",
        extendedDescriptionIt: "Il capolavoro di Gordon Murray. Senza compromessi, senza aiuti, solo tu e la macchina. Tre posti, con il pilota al centro per la massima visibilità e controllo. Il vano motore è rivestito in oro zecchino per dissipare il calore del V12 BMW.",
        extendedDescriptionEn: "Gordon Murray's masterpiece. No compromises, no aids, just you and the machine. Three seats, with the driver in the center for maximum visibility and control. The engine bay is lined with pure gold to dissipate heat from the BMW V12.",
        basePrice: 10000000,
        baseYear: 2015,
        growthRate: 0.12,
        details: {
            exteriorIt: "Monoscocca in carbonio, porte a farfalla, aerodinamica fan-assist.",
            exteriorEn: "Carbon fiber monocoque, butterfly doors, active fan-assisted aerodynamics.",
            interiorIt: "Posizione di guida centrale, materiali leggeri, audio Kenwood su misura.",
            interiorEn: "Central driving position, lightweight materials, bespoke Kenwood audio.",
            engineIt: "BMW S70/2 V12 6.1L. 627 CV aspirato. Oro nel vano motore.",
            engineEn: "BMW S70/2 V12 6.1L. 627 hp naturally aspirated. Gold interaction."
        }
    },
    {
        brand: "Ferrari",
        model: "Enzo",
        image: "/images/garage/enzo_authentic.jpg",
        descriptionIt: "La F1 stradale dedicata al fondatore. V12, naso ispirato alla F1.",
        descriptionEn: "The road-going F1 dedicated to the founder. V12, F1-inspired nose.",
        extendedDescriptionIt: "Erede della F40 e F50, dedicata al fondatore. Un design controverso ma funzionale, dominato dall'aerodinamica. Il V12 da 660 cv è un gioiello di reattività, e il cambio F1 ha introdotto cambiate fulminee su strada.",
        extendedDescriptionEn: "Heir to the F40 and F50, dedicated to the founder. A controversial but functional design, dominated by aerodynamics. The 660 hp V12 is a jewel of responsiveness, and the F1 gearbox introduced lightning-fast shifts to the road.",
        basePrice: 2000000,
        baseYear: 2015,
        growthRate: 0.09,
        imagePosition: "50% 75%",
        details: {
            exteriorIt: "Naso spigoloso stile F1, porte a farfalla, alettone attivo.",
            exteriorEn: "Angular F1-style nose, butterfly doors, active rear wing.",
            interiorIt: "Vasca in carbonio a vista, volante multifunzione, cruscotto digitale.",
            interiorEn: "Exposed carbon tub, multifunction steering wheel, digital dashboard.",
            engineIt: "V12 6.0L Tipo F140 B. 660 CV. 8200 giri/min.",
            engineEn: "V12 6.0L Tipo F140 B. 660 hp. 8200 rpm redline."
        }
    },
    {
        brand: "Porsche",
        model: "Carrera GT",
        image: "/images/garage/carreragt_authentic.jpg",
        descriptionIt: "L'ultimo vero analogico. V10 urlante, cambio manuale.",
        descriptionEn: "The last true analog. Screaming V10, manual gearbox.",
        extendedDescriptionIt: "Nata da un progetto Le Mans cancellato, è diventata una leggenda stradale. Motore V10 aspirato con un suono inconfondibile, cambio manuale con pomello in legno di balsa (come la 917) e una guida che non perdona errori.",
        extendedDescriptionEn: "Born from a cancelled Le Mans project, it became a road legend. Naturally aspirated V10 with an unmistakable sound, manual gearbox with balsa wood knob (like the 917) and handling that forgives no errors.",
        basePrice: 700000,
        baseYear: 2015,
        growthRate: 0.10,
        details: {
            exteriorIt: "Cofano motore in rete, alettone retrattile, tetto rimovibile.",
            exteriorEn: "Mesh engine cover, retractable wing, removable roof.",
            interiorIt: "Console centrale rialzata, pomello cambio in faggio, sedili a guscio.",
            interiorEn: "Elevated center console, beechwood gear knob, bucket seats.",
            engineIt: "5.7L V10 aspirato. 612 CV. Il suono degli angeli.",
            engineEn: "5.7L naturally aspirated V10. 612 hp. The sound of angels."
        }
    },
    {
        brand: "Pagani",
        model: "Zonda Cinque",
        image: "/images/garage/zonda_authentic.jpg",
        descriptionIt: "Cinque esemplari al mondo. Carbon-titànio, arte e violenza.",
        descriptionEn: "Five units in the world. Carbo-titanium, art and violence.",
        extendedDescriptionIt: "La Zonda definitiva per la strada. Solo cinque coupé e cinque roadster. Ha introdotto il carbo-titànio e la presa d'aria sul tetto. È l'apice della filosofia Zonda: un'auto che è più simile a un aereo da caccia barocco.",
        extendedDescriptionEn: "The ultimate road-going Zonda. Only five coupes and five roadsters. Introduced carbo-titanium and the roof scoop. It is the pinnacle of the Zonda philosophy: a car that is more like a baroque fighter jet.",
        basePrice: 3000000,
        baseYear: 2015,
        growthRate: 0.08,
        details: {
            exteriorIt: "Presa d'aria sul tetto, diffusore massiccio, livrea tricolore.",
            exteriorEn: "Roof scoop, massive diffuser, tricolore livery.",
            interiorIt: "Misto pelle/alcantara, levette aereonautiche, meccanica a vista.",
            interiorEn: "Leather/alcantara mix, toggles, exposed mechanicals.",
            engineIt: "AMG V12 7.3L. 678 CV. Scarico in Inconel.",
            engineEn: "AMG V12 7.3L. 678 hp. Inconel exhaust."
        }
    },
    {
        brand: "Lamborghini",
        model: "Miura P400 SV",
        image: "/images/garage/miura_authentic.jpg",
        descriptionIt: "La prima supercar della storia. Il design più bello di sempre.",
        descriptionEn: "The first supercar in history. The most beautiful design ever.",
        extendedDescriptionIt: "Dove tutto è iniziato. Gandini ha disegnato una sagoma che ha definito l'auto sportiva a motore centrale. La versione SV (Spinto Veloce) è la più matura e potente, correggendo i difetti di gioventù e allargando i passaruota.",
        extendedDescriptionEn: "Where it all began. Gandini designed a silhouette that defined the mid-engined sports car. The SV (Spinto Veloce) version is the most mature and powerful, correcting youth defects and widening the wheel arches.",
        basePrice: 1800000,
        baseYear: 2015,
        growthRate: 0.06,
        details: {
            exteriorIt: "Ciglia sui fari (tipiche Miura), cofani a conchiglia, profilo basso.",
            exteriorEn: "Headlight eyelashes (symbolic), clamshell hoods, low profile.",
            interiorIt: "Cruscotto a doppio pod, cambio a griglia, caos ergonomico italiano.",
            interiorEn: "Twin-pod dash, gated shifter, classic Italian ergonomic chaos.",
            engineIt: "V12 3.9L trasversale. 385 CV.",
            engineEn: "3.9L transverse V12. 385 hp."
        }
    },
    {
        brand: "Bugatti",
        model: "EB110 SS",
        image: "/images/garage/eb110_authentic.jpg",
        descriptionIt: "Il sogno italiano di Bugatti. 4 turbo, 4 ruote motrici.",
        descriptionEn: "Bugatti's Italian dream. 4 turbos, 4 wheel drive.",
        extendedDescriptionIt: "L'anello mancante tra le Bugatti classiche e l'era VW. Costruita a Campogalliano, con un telaio in carbonio (prima di serie) e un motore V12 piccolo ma sovralimentato da 4 turbine. La SS è la versione alleggerita e potenziata.",
        extendedDescriptionEn: "The missing link between classic Bugattis and the VW era. Built in Campogalliano, with a carbon chassis (first production) and a small V12 engine supercharged by 4 turbines. The SS is the lightened and boosted version.",
        basePrice: 800000,
        baseYear: 2015,
        growthRate: 0.14,
        details: {
            exteriorIt: "Alettone fisso, prese d'aria 'grattugia', porte a forbice.",
            exteriorEn: "Fixed wing, 'cheese grater' cooling vents, scissor doors.",
            interiorIt: "Pelle Poltrona Frau, radica, visibilità da jet.",
            interiorEn: "Poltrona Frau leather, wood trim, fighter jet visibility.",
            engineIt: "3.5L V12 Quad-Turbo. 612 CV. 5 valvole per cilindro.",
            engineEn: "3.5L V12 Quad-Turbo. 612 hp. 5 valves per cylinder."
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
            extendedDescriptionIt: config.extendedDescriptionIt,
            extendedDescriptionEn: config.extendedDescriptionEn,
            price: currentPrice,
            chartData: chartData,
            imagePosition: config.imagePosition,
            details: config.details
        };
    });
}

// Export the dynamically generated array
export const CARS: Car[] = generateDynamicData();
