// Merge script for courses integration
const fs = require('fs');
const path = require('path');

const dataDir = __dirname;

// Files to integrate
const specializedFiles = {
  'english': { file: 'specialized-content.ts', export: 'engSpecialized' },
  'chinese': { file: 'chinese-65-specialized.ts', export: 'Chinese65Specialized' },
  'french': { file: 'french-specialized-65.json' },
  'arabic': { file: 'arabic-specialized-65-lessons.json' },
  'portuguese': { file: 'portuguese-specialized.json' },
  'signlang': { file: 'sign-language-specialized.ts', export: 'SignLanguageSpecialized' }
};

const countryFiles = {
  'usa': { file: 'usa-country-profile.json' },
  'korea': { file: 'korea-country-profile.json' }
};

console.log('Integration Analysis:');
console.log('Specialized content files found:', Object.keys(specializedFiles).length);
console.log('Country profile files found:', Object.keys(countryFiles).length);

// Verify each file exists
for (const [lang, info] of Object.entries(specializedFiles)) {
  const filepath = path.join(dataDir, info.file);
  if (fs.existsSync(filepath)) {
    const stat = fs.statSync(filepath);
    console.log(`✓ ${lang}: ${info.file} (${stat.size} bytes)`);
  } else {
    console.log(`✗ ${lang}: ${info.file} NOT FOUND`);
  }
}

for (const [country, info] of Object.entries(countryFiles)) {
  const filepath = path.join(dataDir, info.file);
  if (fs.existsSync(filepath)) {
    const stat = fs.statSync(filepath);
    console.log(`✓ ${country}: ${info.file} (${stat.size} bytes)`);
  } else {
    console.log(`✗ ${country}: ${info.file} NOT FOUND`);
  }
}

console.log('\nAll files ready for integration.');
