const path = require('path');

const srcDirEslintCommand = (filenames) =>
  `next lint --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')} --dir src`;

module.exports = {
  '*.{ts,tsx}': [srcDirEslintCommand, 'prettier --write'],
};
