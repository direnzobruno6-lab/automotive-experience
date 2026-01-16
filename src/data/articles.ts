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
        author: "Bruno Antigravity",
        image: "/images/garage/f40.jpg", // Using F40 engine bay vibe
        contentIt: `
            <p class="mb-6"><span class="text-4xl float-left mr-2 font-heading font-black text-accent leading-none">C</span>'è un momento preciso, poco prima del limitatore, dove un motore non sta semplicemente girando. Sta urlando. È una vibrazione che parte dal telaio, risale lungo la colonna vertebrale e ti dice che sei vivo. Questo è ciò che l'elettrico, nella sua perfetta efficienza, non potrà mai replicare.</p>
            
            <h3 class="text-2xl font-bold mb-4 mt-8">L'Anima della Macchina</h3>
            <p class="mb-6">Il motore a combustione interna (ICE) è imperfetto. Spreca calore, fa rumore, vibra. Ma sono proprio queste imperfezioni a renderlo umano. Un V12 Ferrari non è un propulsore; uno strumento musicale accordato a Maranello. Il respiro irregolare di un V8 americano al minimo è un battito cardiaco.</p>

            <blockquote class="border-l-4 border-accent pl-6 italic text-xl my-8">
                "Non stiamo perdendo un mezzo di trasporto. Stiamo perdendo una forma d'arte cinetica che ha definito il 20° secolo."
            </blockquote>

            <h3 class="text-2xl font-bold mb-4 mt-8">Il Silenzio in Arrivo</h3>
            <p class="mb-6">L'elettrificazione porta prestazioni fulminee. La coppia istantanea è inebriante. Ma manca il crescendo. In un'auto termica, la potenza è una storia che si sviluppa con i giri: c'è l'anticipazione, l'esplosione, il cambio marcia. Nell'elettrico, è tutto subito, sempre uguale.</p>
            
            <p class="mb-6">Forse è giusto così. Per il pianeta, per l'efficienza. Ma chi di noi ha benzina nelle vene guarderà indietro a questi giorni come all'età dell'oro, dove potevamo ancora controllare le esplosioni con il piede destro.</p>
        `,
        contentEn: `
            <p class="mb-6"><span class="text-4xl float-left mr-2 font-heading font-black text-accent leading-none">T</span>here is a precise moment, just before the redline, where an engine isn't just spinning. It's screaming. It's a vibration that starts from the chassis, travels up your spine, and tells you that you are alive. This is what electric, in its perfect efficiency, can never replicate.</p>
            
            <h3 class="text-2xl font-bold mb-4 mt-8">The Soul of the Machine</h3>
            <p class="mb-6">The internal combustion engine (ICE) is imperfect. It wastes heat, makes noise, vibrates. But these very imperfections make it human. A Ferrari V12 is not a thruster; it is a musical instrument tuned in Maranello. The irregular breath of an American V8 at idle is a heartbeat.</p>

            <blockquote class="border-l-4 border-accent pl-6 italic text-xl my-8">
                "We are not losing a mode of transport. We are losing a kinetic art form that defined the 20th century."
            </blockquote>

            <h3 class="text-2xl font-bold mb-4 mt-8">The Coming Silence</h3>
            <p class="mb-6">Electrification brings lightning performance. Instant torque is intoxicating. But the crescendo is missing. In a combustion car, power is a story that unfolds with RPMs: there is anticipation, explosion, the gear shift. In electric, it's everything at once, always the same.</p>
            
            <p class="mb-6">Perhaps it is right. For the planet, for efficiency. But those of us with gasoline in our veins will look back on these days as the golden age, where we could still control explosions with our right foot.</p>
        `
    },
    {
        id: "great-revolutions",
        titleIt: "Le 3 Grandi Rivoluzioni dell'Auto",
        titleEn: "The 3 Great Automotive Revolutions",
        subtitleIt: "Dalla catena di montaggio al carbonio: come siamo arrivati qui.",
        subtitleEn: "From the assembly line to carbon fiber: how we got here.",
        category: "History",
        date: "2024-06-20",
        author: "Bruno Antigravity",
        image: "/images/garage/miura_authentic.jpg", // Miura represents the mid-engine revolution
        contentIt: `
            <p class="mb-6">L'automobile non si è evoluta in linea retta. Ha fatto salti quantici. Ecco i tre momenti che hanno cambiato tutto per le supercar.</p>

            <h3 class="text-2xl font-bold mb-4 mt-8">1. Il Motore Centrale (1966)</h3>
            <p class="mb-6">Prima della <strong>Lamborghini Miura</strong>, le auto sportive avevano il motore davanti. Erano GT veloci, ma pesanti. La Miura spostò il V12 dietro la schiena del pilota. Risultato? Bilanciamento perfetto, baricentro basso e quel profilo iconico che definisce le supercar ancora oggi.</p>

            <h3 class="text-2xl font-bold mb-4 mt-8">2. Il Turbo nell'Era dell'Eccesso (1987)</h3>
            <p class="mb-6">La <strong>Ferrari F40</strong> e la Porsche 959 hanno portato la tecnologia delle corse su strada. Il turbo non era più solo per i camion: era un modo per ottenere potenze spaventose da motori piccoli. Era l'era del "calcio nella schiena", pericolosa ed esaltante.</p>

            <h3 class="text-2xl font-bold mb-4 mt-8">3. L'Ibrido come Performance (2013)</h3>
            <p class="mb-6">La "Santa Trinità" (LaFerrari, P1, 918 Spyder) ha cambiato la percezione dell'elettrico. Non più per risparmiare carburante, ma per riempire i vuoti di coppia del termico. Hanno creato macchine da 900+ cavalli guidabili come utilitarie. È stato l'inizio della fine, ma che inizio.</p>
        `,
        contentEn: `
            <p class="mb-6">The automobile didn't evolve in a straight line. It took quantum leaps. Here are the three moments that changed everything for supercars.</p>

            <h3 class="text-2xl font-bold mb-4 mt-8">1. The Mid-Engine Layout (1966)</h3>
            <p class="mb-6">Before the <strong>Lamborghini Miura</strong>, sports cars had the engine in the front. They were fast GTs, but nose-heavy. The Miura moved the V12 behind the driver's back. Result? Perfect balance, low center of gravity, and that iconic profile that defines supercars to this day.</p>

            <h3 class="text-2xl font-bold mb-4 mt-8">2. Turbo in the Era of Excess (1987)</h3>
            <p class="mb-6">The <strong>Ferrari F40</strong> and Porsche 959 brought racing tech to the road. The turbo wasn't just for trucks anymore: it was a way to get frightening power from small engines. It was the era of the "kick in the back," dangerous and exhilarating.</p>

            <h3 class="text-2xl font-bold mb-4 mt-8">3. Hybrid as Performance (2013)</h3>
            <p class="mb-6">The "Holy Trinity" (LaFerrari, P1, 918 Spyder) changed the perception of electric. No longer for saving fuel, but for filling the torque gaps of the engine. They created 900+ hp machines driveable like hatchbacks. It was the beginning of the end, but what a beginning.</p>
        `
    }
];
