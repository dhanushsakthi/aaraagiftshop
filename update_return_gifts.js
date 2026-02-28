const fs = require('fs');
const path = require('path');

const returnGiftDir = path.join(__dirname, 'public/assets/images/return_gift');
const productsFile = path.join(__dirname, 'src/data/products.ts');

const items = [
    { file: 'assorted-enamel-dibbi-collection.jpg', title: 'Assorted Enamel Dibbi Collection' },
    { file: 'divine-statue-keepsakes.jpg', title: 'Divine Statue Keepsakes' },
    { file: 'ganesha-enamel-dibbi-gold.jpg', title: 'Ganesha Enamel Dibbi Gold' },
    { file: 'lotus-enamel-diya-purple.jpg', title: 'Lotus Enamel Diya Purple' },
    { file: 'lotus-enamel-diya-yellow.jpg', title: 'Lotus Enamel Diya Yellow' },
    { file: 'modern-insulated-tiffin-set.jpg', title: 'Modern Insulated Tiffin Set' },
    { file: 'peacock-blossom-tin-box.jpg', title: 'Peacock Blossom Tin Box' },
    { file: 'peacock-enamel-dibbi-classic.jpg', title: 'Peacock Enamel Dibbi Classic' },
    { file: 'peacock-enamel-dibbi-gold.jpg', title: 'Peacock Enamel Dibbi Gold' },
    { file: 'peacock-enamel-dibbi-royal.jpg', title: 'Peacock Enamel Dibbi Royal' },
    { file: 'peacock-enamel-dibbi-single.jpg', title: 'Peacock Enamel Dibbi Single' },
    { file: 'peacock-enamel-dibbi-trio.jpg', title: 'Peacock Enamel Dibbi Trio' },
    { file: 'pink-polka-enamel-box.jpg', title: 'Pink Polka Enamel Box' },
    { file: 'royal-peacock-gold-diya-set.jpg', title: 'Royal Peacock Gold Diya Set' },
    { file: 'soup-bowl-combo-blue.jpg', title: 'Soup Bowl Combo Blue' }
];

let generatedProducts = [];
let idCounter = 153;

for (const item of items) {
    const filePath = path.join(returnGiftDir, item.file);
    if (!fs.existsSync(filePath)) {
        console.log("File NOT FOUND: " + filePath);
        continue;
    }

    const category = 'Wedding Return Gifts';
    const href = '/collections/wedding';
    const relImgPath = '/assets/images/return_gift/' + item.file;
    const idStr = "new-weddingreturngifts-" + (idCounter++);

    const newProduct = [
        "    {",
        '        id: "' + idStr + '",',
        '        title: "' + item.title + '",',
        '        subtitle: "Premium ' + item.title + '",',
        '        description: "A premium quality ' + item.title.toLowerCase() + ' perfect for your gifting needs.",',
        '        img: "' + relImgPath + '",',
        '        category: "' + category + '",',
        '        href: "' + href + '"',
        "    }"
    ].join("\n");
    generatedProducts.push(newProduct);
}

const productsContent = fs.readFileSync(productsFile, 'utf8');
const lastIndex = productsContent.lastIndexOf('];');
if (lastIndex !== -1 && generatedProducts.length > 0) {
    const before = productsContent.substring(0, lastIndex).trimEnd();
    const newContent = before + ",\n" + generatedProducts.join(",\n") + "\n];\n";
    fs.writeFileSync(productsFile, newContent, 'utf8');
    console.log("Successfully appended " + generatedProducts.length + " new return gifts to src/data/products.ts");
} else {
    console.log("Failed to find end of allProducts array or no products to append");
}
