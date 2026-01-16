const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '../public/sounds');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const engineFiles = [
    'inline4.mp3', 'inline6.mp3', 'v6.mp3', 'boxer.mp3',
    'v8.mp3', 'v10.mp3', 'v12.mp3', 'w16.mp3'
];

const soundUrl = "https://www.soundjay.com/transportation/sounds/car-engine-start-1.mp3";

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const request = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        });
        request.on('error', (err) => {
            fs.unlink(dest, () => { }); // Delete the file async. (But we don't check result)
            reject(err);
        });
    });
}

async function setupSounds() {
    console.log("Downloading reliable placeholder sound...");
    const tempFile = path.join(targetDir, 'temp_engine.mp3');

    try {
        await downloadFile(soundUrl, tempFile);
        console.log("Download complete. Duplicating for all engines...");

        for (const filename of engineFiles) {
            fs.copyFileSync(tempFile, path.join(targetDir, filename));
            console.log(`Created ${filename}`);
        }

        fs.unlinkSync(tempFile);
        console.log("Audio setup complete.");
    } catch (error) {
        console.error("Error setting up sounds:", error.message);
    }
}

setupSounds();
