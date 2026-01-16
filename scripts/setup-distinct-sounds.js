const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '../public/sounds');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// STRATEGY: Use DISTINCT working sounds from Google Actions to simulate engine types.
// V8/W16 -> Low/Deep (Ship/Truck)
// V10/V12 -> High/Scream (Aggressive Motorcycle)
// Inline -> Generic (Car Accelerating)
// V6 -> (Car Horn / Other)

const soundMap = {
    // V12: High pitched scream
    'v12.mp3': 'https://actions.google.com/sounds/v1/transportation/aggressive_motorcycle.ogg',

    // V10: Also high pitched
    'v10.mp3': 'https://actions.google.com/sounds/v1/transportation/aggressive_motorcycle.ogg',

    // V8: Deep rumble (using ship engine or truck check if available, otherwise fallback)
    // backup: https://actions.google.com/sounds/v1/transportation/ship_engine.ogg (verified working previously?)
    // Let's try ship_engine.ogg for W16 massive power
    'w16.mp3': 'https://actions.google.com/sounds/v1/transportation/ship_fog_horn.ogg', // Maybe fog horn is too distinct? Let's try ship engine.
    'v8.mp3': 'https://actions.google.com/sounds/v1/transportation/motorcycle_engine.ogg', // Regular motorcycle for V8 rumble?

    // Boxer: Distinct
    'boxer.mp3': 'https://actions.google.com/sounds/v1/transportation/tractor.ogg', // Tractor for that rough boxer sound?

    // Inline
    'inline4.mp3': 'https://actions.google.com/sounds/v1/transportation/car_driving_by.ogg',
    'inline6.mp3': 'https://actions.google.com/sounds/v1/transportation/car_driven_away.ogg',

    // V6
    'v6.mp3': 'https://actions.google.com/sounds/v1/transportation/car_horn.ogg'
};

function downloadFile(url, dest) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                resolve(false);
                return;
            }
            const file = fs.createWriteStream(dest);
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve(true);
            });
        }).on('error', () => resolve(false));
    });
}

async function run() {
    console.log("Downloading distinct engine simulations...");

    for (const [filename, url] of Object.entries(soundMap)) {
        const dest = path.join(targetDir, filename);
        const success = await downloadFile(url, dest);
        if (success) {
            console.log(`[OK] ${filename}`);
        } else {
            console.log(`[FAIL] ${filename} - using fallback`);
            // Fallback to the known working one if specific fails
            const masterFile = path.join(targetDir, 'v12.mp3');
            if (fs.existsSync(masterFile)) {
                fs.copyFileSync(masterFile, dest);
            }
        }
    }
}

run();
