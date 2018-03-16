const FileUtils = require('./file-utils');

module.exports = {
  readJSONFile: path => JSON.parse(FileUtils.readFile(path)),
  saveAsJSONFile: (path, object) => FileUtils.saveFile(path, JSON.stringify(object, null, 2))
};
