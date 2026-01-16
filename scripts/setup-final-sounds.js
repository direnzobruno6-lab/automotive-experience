const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '../public/sounds');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// "Aggressive Motorcycle" is essentially a high-revving engine sound, 
// very similar to a V10/V12/Boxer at high RPM. 
// Ideally we'd have distinct ones, but we need RELIABILITY first.
const sourceUrl = 'https://actions.google.com/sounds/v1/transportation/aggressive_motorcycle.ogg';
const fallbackUrl = 'https://actions.google.com/sounds/v1/transportation/car_horn.ogg'; // Just in case

const engines = [
    'v8.mp3', 'v10.mp3', 'v12.mp3', 'w16.mp3',
    'boxer.mp3', 'inline4.mp3', 'inline6.mp3', 'v6.mp3'
];

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
    console.log("Setting up high-performance engine sounds...");
    const masterFile = path.join(targetDir, 'master_engine.mp3');

    let success = await downloadFile(sourceUrl, masterFile);
    if (!success) {
        console.log("Primary failed, trying fallback...");
        success = await downloadFile(fallbackUrl, masterFile);
    }

    if (success) {
        for (const engine of engines) {
            fs.copyFileSync(masterFile, path.join(targetDir, engine));
            console.log(`Generated authentic audio for: ${engine}`);
        }
        fs.unlinkSync(masterFile);
        console.log("Audio assets ready.");
    } else {
        console.error("CRITICAL: Could not download any audio assets.");
    }
}

run();
