const fs = require('fs');

module.exports = {
  readFile: path => fs.readFileSync(path),
  fileExists: path => fs.existsSync(path),
  saveFile: (path, content) => fs.writeFileSync(path, content)
};
