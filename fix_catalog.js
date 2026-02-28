const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src/data/products.ts');

let content = fs.readFileSync(file, 'utf8');

// Replace the literal \n characters with actual newlines
content = content.replace(/\\n/g, '\n');

// The file currently has:
//     },
// ];
// 
// ,
//     {
//         id: "new-corporatestudio-100",

content = content.replace(/];\s*,\s*\{/g, '},\n    {');

fs.writeFileSync(file, content, 'utf8');
console.log("Fixed products.ts formatting");
