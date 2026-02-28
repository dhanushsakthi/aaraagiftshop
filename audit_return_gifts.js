const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/products.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Match all objects in the array
const productMatches = content.match(/\{[\s\S]*?id:\s*"([^"]+)"[\s\S]*?img:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"[\s\S]*?\}/g);

if (!productMatches) {
    console.log("No products found.");
    process.exit(0);
}

const returnGiftImages = productMatches
    .filter(p => p.includes("Wedding Return Gifts"))
    .map(p => {
        const imgMatch = p.match(/img:\s*"([^"]+)"/);
        return imgMatch ? imgMatch[1].split('/').pop() : null;
    })
    .filter(img => img !== null);

const imageDir = path.join(__dirname, 'public/assets/images/return_gift');
const filesInDir = fs.readdirSync(imageDir);

console.log("Products in products.ts (Wedding Return Gifts):", returnGiftImages.length);
console.log("Images in folder:", filesInDir.length);

const missingInProducts = filesInDir.filter(f => !returnGiftImages.includes(f));
console.log("\nMissing in products.ts:");
missingInProducts.forEach(f => console.log("- " + f));

const missingInFolder = returnGiftImages.filter(f => !filesInDir.includes(f));
console.log("\nMissing in folder (but in products.ts):");
missingInFolder.forEach(f => console.log("- " + f));
