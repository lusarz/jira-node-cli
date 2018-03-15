const clipboardy = require('clipboardy');
const ConfigurationUtils = require('../utils/ConfigurationUtils');
const { API_URL } = ConfigurationUtils.readConfiguration();

module.exports = {
  description: 'Copy issue link to clipboard',
  props: ['issueName'],
  run (issueName) {
    return clipboardy.write(`${API_URL}/browse/${issueName}`)
  }
};
