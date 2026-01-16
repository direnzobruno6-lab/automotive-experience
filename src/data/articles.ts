export interface Article {
    id: string;
    titleIt: string;
    titleEn: string;
    subtitleIt: string;
    subtitleEn: string;
    contentIt: string; // Markdown or HTML string
    contentEn: string;
    image: string;
    date: string;
    category: "Opinion" | "History" | "Tech";
    author: string;
    quotes: {
        textIt: string;
        textEn: string;
        author: string;
        color: string; // tailwind color name e.g. "red", "blue"
    }[];
}

export const ARTICLES: Article[] = [
    {
        id: "death-of-ice",
        titleIt: "Il Canto del Cigno del Motore a Scoppio",
        titleEn: "The Swan Song of the Internal Combustion Engine",
        subtitleIt: "Mentre il mondo si muove verso il silenzio elettrico, celebriamo l'orchestra meccanica che stiamo per perdere.",
        subtitleEn: "As the world moves towards electric silence, we celebrate the mechanical orchestra we are about to lose.",
        category: "Opinion",
        date: "2024-05-12",
        author: "Automotive X",
        image: "/images/garage/f40.jpg",
        quotes: [
            {
                textIt: "La velocità non ha mai ucciso nessuno. È fermarsi all'improvviso che ti frega.",
                textEn: "Speed has never killed anyone. Suddenly becoming stationary, that's what gets you.",
                author: "Jeremy Clarkson",
                color: "red"
            },
            {
                textIt: "Non guidi una macchina sportiva per andare al lavoro. La guidi per sentire qualcosa.",
                textEn: "You don't drive a sports car to get to work. You drive it to feel something.",
                author: "Richard Hammond",
                color: "blue"
            }
        ],
        contentIt: `
            <p class="mb-6"><span class="text-4xl float-left mr-2 font-heading font-black text-accent leading-none">C</span>'è un momento preciso, poco prima del limitatore, dove un motore non sta semplicemente girando. Sta urlando. È una vibrazione che parte dal telaio, risale lungo la colonna vertebrale e ti dice che sei vivo. Questo è ciò che l'elettrico, nella sua perfetta efficienza, non potrà mai replicare.</p>
            
            <h3 class="text-2xl font-bold mb-4 mt-8">L'Anima della Macchina</h3>
            <p class="mb-6">Il motore a combustione interna (ICE) è imperfetto. Spreca calore, fa rumore, vibra. Ma sono proprio queste imperfezioni a renderlo umano. Un V12 Ferrari non è un propulsore; uno strumento musicale accordato a Maranello. Il respiro irregolare di un V8 americano al minimo è un battito cardiaco che ti scuote il petto al semaforo.</p>

            <h3 class="text-2xl font-bold mb-4 mt-8">Il Rituale Perduto</h3>
            <p class="mb-6">C'è un rituale nell'accendere un'auto sportiva classica. Inserire la chiave (fisica, non un fob), girarla, sentire il motorino d'avviamento che lotta per un secondo prima che l'esplosione prenda vita. Poi l'attesa. Aspettare che l'olio vada in temperatura, rispettare la meccanica prima di chiederle tutto. Con l'elettrico, è "On/Off". Abbiamo guadagnato comodità, ma abbiamo perso il dialogo con la macchina.</p>

            <h3 class="text-2xl font-bold mb-4 mt-8">Il Silenzio in Arrivo</h3>
            <p class="mb-6">L'elettrificazione porta prestazioni fulminee. La coppia istantanea è inebriante. Ma manca il crescendo. In un'auto termica, la potenza è una storia che si sviluppa con i giri: c'è l'anticipazione, l'esplosione, il cambio marcia che spezza il fiato. Nell'elettrico, è tutto subito, sempre uguale, un'accelerazione continua che appiattisce le sensazioni.</p>
            
            <p class="mb-6">Forse è giusto così. Per il pianeta, per l'efficienza. Ma chi di noi ha benzina nelle vene guarderà indietro a questi giorni come all'età dell'oro, dove potevamo ancora controllare le esplosioni con il piede destro e sentire l'odore della meccanica calda dopo una corsa in montagna.</p>
        `,
        contentEn: `
            <p class="mb-6"><span class="text-4xl float-left mr-2 font-heading font-black text-accent leading-none">T</span>here is a precise moment, just before the redline, where an engine isn't just spinning. It's screaming. It's a vibration that starts from the chassis, travels up your spine, and tells you that you are alive. This is what electric, in its perfect efficiency, can never replicate.</p>
            
            <h3 class="text-2xl font-bold mb-4 mt-8">The Soul of the Machine</h3>
            <p class="mb-6">The internal combustion engine (ICE) is imperfect. It wastes heat, makes noise, vibrates. But these very imperfections make it human. A Ferrari V12 is not a thruster; it is a musical instrument tuned in Maranello. The irregular breath of an American V8 at idle is a heartbeat that shakes your chest at a stoplight.</p>

            <h3 class="text-2xl font-bold mb-4 mt-8">The Lost Ritual</h3>
            <p class="mb-6">There is a ritual to starting a classic sports car. Inserting the key (physical, not a fob), turning it, feeling the starter motor struggle for a second before the explosion comes to life. Then the wait. Waiting for the oil to warm up, respecting the mechanics before asking for everything. With electric, it's "On/Off". We gained convenience, but we lost the dialogue with the machine.</p>

            <h3 class="text-2xl font-bold mb-4 mt-8">The Coming Silence</h3>
            <p class="mb-6">Electrification brings lightning performance. Instant torque is intoxicating. But the crescendo is missing. In a combustion car, power is a story that unfolds with RPMs: there is anticipation, explosion, the gear shift that catches your breath. In electric, it's everything at once, always the same, a continuous acceleration that flattens sensations.</p>
            
            <p class="mb-6">Perhaps it is right. For the planet, for efficiency. But those of us with gasoline in our veins will look back on these days as the golden age, where we could still control explosions with our right foot and smell the hot mechanics after a mountain run.</p>
        `
    },
    {
        id: "great-revolutions",
        titleIt: "Le 4 Grandi Rivoluzioni dell'Auto",
        titleEn: "The 4 Great Automotive Revolutions",
        subtitleIt: "Dalla catena di montaggio al carbonio: come siamo arrivati qui.",
        subtitleEn: "From the assembly line to carbon fiber: how we got here.",
        category: "History",
        date: "2024-06-20",
        author: "Automotive X",
        image: "/images/garage/miura_authentic.jpg", // Miura represents the mid-engine revolution
        quotes: [
            {
                textIt: "L'aerodinamica è per chi non sa costruire motori.",
                textEn: "Aerodynamics are for people who can't build engines.",
                author: "Enzo Ferrari",
                color: "yellow"
            },
            {
                textIt: "Aggiungere potenza ti rende più veloce sui rettilinei. Togliere peso ti rende più veloce ovunque.",
                textEn: "Adding power makes you faster on the straights. Subtracting weight makes you faster everywhere.",
                author: "Colin Chapman",
                color: "gray"
            }
        ],
        contentIt: `
            <p class="mb-6">L'automobile non si è evoluta in linea retta. Ha fatto salti quantici. Ecco i quattro momenti che hanno cambiato tutto per le supercar.</p>

            <h3 class="text-2xl font-bold mb-4 mt-8">1. Il Motore Centrale (1966)</h3>
            <p class="mb-6">Prima della <strong>Lamborghini Miura</strong>, le auto sportive avevano il motore davanti. Erano GT veloci, ma pesanti e goffe. La Miura, grazie al genio di Marcello Gandini e Giampaolo Dallara, spostò il V12 dietro la schiena del pilota. Risultato? Bilanciamento perfetto, baricentro basso e quel profilo iconico che definisce le supercar ancora oggi.</p>

            <h3 class="text-2xl font-bold mb-4 mt-8">2. L'Era del Carbonio (1981)</h3>
            <p class="mb-6">John Barnard e la McLaren MP4/1 cambiarono tutto in F1 introducendo la monoscocca in fibra di carbonio. Pochi anni dopo, la <strong>Ferrari F40</strong> portò questa tecnologia su strada. Improvvisamente, le auto potevano essere leggere come piume ma rigide come roccia.</p>

            <h3 class="text-2xl font-bold mb-4 mt-8">3. Il Turbo nell'Era dell'Eccesso (1987)</h3>
            <p class="mb-6">La Ferrari F40 e la Porsche 959 hanno portato la tecnologia delle corse su strada. Il turbo non era più solo per i camion: era un modo per ottenere potenze spaventose da motori piccoli. Era l'era del "calcio nella schiena", del turbo lag che ti coglieva di sorpresa in curva. Pericoloso, sì, ma indimenticabile.</p>

            <h3 class="text-2xl font-bold mb-4 mt-8">4. L'Ibrido come Performance (2013)</h3>
            <p class="mb-6">La "Santa Trinità" (LaFerrari, P1, 918 Spyder) ha cambiato la percezione dell'elettrico. Non più per risparmiare carburante (fecero finta), ma per riempire i vuoti di coppia del termico ("Torque fill"). Hanno creato macchine da 900+ cavalli guidabili come utilitarie. È stato l'inizio della fine del motore puramente termico, ma ha aperto la porta a prestazioni prima inimmaginabili.</p>
        `,
        contentEn: `
            <p class="mb-6">The automobile didn't evolve in a straight line. It took quantum leaps. Here are the four moments that changed everything for supercars.</p>

            <h3 class="text-2xl font-bold mb-4 mt-8">1. The Mid-Engine Layout (1966)</h3>
            <p class="mb-6">Before the <strong>Lamborghini Miura</strong>, sports cars had the engine in the front. They were fast GTs, but nose-heavy and clumsy. The Miura, thanks to the genius of Marcello Gandini and Giampaolo Dallara, moved the V12 behind the driver's back. Result? Perfect balance, low center of gravity, and that iconic profile that defines supercars to this day.</p>

            <h3 class="text-2xl font-bold mb-4 mt-8">2. The Carbon Era (1981)</h3>
            <p class="mb-6">John Barnard and the McLaren MP4/1 changed everything in F1 by introducing the carbon fiber monocoque. A few years later, the <strong>Ferrari F40</strong> brought this tech to the road. Suddenly, cars could be feather-light yet rock-hard.</p>

            <h3 class="text-2xl font-bold mb-4 mt-8">3. Turbo in the Era of Excess (1987)</h3>
            <p class="mb-6">The Ferrari F40 and Porsche 959 brought racing tech to the road. The turbo wasn't just for trucks anymore: it was a way to get frightening power from small engines. It was the era of the "kick in the back," of turbo lag catching you mid-corner. Dangerous, yes, but unforgettable.</p>

            <h3 class="text-2xl font-bold mb-4 mt-8">4. Hybrid as Performance (2013)</h3>
            <p class="mb-6">The "Holy Trinity" (LaFerrari, P1, 918 Spyder) changed the perception of electric. No longer for saving fuel (they pretended), but for filling the torque gaps of the engine ("Torque fill"). They created 900+ hp machines driveable like hatchbacks. It was the beginning of the end of the purely thermal engine, but it opened the door to previously unimaginable performance.</p>
        `
    }
];
