const fs = require('fs');
const https = require('https');
const path = require('path');

const sounds = [
    // Using guessed Wikimedia paths - if these fail, I will use placeholders/generic
    // Note: Wikimedia often uses .ogg, but we want mp3 if possible or we can play ogg in modern browsers.
    // LFA V10 is legendary.
    { name: 'v10.mp3', url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/9/98/Lexus_LFA_exhaust_sound.ogg/Lexus_LFA_exhaust_sound.ogg.mp3' },
    // Ferrari V12
    { name: 'v12.mp3', url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6d/Ferrari_Enzo_accelerating.ogg/Ferrari_Enzo_accelerating.ogg.mp3' },
    // Boxer (Subaru or Porsche) - Generic Boxer rumble
    { name: 'boxer.mp3', url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c2/Porsche_911_GT3_991_Launch_Control.ogg/Porsche_911_GT3_991_Launch_Control.ogg.mp3' },
    // V8 (AMG or Muscle)
    { name: 'v8.mp3', url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c4/V8_Biturbo_sound.ogg/V8_Biturbo_sound.ogg.mp3' },
    // Inline 6 (BMW or RB26)
    { name: 'inline6.mp3', url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a3/BMW_M3_E46_Csl_Sound.ogg/BMW_M3_E46_Csl_Sound.ogg.mp3' },
    // Inline 4 (Honda VTEC or similar)
    { name: 'inline4.mp3', url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/4/41/Honda_Integra_Type-R_DC2_Stock_Exhaust.ogg/Honda_Integra_Type-R_DC2_Stock_Exhaust.ogg.mp3' },
    // W16 - Very rare, might fallback
    { name: 'w16.mp3', url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/bd/Bugatti_Veyron_16.4_-_Engine_Start.ogg/Bugatti_Veyron_16.4_-_Engine_Start.ogg.mp3' },
    // V6
    { name: 'v6.mp3', url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/3/31/Alfa_Romeo_Giulia_Quadrifoglio_Sound.ogg/Alfa_Romeo_Giulia_Quadrifoglio_Sound.ogg.mp3' }
];

const downloadDir = path.join(__dirname, '../public/sounds');
if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

async function downloadSound(sound) {
    return new Promise((resolve, reject) => {
        const filePath = path.join(downloadDir, sound.name);
        if (fs.existsSync(filePath)) {
            console.log(`Skipping ${sound.name}, exists.`);
            resolve();
            return;
        }

        const options = {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        };

        https.get(sound.url, options, (res) => {
            if (res.statusCode !== 200) {
                // Try OGG if MP3 transcode fails
                if (sound.url.endsWith('.mp3')) {
                    const oggUrl = sound.url.replace('/transcoded', '').replace('.mp3', '').replace(path.basename(sound.url), path.basename(sound.url).replace('.mp3', ''));
                    // This logic is complex for Wikimedia URLs, let's just log error
                    console.log(`Failed ${sound.name} (404/etc).`);
                    resolve(); // resolving to continue
                }
                return;
            }
            const file = fs.createWriteStream(filePath);
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${sound.name}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filePath, () => { });
            console.error(`Error ${sound.name}: ${err.message}`);
            resolve();
        });
    });
}

async function run() {
    for (const s of sounds) {
        await downloadSound(s);
    }
}

run();
