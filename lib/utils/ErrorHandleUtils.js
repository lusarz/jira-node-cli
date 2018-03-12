const ConfigurationUtils = require('./ConfigurationUtils');

// TODO: refactor error handle
// TODO: ask for new credentials when 401 returned
const ERROR_MESSAGES = {
  '401': `Seems like your credentials stored in '${ConfigurationUtils.CONFIGURATION_FILE_PATH}' are not valid. Please remove this file and run jira once again.`
};


module.exports = {
  handleResponseError (err) {
    const message = ERROR_MESSAGES[err.response.status];
    if (message) {
      console.log(message);
    } else {
      console.log(`JIRA respond with '${err.response.status} ${err.response.statusText}' status.`);
      if (err.response.data.errorMessages && err.response.data.errorMessages.length) {
        console.log('ERROR MESSAGE:');
        console.log(err.response.data.errorMessages[0]);
      }
      console.log('Please try again later');
    }
    process.exit();
  }
};
