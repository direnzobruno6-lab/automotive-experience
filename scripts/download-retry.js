const fs = require('fs');
const https = require('https');
const path = require('path');

const cars = [
    { name: 'valkyrie.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/AstonMartin_Valkyrie.jpg/800px-AstonMartin_Valkyrie.jpg' },
    { name: 'mclarenf1_authentic.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/McLaren_F1_XP5_prototype.jpg/800px-McLaren_F1_XP5_prototype.jpg' },
    { name: 'enzo_authentic.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Ferrari_Enzo_Ferrari.jpg/800px-Ferrari_Enzo_Ferrari.jpg' },
    { name: 'carreragt_authentic.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg/800px-Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg' },
    { name: 'zonda_authentic.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pagani_Zonda_Cinque_Roadster.jpg/800px-Pagani_Zonda_Cinque_Roadster.jpg' },
    { name: 'miura_authentic.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Lamborghini_Miura_P400_SV_Chassis_4970_210516.jpg/800px-Lamborghini_Miura_P400_SV_Chassis_4970_210516.jpg' },
    { name: 'eb110_authentic.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bugatti_EB110_SS_at_Geneva_International_Motor_Show_2019_07.jpg/800px-Bugatti_EB110_SS_at_Geneva_International_Motor_Show_2019_07.jpg' }
];

const downloadDir = path.join(__dirname, '../public/images/garage');
if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function downloadImage(car) {
    const filePath = path.join(downloadDir, car.name);

    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        if (stats.size > 10000) {
            console.log(`Skipping ${car.name}, already exists`);
            return;
        }
    }

    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        };

        const request = https.get(car.url, options, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                downloadImage({ ...car, url: response.headers.location }).then(resolve).catch(reject);
                return;
            }
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${car.name}: Status Code ${response.statusCode}`));
                return;
            }

            const fileStream = fs.createWriteStream(filePath);
            response.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded ${car.name}`);
                resolve();
            });
        });

        request.on('error', (err) => {
            console.error(`Error requesting ${car.name}:`, err.message);
            fs.unlink(filePath, () => { });
            reject(err);
        });
    });
}

async function downloadAll() {
    console.log('Starting retry download process...');
    for (const car of cars) {
        try {
            await downloadImage(car);
            // Longer sleep to be polite and avoid 429
            await sleep(10000);
        } catch (error) {
            console.error(`Error downloading ${car.name}:`, error.message);
        }
    }
    console.log('Retry download process completed.');
}

downloadAll();
