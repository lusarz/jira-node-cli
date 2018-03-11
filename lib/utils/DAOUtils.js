const axios = require('axios');
const ConfigurationUtils = require('./ConfigurationUtils');
const ErrorHandleUtils = require('./ErrorHandleUtils');
const { TOKEN, API_URL } = ConfigurationUtils.readConfiguration();


const headers = {
  'Authorization': 'Basic ' + TOKEN
};

function buildUrl (url) {
  return `${API_URL}/rest/api/latest${url}`;
}

function readDataFromResponse (response) {
  // console.log(response.data);
  return response.data;
}

module.exports = {
  fetch (url) {
    return axios
      .get(buildUrl(url), { headers })
      .then(readDataFromResponse)
      .catch(ErrorHandleUtils.handleResponseError);
  },

  post (url, data) {
    return axios
      .post(buildUrl(url), data, { headers })
      .then(readDataFromResponse)
      .catch(ErrorHandleUtils.handleResponseError);
  }
};
