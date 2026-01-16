const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../public/sounds');

// Verified Google Actions Library filenames (Case Sensitive!)
// https://developers.google.com/assistant/tools/sound-library/transportation
const sources = [
    { name: 'v8.ogg', url: 'https://actions.google.com/sounds/v1/transportation/Truck_Idling.ogg' }, // Deep
    { name: 'v12.ogg', url: 'https://actions.google.com/sounds/v1/transportation/Aggressive_Motorcycle_Turn.ogg' }, // High/Scream
    { name: 'inline4.ogg', url: 'https://actions.google.com/sounds/v1/transportation/Car_Driving_By.ogg' }, // Standard
    { name: 'w16.ogg', url: 'https://actions.google.com/sounds/v1/transportation/Aircraft_Jet_Flyover.ogg' }, // Massive/Turbine-like
    { name: 'boxer.ogg', url: 'https://actions.google.com/sounds/v1/transportation/Motorcycle_Driving_Fast.ogg' } //Distinct
];

function download(item) {
    return new Promise((resolve) => {
        const dest = path.join(targetDir, item.name);
        const file = fs.createWriteStream(dest);
        https.get(item.url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`[OK] ${item.name}`);
                    resolve(true);
                });
            } else {
                console.log(`[FAIL] ${item.name}: ${response.statusCode}`);
                file.close();
                fs.unlink(dest, () => { });
                resolve(false);
            }
        });
    });
}

async function run() {
    console.log("Acquiring diverse Google audio assets (2nd Attempt)...");
    for (const source of sources) {
        await download(source);
    }
}

run();
