const fs = require('fs');
const https = require('https');
const path = require('path');

// Using ORIGINAL URLs to avoid thumbnail generation rate limits
const cars = [
    { name: 'f40.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/F40_Ferrari_20090509.jpg' },
    { name: '300sl.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/1955_Mercedes_Benz_300_SL_-_silver_-_rvr.jpg' },
    { name: 'countach.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Lamborghini_Countach_25th_Anniversary_IMG_2994.jpg' },
    { name: 'chiron.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Bugatti_Chiron_Royal_Blue.jpg' },
    { name: 'huayra.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Pagani_Huayra_Roadster.jpg' },
    { name: 'p1.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Volcano_Orange_McLaren_P1_%2818852267050%29.jpg' },
    { name: '918.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Porsche_918_Spyder_Museum.jpg' },
    { name: 'laferrari.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Ferrari_LaFerrari_Geneva_2013-1.jpg' },
    { name: 'jesko.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Koenigsegg_Jesko.jpg' },
    { name: 'valkyrie.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/AstonMartin_Valkyrie.jpg' },
    { name: 'veneno.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Lamborghini_Veneno.jpg' },
    { name: 'lfa.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Lexus_LFA_white.jpg' },
    { name: 'fordgt.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/2017_Ford_GT_%2836321694300%29.jpg' },
    { name: 'mc12.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Maserati_MC12.jpg' },
    { name: 'veyron.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Bugatti_Veyron_Super_Sport_WRE.jpg' }
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
        // If file exists and is "healthy" size (e.g. > 20KB for original), skip
        if (stats.size > 20000) {
            console.log(`Skipping ${car.name}, healthy file exists (${stats.size} bytes)`);
            return;
        } else {
            // Delete corrupt/small files (like 429 error pages)
            console.log(`Deleting corrupt file ${car.name} (${stats.size} bytes)...`);
            fs.unlinkSync(filePath);
        }
    }

    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
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
            reject(err);
        });
    });
}

async function downloadAll() {
    console.log('Starting ORIGINAL resolution download process...');
    for (const car of cars) {
        try {
            await downloadImage(car);
            // 2 seconds delay should be enough for static file serving, less strict than thumbs
            await sleep(2000);
        } catch (error) {
            console.error(`Error downloading ${car.name}:`, error.message);
        }
    }
    console.log('Download process completed.');
}

downloadAll();
