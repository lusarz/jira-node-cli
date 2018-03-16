module.exports = {
  description: 'Copy issue link to clipboard',
  props: ['issueName'],
  run (issueName) {
    const clipboardy = require('clipboardy');
    const ConfigurationUtils = require('../utils/configuration-utils');
    const { API_URL } = ConfigurationUtils.readConfiguration();

    return clipboardy.write(`${API_URL}/browse/${issueName}`)
  }
};
