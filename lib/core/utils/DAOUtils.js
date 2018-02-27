const axios = require('axios');
const ConfigurationUtils = require('../utils/ConfigurationUtils');
const { TOKEN, API_URL } = ConfigurationUtils.readConfiguration();

function fetch (url) {
  const headers = {
    'Authorization': 'Basic ' + TOKEN
  };

  return axios
    .get(`${API_URL}/rest/api/latest${url}`, { headers })
    .then(response => response.data);
}

module.exports = {
  fetch
};
