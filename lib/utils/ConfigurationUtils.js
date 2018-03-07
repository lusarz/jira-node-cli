const JSONUtils = require('./JSONUtils');
const FileUtils = require('./FileUtils');
const path = require('path');
const inquirer = require('inquirer');


const CONFIGURATION_FILE_PATH = path.join(process.env.HOME, '.jirarc');

module.exports = {
  CONFIGURATION_FILE_PATH,

  configurationFileExists () {
    return FileUtils.fileExists(CONFIGURATION_FILE_PATH);
  },

  readConfiguration () {
    return JSONUtils.readJSONFile(CONFIGURATION_FILE_PATH);
  },

  saveConfiguration (configuration) {
    JSONUtils.saveAsJSONFile(CONFIGURATION_FILE_PATH, configuration);
  },

  promptUserForConfigurationProperties () {
    console.log('You need to provide a few properties to properly use tool:');
    return inquirer
      .prompt([
        {
          type: ' input',
          name: 'host',
          message: 'Host: ',
          default: 'example.atlassian.net'
        }, {
          type: 'input',
          name: 'username',
          message: 'User name or email :'
        }, {
          type: 'password',
          name: 'password',
          message: 'Password:'
        }
      ])
      .then(({ host, username, password }) => {
        return {
          API_URL: ['https', '://', host].join(''),
          TOKEN: Buffer.from([username, password].join(':')).toString('base64')
        };

      });
  }
};
