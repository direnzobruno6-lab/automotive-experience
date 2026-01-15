const fs = require('fs');
const https = require('https');
const path = require('path');

const cars = [
    { name: 'f40.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/F40_Ferrari_20090509.jpg/800px-F40_Ferrari_20090509.jpg' },
    { name: '300sl.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/1955_Mercedes_Benz_300_SL_-_silver_-_rvr.jpg/800px-1955_Mercedes_Benz_300_SL_-_silver_-_rvr.jpg' },
    { name: 'countach.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Lamborghini_Countach_25th_Anniversary_IMG_2994.jpg/800px-Lamborghini_Countach_25th_Anniversary_IMG_2994.jpg' },
    { name: 'chiron.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Bugatti_Chiron_Royal_Blue.jpg/800px-Bugatti_Chiron_Royal_Blue.jpg' },
    { name: 'huayra.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Pagani_Huayra_Roadster.jpg/800px-Pagani_Huayra_Roadster.jpg' },
    { name: 'p1.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Volcano_Orange_McLaren_P1_%2818852267050%29.jpg/800px-Volcano_Orange_McLaren_P1_%2818852267050%29.jpg' },
    { name: '918.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Porsche_918_Spyder_Museum.jpg/800px-Porsche_918_Spyder_Museum.jpg' },
    { name: 'laferrari.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ferrari_LaFerrari_Geneva_2013-1.jpg/800px-Ferrari_LaFerrari_Geneva_2013-1.jpg' },
    { name: 'jesko.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Koenigsegg_Jesko.jpg/800px-Koenigsegg_Jesko.jpg' },
    { name: 'valkyrie.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/AstonMartin_Valkyrie.jpg/800px-AstonMartin_Valkyrie.jpg' },
    { name: 'veneno.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Lamborghini_Veneno.jpg/800px-Lamborghini_Veneno.jpg' },
    { name: 'lfa.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Lexus_LFA_white.jpg/800px-Lexus_LFA_white.jpg' },
    { name: 'fordgt.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2017_Ford_GT_%2836321694300%29.jpg/800px-2017_Ford_GT_%2836321694300%29.jpg' },
    { name: 'mc12.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Maserati_MC12.jpg/800px-Maserati_MC12.jpg' },
    { name: 'veyron.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bugatti_Veyron_Super_Sport_WRE.jpg/800px-Bugatti_Veyron_Super_Sport_WRE.jpg' }
];

const downloadDir = path.join(__dirname, '../public/images/garage');
if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function downloadImage(car) {
    const filePath = path.join(downloadDir, car.name);

    // Skip if already exists and size is reasonable (>10KB)
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        if (stats.size > 10000) {
            console.log(`Skipping ${car.name}, already exists (${stats.size} bytes)`);
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
    console.log('Starting resilient download process...');
    for (const car of cars) {
        try {
            await downloadImage(car);
            // Politeness delay to avoid 429
            await sleep(5000);
        } catch (error) {
            console.error(`Error downloading ${car.name}:`, error.message);
        }
    }
    console.log('Download process completed.');
}

downloadAll();
