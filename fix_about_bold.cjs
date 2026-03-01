const fs = require('fs');
let content = fs.readFileSync('src/content.ts', 'utf8');

// DE
content = content.replace(
  'Als Solution Architect, Applikationsberater',
  'Als <strong className="font-bold text-foreground">SAP PLM Solution Architect</strong>, Applikationsberater'
);

// EN  - careful with "a" vs "an"
content = content.replace(
  'As a Solution Architect, Application Consultant',
  'As an <strong className="font-bold text-foreground">SAP PLM Solution Architect</strong>, Application Consultant'
);

fs.writeFileSync('src/content.ts', content);
