const fs = require('fs');
const path = require('path');

const corporateDir = path.join(__dirname, 'public/assets/images/corporate');
const brandedDir = path.join(__dirname, 'public/assets/images/branded');
const promotionalDir = path.join(__dirname, 'public/assets/images/promotional');
const productsFile = path.join(__dirname, 'src/data/products.ts');

const mappings = [
    // Corporate
    { dir: corporateDir, old: '557f20fe-c6a9-48a9-866a-df1b6e3196b2.jpg', new: 'insulated-water-bottles.jpg', title: 'Insulated Water Bottles', category: 'Corporate Studio' },
    { dir: corporateDir, old: '59037a89-ffe3-4949-949f-3f6629e3a816.jpg', new: 'red-corporate-gift-set.jpg', title: 'Red Executive Suite', category: 'Corporate Studio' },
    { dir: corporateDir, old: '652c8678-9529-4f11-a7a3-6c094e4d22ce.jpg', new: 'metallic-executive-pens.jpg', title: 'Metallic Executive Pens', category: 'Corporate Studio' },
    { dir: corporateDir, old: '690a5610-10e5-472a-ac76-a45602b7c5d3.jpg', new: 'blue-diary-pen-set.jpg', title: 'Blue Diary & Pen Set', category: 'Corporate Studio' },
    { dir: corporateDir, old: '82cf8fa7-c2e2-447f-ad18-49cd721f617e.jpg', new: 'black-desktop-essentials.jpg', title: 'Black Desktop Essentials', category: 'Corporate Studio' },
    { dir: corporateDir, old: '82fdceda-ca06-488f-a195-34cb7b642b23.jpg', new: 'blue-flask-diary-set.jpg', title: 'Blue Flask & Diary Set', category: 'Corporate Studio' },
    { dir: corporateDir, old: '8a02a4a8-3bb7-4720-befc-c4519d49e2b5.jpg', new: 'teal-executive-diary.jpg', title: 'Teal Executive Diary', category: 'Corporate Studio' },
    { dir: corporateDir, old: 'a542f360-9280-4abb-820b-c1e4a2f3814a.jpg', new: 'camo-sling-bag.jpg', title: 'Camo Sling Bag', category: 'Corporate Studio' },
    { dir: corporateDir, old: 'ab01a57e-c08a-4244-a546-159d0f6b80a2.jpg', new: 'deco-bottle-umbrellas.jpg', title: 'Deco Bottle Umbrellas', category: 'Corporate Studio' },
    { dir: corporateDir, old: 'cb2c5edb-a37e-46d2-9eea-9542ee7b30ef.jpg', new: 'katzy-blue-backpack.jpg', title: 'Katzy Blue Backpack', category: 'Corporate Studio' },
    { dir: corporateDir, old: 'cf37bd2d-8cd8-4938-9e4d-74307540b43f.jpg', new: 'black-flask-pen-set.jpg', title: 'Black Flask & Pen Set', category: 'Corporate Studio' },
    { dir: corporateDir, old: 'ec0d67a5-433f-4be6-bb17-bf3c57c98bbe.jpg', new: 'tan-leather-essentials.jpg', title: 'Tan Leather Essentials', category: 'Corporate Studio' },
    { dir: corporateDir, old: 'f8573aa5-b502-4e1c-bd16-437aec08daf8.jpg', new: 'colorful-steel-mugs.jpg', title: 'Colorful Steel Mugs', category: 'Corporate Studio' },

    // Branded
    { dir: brandedDir, old: '5e289be4-952b-4437-a65f-cef74858afc4.jpg', new: 'cow-lotus-coasters.jpg', title: 'Cow Lotus Coasters', category: 'Branded Gift' },
    { dir: brandedDir, old: '63d3c233-8c83-4830-bf6a-98158e0a9565.jpg', new: 'milton-insulated-mugs.jpg', title: 'Milton Insulated Mugs', category: 'Branded Gift' },
    { dir: brandedDir, old: '7dcde10a-8cc9-4fc0-a759-15ad3b8904e3.jpg', new: 'colorful-jewelry-boxes.jpg', title: 'Colorful Jewelry Boxes', category: 'Branded Gift' },
    { dir: brandedDir, old: '7eb14a59-918c-457d-b7c5-842f8e782a0a.jpg', new: 'cow-lotus-wooden-boxes.jpg', title: 'Cow Lotus Wooden Boxes', category: 'Branded Gift' },
    { dir: brandedDir, old: '8742bca7-3162-4428-af54-a8bfbb3a129d.jpg', new: 'capsule-umbrellas.jpg', title: 'Capsule Umbrellas', category: 'Branded Gift' },
    { dir: brandedDir, old: '88b5f710-9b75-4327-9c7d-ed024af946dd.jpg', new: 'wooden-incense-holders.jpg', title: 'Wooden Incense Holders', category: 'Branded Gift' },
    { dir: brandedDir, old: '8a0f3b3d-ef7a-4d65-9f59-0b107d46a25f.jpg', new: 'bamboo-premium-gift-set.jpg', title: 'Bamboo Premium Gift Set', category: 'Branded Gift' },
    { dir: brandedDir, old: '8edea6f1-bb2b-43fa-9d99-e590394c2712.jpg', new: 'silver-leaf-idols.jpg', title: 'Silver Leaf Idols', category: 'Branded Gift' },
    { dir: brandedDir, old: '9cb1a913-0826-4f4c-9c07-37a6b552bccf.jpg', new: 'wooden-incense-stand.jpg', title: 'Wooden Incense Stand', category: 'Branded Gift' },
    { dir: brandedDir, old: 'a65efa64-f70e-4ba1-91f1-9327b75f4809.jpg', new: 'lotus-haldi-kumkum.jpg', title: 'Lotus Haldi Kumkum', category: 'Branded Gift' },
    { dir: brandedDir, old: 'af8494ac-cfd8-4d34-b9b4-8c99cebe6847.jpg', new: 'pink-flower-umbrella.jpg', title: 'Pink Flower Umbrella', category: 'Branded Gift' },
    { dir: brandedDir, old: 'c9690af4-332d-4927-a417-6cb9efb7683e.jpg', new: 'digital-desktop-clock.jpg', title: 'Digital Desktop Clock', category: 'Branded Gift' },
    { dir: brandedDir, old: 'd4bff9f7-8462-46c4-bda8-c521b91a56c5.jpg', new: 'floral-tumblers.jpg', title: 'Floral Tumblers', category: 'Branded Gift' },
    { dir: brandedDir, old: 'd51b088b-edb0-40f1-ad5c-e54dc952921d.jpg', new: 'gold-kamadhenu-statue.jpg', title: 'Gold Kamadhenu Statue', category: 'Branded Gift' },
    { dir: brandedDir, old: 'dde2cd88-b45b-4e37-915d-e688f8652c8e.jpg', new: 'gold-peacock-box.jpg', title: 'Gold Peacock Box', category: 'Branded Gift' },
    { dir: brandedDir, old: 'e41721cc-9506-4b25-b1a8-bd33aba8676c.jpg', new: 'silver-kamadhenu-statue.jpg', title: 'Silver Kamadhenu Statue', category: 'Branded Gift' },
    { dir: brandedDir, old: 'e60235a6-9406-4fc7-8dda-842ea42b20b4.jpg', new: 'silver-feather-incense-holder.jpg', title: 'Silver Feather Incense', category: 'Branded Gift' },
    { dir: brandedDir, old: 'eaf6a2eb-cff5-4ba7-bc03-af4059c31f12.jpg', new: 'digital-handheld-fans.jpg', title: 'Digital Handheld Fans', category: 'Branded Gift' },
    { dir: brandedDir, old: 'f2723a3a-7924-4fc3-95a2-bb2a02c9de12.jpg', new: 'pichwai-cow-tray.jpg', title: 'Pichwai Cow Tray', category: 'Branded Gift' },
    { dir: brandedDir, old: 'f982c686-7cae-40fc-a7e7-5b897e0c6d83.jpg', new: 'color-changing-alarm-clock.jpg', title: 'Color Changing Alarm Clock', category: 'Branded Gift' },

    // Promotional
    { dir: promotionalDir, old: '07f92044-0e59-43e2-b25d-8a0d2ac9a326.jpg', new: 'floral-mugs-set.jpg', title: 'Floral Mugs Set', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: '0b0399d6-4ae4-443e-ad28-761a6fa7e23c.jpg', new: 'quote-wall-hangings.jpg', title: 'Quote Wall Hangings', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: '19ca5957-72f3-4480-9f50-3078292ea615.jpg', new: 'round-wall-plates.jpg', title: 'Round Wall Plates', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: '27295195-2b1e-4356-9c9a-1819c1ce08ab.jpg', new: 'jute-drawstring-bags.jpg', title: 'Jute Drawstring Bags', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: '27a892b0-1710-410b-b830-e54e9d098447.jpg', new: 'wooden-key-holders.jpg', title: 'Wooden Key Holders', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: '2acdd342-3afe-45f9-8118-35a1a1033e4c.jpg', new: 'printed-jute-bags.jpg', title: 'Printed Jute Bags', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: '59c98362-d531-414c-851d-6adcf9d152ce.jpg', new: 'designer-wall-clocks.jpg', title: 'Designer Wall Clocks', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: '61621979-975e-4002-a350-8e458c8410d1.jpg', new: 'custom-photo-frames.jpg', title: 'Custom Photo Frames', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: '66583856-7508-42c9-96ec-5d946b4131f6.jpg', new: 'lunch-box-sets.jpg', title: 'Lunch Box Sets', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: '6db389be-8a54-4088-b35f-ddaa9f731d30.jpg', new: 'insulated-lunch-bags.jpg', title: 'Insulated Lunch Bags', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: '7c77371b-90ed-4632-a21e-9aa13a06cda3.jpg', new: 'stainless-steel-bottles.jpg', title: 'Stainless Steel Bottles', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: '850114cc-08a4-424c-a0bf-2ac41a26851a.jpg', new: 'canvas-tote-bags.jpg', title: 'Canvas Tote Bags', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: '8ad8b88d-8ad1-4fd9-95c9-fe8c8ade606e.jpg', new: 'metallic-water-bottles.jpg', title: 'Metallic Water Bottles', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: 'b06994d3-8ed7-4fb6-9fa0-e7276093d0af.jpg', new: 'ceramic-coffee-mugs.jpg', title: 'Ceramic Coffee Mugs', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: 'b7147808-db97-4257-b482-0504d6809b1a.jpg', new: 'bamboo-desk-organizers.jpg', title: 'Bamboo Desk Organizers', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: 'bc073f27-2d64-44ec-adf7-3582c120e4e9.jpg', new: 'leather-notebooks.jpg', title: 'Leather Notebooks', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: 'c73c202d-46e5-4f9a-83de-e77ff226be8d.jpg', new: 'portable-chargers.jpg', title: 'Portable Chargers', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: 'cdfbc5b8-d214-4f60-83e5-932efa9ffb2c.jpg', new: 'wireless-earbuds.jpg', title: 'Wireless Earbuds', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: 'd56fe38e-75ec-42e2-956a-0e50a7ef5196.jpg', new: 'bluetooth-speakers.jpg', title: 'Bluetooth Speakers', category: 'Promotional Gifts' },
    { dir: promotionalDir, old: 'dd8a7be2-ebd2-42f8-be37-11a160e58bd0.jpg', new: 'smart-fitness-bands.jpg', title: 'Smart Fitness Bands', category: 'Promotional Gifts' }
];

let generatedProducts = [];
let idCounter = 100;

for (const m of mappings) {
    const oldPath = path.join(m.dir, m.old);
    const newPath = path.join(m.dir, m.new);
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        console.log("Renamed " + m.old + " to " + m.new);
    } else if (fs.existsSync(newPath)) {
        console.log("File " + m.new + " already exists.");
    } else {
        console.log("File NOT FOUND: " + oldPath);
        continue;
    }

    let href = '';
    let relImgPath = '';
    if (m.category === 'Corporate Studio') {
        href = '/corporate';
        relImgPath = "/assets/images/corporate/" + m.new;
    } else if (m.category === 'Branded Gift') {
        href = '/collections/branded';
        relImgPath = "/assets/images/branded/" + m.new;
    } else if (m.category === 'Promotional Gifts') {
        href = '/collections/promotional';
        relImgPath = "/assets/images/promotional/" + m.new;
    }

    const idStr = "new-" + m.category.replace(/[^a-zA-Z]/g, '').toLowerCase() + "-" + (idCounter++);

    const newProduct = [
        "    {",
        '        id: "' + idStr + '",',
        '        title: "' + m.title + '",',
        '        subtitle: "Premium ' + m.title + '",',
        '        description: "A premium quality ' + m.title.toLowerCase() + ' perfect for your gifting needs.",',
        '        img: "' + relImgPath + '",',
        '        category: "' + m.category + '",',
        '        href: "' + href + '"',
        "    }"
    ].join("\n");
    generatedProducts.push(newProduct);
}

const productsContent = fs.readFileSync(productsFile, 'utf8');

// The file ends with "    }\n];\n"
// We want to replace "}\n];" with "},\n" + generatedProducts + "\n];"
// Let's find the last index of "];"
const lastIndex = productsContent.lastIndexOf('];');
if (lastIndex !== -1) {
    const before = productsContent.substring(0, lastIndex).trimEnd();
    // before will end with "} " or "}" ideally
    const newContent = before + ",\n" + generatedProducts.join(",\n") + "\n];\n";
    fs.writeFileSync(productsFile, newContent, 'utf8');
    console.log("Successfully appended new products to src/data/products.ts");
} else {
    console.log("Failed to find end of allProducts array in products.ts");
}
