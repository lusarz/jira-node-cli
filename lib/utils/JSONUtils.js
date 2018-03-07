const FileUtils = require('./FileUtils');

module.exports = {
  readJSONFile (path) {
    return JSON.parse(FileUtils.readFile(path));
  },

  saveAsJSONFile (path, object) {
    FileUtils.saveFile(path, JSON.stringify(object));
  }
};
