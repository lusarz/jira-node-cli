const JSONUtils = require('./JSONUtils');
const FileUtils = require('./FileUtils');
const path = require('path');


const CONFIGURATION_FILE_PATH = path.join(process.env.HOME, '.jirarc');

module.exports = {
  configurationFileExists () {
    return FileUtils.fileExists(CONFIGURATION_FILE_PATH);
  },

  readConfiguration () {
    return JSONUtils.readJSONFile(CONFIGURATION_FILE_PATH);
  },

  saveConfiguration (configuration) {
    JSONUtils.saveAsJSONFile(CONFIGURATION_FILE_PATH, configuration);
  }
};
