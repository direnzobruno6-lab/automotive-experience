const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../public/sounds');

// Potential candidates from Google's library
// We will try to download them. If 404, we skip.
const candidates = [
    { name: 'v8.ogg', url: 'https://actions.google.com/sounds/v1/transportation/Simulated_Truck_Engine_Revving.ogg' }, // Deep rumble
    { name: 'v12.ogg', url: 'https://actions.google.com/sounds/v1/transportation/Race_Car_Pass.ogg' }, // High speed scream
    { name: 'v10.ogg', url: 'https://actions.google.com/sounds/v1/transportation/Race_Car_Pass.ogg' }, // Same as V12 for high scream
    { name: 'boxer.ogg', url: 'https://actions.google.com/sounds/v1/transportation/Sports_Car_Engine_Start_Up.ogg' }, // Distinct start
    { name: 'inline4.ogg', url: 'https://actions.google.com/sounds/v1/transportation/Car_Engine_Revving.ogg' }, // Standard rev
    { name: 'w16.ogg', url: 'https://actions.google.com/sounds/v1/transportation/Ship_Engine_Idle.ogg' }, // Massive deep drone
    { name: 'v6.ogg', url: 'https://actions.google.com/sounds/v1/transportation/Sports_Car_Driving_Passing.ogg' } // Fast passing
];

function download(item) {
    return new Promise((resolve) => {
        const dest = path.join(targetDir, item.name);
        // Clear if zero bytes
        if (fs.existsSync(dest)) {
            const stats = fs.statSync(dest);
            if (stats.size < 1000) fs.unlinkSync(dest);
        }

        const file = fs.createWriteStream(dest);
        https.get(item.url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`[OK] ${item.name} from ${item.url}`);
                    resolve(true);
                });
            } else {
                console.log(`[FAIL] ${item.name} - Status: ${response.statusCode}`);
                file.close();
                fs.unlink(dest, () => { }); // Delete empty file
                resolve(false);
            }
        }).on('error', (err) => {
            console.log(`[ERR] ${item.name}: ${err.message}`);
            fs.unlink(dest, () => { });
            resolve(false);
        });
    });
}

async function run() {
    console.log("Downloading reliable Google car assets...");
    for (const c of candidates) {
        await download(c);
    }
    console.log("Done.");
}

run();
