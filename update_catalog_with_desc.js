const fs = require('fs');
const path = require('path');

const corporateDir = path.join(__dirname, 'public/assets/images/corporate');
const brandedDir = path.join(__dirname, 'public/assets/images/branded');
const promotionalDir = path.join(__dirname, 'public/assets/images/promotional');
const returnGiftDir = path.join(__dirname, 'public/assets/images/return_gift');
const productsFile = path.join(__dirname, 'src/data/products.ts');

const mappings = [
    // Corporate
    { dir: corporateDir, file: 'insulated-water-bottles.jpg', title: 'Insulated Water Bottles', category: 'Corporate Studio' },
    { dir: corporateDir, file: 'red-corporate-gift-set.jpg', title: 'Red Executive Suite', category: 'Corporate Studio' },
    { dir: corporateDir, file: 'metallic-executive-pens.jpg', title: 'Metallic Executive Pens', category: 'Corporate Studio' },
    { dir: corporateDir, file: 'blue-diary-pen-set.jpg', title: 'Blue Diary & Pen Set', category: 'Corporate Studio' },
    { dir: corporateDir, file: 'black-desktop-essentials.jpg', title: 'Black Desktop Essentials', category: 'Corporate Studio' },
    { dir: corporateDir, file: 'blue-flask-diary-set.jpg', title: 'Blue Flask & Diary Set', category: 'Corporate Studio' },
    { dir: corporateDir, file: 'teal-executive-diary.jpg', title: 'Teal Executive Diary', category: 'Corporate Studio' },
    { dir: corporateDir, file: 'camo-sling-bag.jpg', title: 'Camo Sling Bag', category: 'Corporate Studio' },
    { dir: corporateDir, file: 'deco-bottle-umbrellas.jpg', title: 'Deco Bottle Umbrellas', category: 'Corporate Studio' },
    { dir: corporateDir, file: 'katzy-blue-backpack.jpg', title: 'Katzy Blue Backpack', category: 'Corporate Studio' },
    { dir: corporateDir, file: 'black-flask-pen-set.jpg', title: 'Black Flask & Pen Set', category: 'Corporate Studio' },
    { dir: corporateDir, file: 'tan-leather-essentials.jpg', title: 'Tan Leather Essentials', category: 'Corporate Studio' },
    { dir: corporateDir, file: 'colorful-steel-mugs.jpg', title: 'Colorful Steel Mugs', category: 'Corporate Studio' },

    // Branded
    { dir: brandedDir, file: 'cow-lotus-coasters.jpg', title: 'Cow Lotus Coasters', category: 'Branded Gift' },
    { dir: brandedDir, file: 'milton-insulated-mugs.jpg', title: 'Milton Insulated Mugs', category: 'Branded Gift' },
    { dir: brandedDir, file: 'colorful-jewelry-boxes.jpg', title: 'Colorful Jewelry Boxes', category: 'Branded Gift' },
    { dir: brandedDir, file: 'cow-lotus-wooden-boxes.jpg', title: 'Cow Lotus Wooden Boxes', category: 'Branded Gift' },
    { dir: brandedDir, file: 'capsule-umbrellas.jpg', title: 'Capsule Umbrellas', category: 'Branded Gift' },
    { dir: brandedDir, file: 'wooden-incense-holders.jpg', title: 'Wooden Incense Holders', category: 'Branded Gift' },
    { dir: brandedDir, file: 'bamboo-premium-gift-set.jpg', title: 'Bamboo Premium Gift Set', category: 'Branded Gift' },
    { dir: brandedDir, file: 'silver-leaf-idols.jpg', title: 'Silver Leaf Idols', category: 'Branded Gift' },
    { dir: brandedDir, file: 'wooden-incense-stand.jpg', title: 'Wooden Incense Stand', category: 'Branded Gift' },
    { dir: brandedDir, file: 'lotus-haldi-kumkum.jpg', title: 'Lotus Haldi Kumkum', category: 'Branded Gift' },
    { dir: brandedDir, file: 'pink-flower-umbrella.jpg', title: 'Pink Flower Umbrella', category: 'Branded Gift' },
    { dir: brandedDir, file: 'digital-desktop-clock.jpg', title: 'Digital Desktop Clock', category: 'Branded Gift' },
    { dir: brandedDir, file: 'floral-tumblers.jpg', title: 'Floral Tumblers', category: 'Branded Gift' },
    { dir: brandedDir, file: 'gold-kamadhenu-statue.jpg', title: 'Gold Kamadhenu Statue', category: 'Branded Gift' },
    { dir: brandedDir, file: 'gold-peacock-box.jpg', title: 'Gold Peacock Box', category: 'Branded Gift' },
    { dir: brandedDir, file: 'silver-kamadhenu-statue.jpg', title: 'Silver Kamadhenu Statue', category: 'Branded Gift' },
    { dir: brandedDir, file: 'silver-feather-incense-holder.jpg', title: 'Silver Feather Incense', category: 'Branded Gift' },
    { dir: brandedDir, file: 'digital-handheld-fans.jpg', title: 'Digital Handheld Fans', category: 'Branded Gift' },
    { dir: brandedDir, file: 'pichwai-cow-tray.jpg', title: 'Pichwai Cow Tray', category: 'Branded Gift' },
    { dir: brandedDir, file: 'color-changing-alarm-clock.jpg', title: 'Color Changing Alarm Clock', category: 'Branded Gift' },

    // Promotional
    { dir: promotionalDir, file: 'floral-mugs-set.jpg', title: 'Floral Mugs Set', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'quote-wall-hangings.jpg', title: 'Quote Wall Hangings', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'round-wall-plates.jpg', title: 'Round Wall Plates', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'jute-drawstring-bags.jpg', title: 'Jute Drawstring Bags', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'wooden-key-holders.jpg', title: 'Wooden Key Holders', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'printed-jute-bags.jpg', title: 'Printed Jute Bags', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'designer-wall-clocks.jpg', title: 'Designer Wall Clocks', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'custom-photo-frames.jpg', title: 'Custom Photo Frames', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'lunch-box-sets.jpg', title: 'Lunch Box Sets', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'insulated-lunch-bags.jpg', title: 'Insulated Lunch Bags', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'stainless-steel-bottles.jpg', title: 'Stainless Steel Bottles', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'canvas-tote-bags.jpg', title: 'Canvas Tote Bags', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'metallic-water-bottles.jpg', title: 'Metallic Water Bottles', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'ceramic-coffee-mugs.jpg', title: 'Ceramic Coffee Mugs', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'bamboo-desk-organizers.jpg', title: 'Bamboo Desk Organizers', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'leather-notebooks.jpg', title: 'Leather Notebooks', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'portable-chargers.jpg', title: 'Portable Chargers', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'wireless-earbuds.jpg', title: 'Wireless Earbuds', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'bluetooth-speakers.jpg', title: 'Bluetooth Speakers', category: 'Promotional Gifts' },
    { dir: promotionalDir, file: 'smart-fitness-bands.jpg', title: 'Smart Fitness Bands', category: 'Promotional Gifts' },

    // Return Gifts
    { dir: returnGiftDir, file: 'assorted-enamel-dibbi-collection.jpg', title: 'Assorted Enamel Dibbi Collection', category: 'Wedding Return Gifts' },
    { dir: returnGiftDir, file: 'divine-statue-keepsakes.jpg', title: 'Divine Statue Keepsakes', category: 'Wedding Return Gifts' },
    { dir: returnGiftDir, file: 'ganesha-enamel-dibbi-gold.jpg', title: 'Ganesha Enamel Dibbi Gold', category: 'Wedding Return Gifts' },
    { dir: returnGiftDir, file: 'lotus-enamel-diya-purple.jpg', title: 'Lotus Enamel Diya Purple', category: 'Wedding Return Gifts' },
    { dir: returnGiftDir, file: 'lotus-enamel-diya-yellow.jpg', title: 'Lotus Enamel Diya Yellow', category: 'Wedding Return Gifts' },
    { dir: returnGiftDir, file: 'modern-insulated-tiffin-set.jpg', title: 'Modern Insulated Tiffin Set', category: 'Wedding Return Gifts' },
    { dir: returnGiftDir, file: 'peacock-blossom-tin-box.jpg', title: 'Peacock Blossom Tin Box', category: 'Wedding Return Gifts' },
    { dir: returnGiftDir, file: 'peacock-enamel-dibbi-classic.jpg', title: 'Peacock Enamel Dibbi Classic', category: 'Wedding Return Gifts' },
    { dir: returnGiftDir, file: 'peacock-enamel-dibbi-gold.jpg', title: 'Peacock Enamel Dibbi Gold', category: 'Wedding Return Gifts' },
    { dir: returnGiftDir, file: 'peacock-enamel-dibbi-royal.jpg', title: 'Peacock Enamel Dibbi Royal', category: 'Wedding Return Gifts' },
    { dir: returnGiftDir, file: 'peacock-enamel-dibbi-single.jpg', title: 'Peacock Enamel Dibbi Single', category: 'Wedding Return Gifts' },
    { dir: returnGiftDir, file: 'peacock-enamel-dibbi-trio.jpg', title: 'Peacock Enamel Dibbi Trio', category: 'Wedding Return Gifts' },
    { dir: returnGiftDir, file: 'pink-polka-enamel-box.jpg', title: 'Pink Polka Enamel Box', category: 'Wedding Return Gifts' },
    { dir: returnGiftDir, file: 'royal-peacock-gold-diya-set.jpg', title: 'Royal Peacock Gold Diya Set', category: 'Wedding Return Gifts' },
    { dir: returnGiftDir, file: 'soup-bowl-combo-blue.jpg', title: 'Soup Bowl Combo Blue', category: 'Wedding Return Gifts' }
];

let generatedProducts = [];
let idCounter = 100;

for (const m of mappings) {
    let href = '';
    let relImgPath = '';
    let desc = '';
    if (m.category === 'Corporate Studio') {
        href = '/corporate';
        relImgPath = "/assets/images/corporate/" + m.file;
        desc = `Elevate your corporate gifting with the ${m.title}. This premium executive essential is designed to impress clients and reward top performers, combining sophisticated aesthetics with practical daily utility.`;
    } else if (m.category === 'Branded Gift') {
        href = '/collections/branded';
        relImgPath = "/assets/images/branded/" + m.file;
        desc = `Discover the luxury of the ${m.title}. A carefully curated branded gift piece that embodies elegance and superior craftsmanship, perfect for making a lasting impression on your most valued recipients.`;
    } else if (m.category === 'Promotional Gifts') {
        href = '/collections/promotional';
        relImgPath = "/assets/images/promotional/" + m.file;
        desc = `Boost your brand presence with the ${m.title}. A high-quality promotional item that seamlessly blends everyday functionality with exceptional design, ensuring your brand stays top-of-mind.`;
    } else if (m.category === 'Wedding Return Gifts') {
        href = '/collections/wedding';
        relImgPath = "/assets/images/return_gift/" + m.file;
        desc = `Share your joy with the exquisite ${m.title}. This beautifully crafted return gift serves as a memorable token of appreciation, bringing a touch of traditional grace and modern elegance to your guests' homes.`;
    }

    const idStr = "new-" + m.category.replace(/[^a-zA-Z]/g, '').toLowerCase() + "-" + (idCounter++);

    const newProduct = [
        "    {",
        '        id: "' + idStr + '",',
        '        title: "' + m.title + '",',
        '        subtitle: "Premium ' + m.title + '",',
        '        description: "' + desc + '",',
        '        img: "' + relImgPath + '",',
        '        category: "' + m.category + '",',
        '        href: "' + href + '"',
        "    }"
    ].join("\n");
    generatedProducts.push(newProduct);
}

const productsContent = fs.readFileSync(productsFile, 'utf8');

const lastIndex = productsContent.lastIndexOf('];');
if (lastIndex !== -1) {
    const before = productsContent.substring(0, lastIndex).trimEnd();
    // Use an extra comma here so the array continues correctly
    const newContent = before + ",\n" + generatedProducts.join(",\n") + "\n];\n";
    fs.writeFileSync(productsFile, newContent, 'utf8');
    console.log("Successfully appended new products with enhanced descriptions to src/data/products.ts");
} else {
    console.log("Failed to find end of allProducts array in products.ts");
}
