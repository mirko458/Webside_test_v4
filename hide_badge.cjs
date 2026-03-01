const fs = require('fs');
let content = fs.readFileSync('src/components/sections/hero.tsx', 'utf8');

const regex = /<Reveal delay=\{0\.1\}>[\s\S]*?<\/Reveal>/;
content = content.replace(regex, '{/* Badge hidden per request */}');

fs.writeFileSync('src/components/sections/hero.tsx', content);
