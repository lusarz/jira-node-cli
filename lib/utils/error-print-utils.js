const ConfigurationUtils = require('./configuration-utils');
const PrintUtils = require('./print-utils');

module.exports = {
  printUnexpectedError (err) {
    PrintUtils.printLine('An unexpected error occurred during communication with JIRA, details: ', 'red');
    if (err.code || err.syscall || err.errno) {
      PrintUtils.printField('Code', err.code);
      PrintUtils.printField('Syscall', err.syscall);
      PrintUtils.printField('Errno', err.errno);
    } else {
      console.error(err);
    }
    PrintUtils.printNewLine();
    PrintUtils.printLine(`Please check your configuration file (${ConfigurationUtils.CONFIGURATION_FILE_PATH}):`, 'yellow');
    ConfigurationUtils.printConfigurationFile();
  },

  printStatus(response) {
    console.log(`JIRA respond with '${response.status} ${response.statusText}' status.`);
  },

  printInvalidCredentialsError () {
    console.log('Seems like your credentials are invalid');
    console.log(`Please remove '${ConfigurationUtils.CONFIGURATION_FILE_PATH}' file and run tool again`);
  },

  printErrorMessage (response) {
    console.log('Error message is: ' + response.data.errorMessages[0])
  }
};
