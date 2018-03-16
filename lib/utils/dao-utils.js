const getConfiguration = () => require('../configuration');

function buildUrl (url) {
  return `${getConfiguration().API_URL}/rest/api/latest${url}`;
}

function buildRequestParams () {
  return { headers: { 'Authorization': `Basic ${getConfiguration().TOKEN}` } };
}

function readDataFromResponse (response) {
  // console.log(response.data);
  return response.data;
}

const DAOUtils = {
  fetch (url) {
    return require('axios')
      .get(buildUrl(url), buildRequestParams())
      .then(readDataFromResponse)
      .catch(require('./error-handle-utils').handleResponseError);
  },

  post (url, fields) {
    return require('axios')
      .post(buildUrl(url), { fields }, buildRequestParams())
      .then(readDataFromResponse)
      .catch(require('./error-handle-utils').handleResponseError);
  }
};

module.exports = DAOUtils;
