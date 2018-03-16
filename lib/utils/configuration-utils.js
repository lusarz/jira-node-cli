const JSONUtils = require('./json-utils');
const FileUtils = require('./file-utils');
const ConfigurationInquirer = require('../inquirer/configuration-inquirer');
const PrintUtils = require('./print-utils');
const path = require('path');
const toBase64 = require('./string-utils').toBase64;

const CONFIGURATION_FILE_PATH = path.join(process.env.HOME, '.jirarc');

function saveConfiguration ({ host, username, password }) {
  JSONUtils.saveAsJSONFile(CONFIGURATION_FILE_PATH, {
    API_URL: `https://${host}`,
    TOKEN: toBase64(`${username}:${password}`)
  })
}

function printWhereConfigurationStored () {
  PrintUtils.printLine(`Configuration JSON stored in '${CONFIGURATION_FILE_PATH}' file`, 'yellow')
}

const ConfigurationUtils = {
  CONFIGURATION_FILE_PATH,

  configurationFileExists: () => FileUtils.fileExists(CONFIGURATION_FILE_PATH),
  readConfiguration: () => JSONUtils.readJSONFile(CONFIGURATION_FILE_PATH),

  printConfigurationFile () {
    PrintUtils.printNewLine();
    PrintUtils.printJSON(ConfigurationUtils.readConfiguration());
    PrintUtils.printNewLine();
  },

  setupConfigurationFile () {
    return ConfigurationInquirer.getConfigurationParameters()
      .then(saveConfiguration)
      .then(ConfigurationUtils.printConfigurationFile)
      .then(printWhereConfigurationStored)
  }
};

module.exports = ConfigurationUtils;
