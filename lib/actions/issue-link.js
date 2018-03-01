const clipboardy = require('clipboardy');
const ConfigurationUtils = require('../utils/ConfigurationUtils');
const { API_URL } = ConfigurationUtils.readConfiguration();

module.exports = {
  description: 'Copy issue link to clipboard',
  props: ['issueName'],
  print: function () {},
  fetch (name) {
    return Promise.resolve(clipboardy.writeSync(`${API_URL}/browse/${name}`))
  }
};
