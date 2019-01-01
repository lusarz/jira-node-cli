module.exports = {
  description: 'Open issue in the browser',
  props: ['issueName'],
  async run (issueName) {
    const BrowserUtils = require('../utils/browser-utils');
    const ConfigurationUtils = require('../utils/configuration-utils');
    const { API_URL } = ConfigurationUtils.readConfiguration();

    return BrowserUtils.openUrl(`${API_URL}/browse/${issueName}`)
  }
};
