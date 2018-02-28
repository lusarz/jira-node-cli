const clipboardy = require('clipboardy');
const ConfigurationUtils = require('../utils/ConfigurationUtils');
const { API_URL } = ConfigurationUtils.readConfiguration();

module.exports = {
  command: 'issue-link [name]',
  description: 'Copy to clipboard link to issue',
  print: function () {},
  fetch (name) {
    return Promise.resolve(clipboardy.writeSync(`${API_URL}/browse/${name}`))
  }
};
