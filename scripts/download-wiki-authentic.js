const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '../public/sounds');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Authentic mappings from Wikimedia Commons
// User-Agent is CRITICAL for Wikimedia.
const wikiMap = {
    // Boxer: 1967 Porsche 911R (Flat-6 Boxer)
    'boxer.ogg': 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Porsche_911R_%281967%29.ogg',

    // V12: Ferrari 250 GTO (Classic V12)
    'v12.ogg': 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Ferrari_250_GTO%2C_Engine_Sound.ogg',

    // V8: Rover V8 (Classic Rumble)
    'v8.ogg': 'https://upload.wikimedia.org/wikipedia/commons/2/23/Rover-v8-rr79.ogg',

    // V10: Using Ferrari F355 (High rev V8) as proxy for V10 scream if real V10 unavailable
    // It's technically a V8 but has that "F1 scream" quality user wants for V10/LFA
    'v10.ogg': 'https://upload.wikimedia.org/wikipedia/commons/1/18/Ferrari_F355_under-hood_exhaust_sound.ogg',

    // W16: Ferrari 126C4 (V6 Turbo F1) - The turbo whoosh/power mimics W16 partially
    'w16.ogg': 'https://upload.wikimedia.org/wikipedia/commons/0/07/Ferrari_126C4_M2_%281984%29.ogg',

    // Inline 6: Porsche 911R again? No, let's look for a generic or reuse
    // Will skip download here and rely on existing mp3 fallback if missing, 
    // OR double up the Porsche sound as it implies "Sporty 6 cyl"
    'inline6.ogg': 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Porsche_911R_%281967%29.ogg',

    // V6: Using the Turbo F1 sound again (it is a V6T)
    'v6.ogg': 'https://upload.wikimedia.org/wikipedia/commons/0/07/Ferrari_126C4_M2_%281984%29.ogg',
};

function downloadFile(url, dest) {
    return new Promise((resolve) => {
        const file = fs.createWriteStream(dest);
        const request = https.get(url, {
            headers: {
                'User-Agent': 'AutomotiveExperienceBot/1.0 (https://example.com; bot@example.com)' // Correct UA for Wiki
            }
        }, (response) => {
            if (response.statusCode !== 200) {
                console.log(`Failed ${url}: ${response.statusCode}`);
                resolve(false);
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${path.basename(dest)}`);
                resolve(true);
            });
        });
        request.on('error', (err) => {
            fs.unlink(dest, () => { });
            resolve(false);
        });
    });
}

async function run() {
    console.log("Downloading AUTHENTIC Wikimedia sounds...");

    for (const [filename, url] of Object.entries(wikiMap)) {
        await downloadFile(url, path.join(targetDir, filename));
    }
    console.log("Done.");
}

run();
