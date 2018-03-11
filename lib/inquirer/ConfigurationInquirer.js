const Inquirer = require('inquirer');

module.exports = {
  provideConfigurationParameters () {
    return Inquirer
      .prompt([
        {
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
        }
      ])
  }
};
