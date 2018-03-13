const CONFIGURATION_FILE_PATH = require('./ConfigurationUtils').CONFIGURATION_FILE_PATH;
const PrintUtils = require('./PrintUtils');

module.exports = {
  printUnexpectedError (err) {
    console.log('An unexpected error occurred during communication with JIRA: ');
    if (err.code || err.syscall || err.errno) {
      PrintUtils.printField('Code', err.code);
      PrintUtils.printField('Syscall', err.syscall);
      PrintUtils.printField('Errno', err.errno);
    } else {
      console.log(err);
    }
  },

  printStatus(response) {
    console.log(`JIRA respond with '${response.status} ${response.statusText}' status.`);
  },

  printInvalidCredentialsError () {
    console.log('Seems like your credentials are invalid');
    console.log(`Please remove '${CONFIGURATION_FILE_PATH}' file and run tool again`);
  },

  printErrorMessage (response) {
    console.log('Error message is: ' + response.data.errorMessages[0])
  }
};
