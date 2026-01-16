const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '../public/sounds');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Map Internal Filename -> Probable Google Actions Filename
// Suffix ".ogg" is mandatory for Google Actions library
const textToUrl = {
    'v8.mp3': 'https://actions.google.com/sounds/v1/transportation/muscle_car_start.ogg', // Explicitly mentioned in search
    'v12.mp3': 'https://actions.google.com/sounds/v1/transportation/race_car_pass_by.ogg',
    'v10.mp3': 'https://actions.google.com/sounds/v1/transportation/race_car.ogg', // Generic race car
    'w16.mp3': 'https://actions.google.com/sounds/v1/transportation/plane_taking_off.ogg', // Power! (Or maybe too loud? Let's try aggressive car) -> backing up with truck
    'boxer.mp3': 'https://actions.google.com/sounds/v1/transportation/aggressive_motorcycle.ogg', // For the punchy sound
    'inline4.mp3': 'https://actions.google.com/sounds/v1/transportation/car_accelerating.ogg',
    'inline6.mp3': 'https://actions.google.com/sounds/v1/transportation/car_driving_by.ogg',
    'v6.mp3': 'https://actions.google.com/sounds/v1/transportation/car_horn.ogg' // Fallback / distinct
};

// Alternate guess list if above fail
const backupMap = {
    'w16.mp3': 'https://actions.google.com/sounds/v1/transportation/ship_engine.ogg', // Deep rumble
    'v6.mp3': 'https://actions.google.com/sounds/v1/transportation/motorcycle_engine.ogg'
};

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                // Try to consume data to free memory
                res.resume();
                resolve(false); // Failed
                return;
            }
            const file = fs.createWriteStream(dest);
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve(true); // Success
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            resolve(false);
        });
    });
}

async function run() {
    console.log("Probing Google Actions Library...");

    for (const [localName, url] of Object.entries(textToUrl)) {
        console.log(`Trying to fetch ${localName} from ${url}...`);
        const dest = path.join(targetDir, localName);
        const success = await downloadFile(url, dest);

        if (success) {
            console.log(`[SUCCESS] Downloaded ${localName}`);
        } else {
            console.log(`[FAILED] ${url} - Trying backup...`);
            if (backupMap[localName]) {
                const backupSuccess = await downloadFile(backupMap[localName], dest);
                if (backupSuccess) console.log(`[SUCCESS] (Backup) Downloaded ${localName}`);
                else console.log(`[FAILED] Backup also failed for ${localName}`);
            }

            // Final fallback: Use the KNOWN working generic sound if all else fails
            // to ensure no silence.
            if (!fs.existsSync(dest) || fs.statSync(dest).size === 0) {
                // Assuming v8 or one worked, or just download the trusty SoundJay/Google fallback
                // Let's rely on copying a successful one later if needed, but for now leave blank to show failure.
            }
        }
    }
}

run();
