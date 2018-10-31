const prompt = require('inquirer').prompt;
const PrintUtils = require('../utils/print-utils');

module.exports = {
  getConfigurationParameters () {
    PrintUtils.printLine('Please provide configuration parameters:');
    return prompt([{
      type: 'input',
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
    }])
  }
};
