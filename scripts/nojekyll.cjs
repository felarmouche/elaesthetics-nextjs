const { writeFileSync, mkdirSync } = require('fs');
mkdirSync('out', { recursive: true });
writeFileSync('out/.nojekyll', '');
console.log('Created out/.nojekyll');