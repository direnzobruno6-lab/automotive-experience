const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '../public/sounds');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Map of engines to reliable direct download URLs (best effort discovery)
const soundMap = {
    // V12: Ferrari F1/Enzo style high pitch
    'v12.mp3': 'https://www.myinstants.com/media/sounds/ferrari-f1-v12-acceleration.mp3',

    // V10: Lexus LFA / F1 style
    'v10.mp3': 'https://www.myinstants.com/media/sounds/lexus-lfa-exhaust-sound.mp3',

    // V8: American Muscle / AMG deep rumble
    'v8.mp3': 'https://www.myinstants.com/media/sounds/shelby-gt500-exhaust.mp3',

    // Boxer: Subaru rumble
    'boxer.mp3': 'https://www.myinstants.com/media/sounds/subaru-wrx-sti-exhaust.mp3',

    // W16: Deep jet-like idle (using a deep rumble proxy if exact W16 unavailable)
    'w16.mp3': 'https://www.myinstants.com/media/sounds/bugatti-chiron-startup.mp3',

    // Inline 6: BMW/Supra smooth sound
    'inline6.mp3': 'https://www.myinstants.com/media/sounds/toyota-supra-mk4-2jz-gte-sound.mp3',

    // Inline 4: Honda VTEC / Sporty
    'inline4.mp3': 'https://www.myinstants.com/media/sounds/honda-civic-type-r-exhaust.mp3',

    // V6: GTR or Alfa
    'v6.mp3': 'https://www.myinstants.com/media/sounds/nissan-gtr-r35-acceleration.mp3'
};

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const request = https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0' // Mimic browser to avoid 403
            }
        }, (response) => {
            if (response.statusCode !== 200) {
                // Try to follow redirect if 301/302
                if (response.statusCode === 301 || response.statusCode === 302) {
                    downloadFile(response.headers.location, dest).then(resolve).catch(reject);
                    return;
                }
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Successfully downloaded: ${path.basename(dest)}`);
                resolve();
            });
        });
        request.on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
}

async function run() {
    console.log("Starting authentic engine sound download...");

    for (const [filename, url] of Object.entries(soundMap)) {
        console.log(`Processing ${filename}...`);
        try {
            await downloadFile(url, path.join(targetDir, filename));
        } catch (error) {
            console.error(`Error downloading ${filename}:`, error.message);
            // Fallback: If specific fails, copy the V8 (which usually works) as absolute fallback
            // But we try to keep them distinct.
        }
    }
    console.log("Download process complete.");
}

run();
