const fs = require('fs');

module.exports = {
  readFile (path) {
    return fs.readFileSync(path);
  },

  fileExists (path) {
    return fs.existsSync(path);
  },

  saveFile (path, content) {
    fs.writeFileSync(path, content);
  }
};
