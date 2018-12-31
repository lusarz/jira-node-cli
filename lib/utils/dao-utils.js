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
  async fetch (url) {
    const axios = require('axios');
    const ErrorHandleUtils = require('./error-handle-utils');

    try {
      const response = await axios.get(buildUrl(url), buildRequestParams());
      return readDataFromResponse(response);
    } catch (error) {
      ErrorHandleUtils.handleResponseError(error);
    }
  },

  async post (url, fields) {
    const axios = require('axios');
    const ErrorHandleUtils = require('./error-handle-utils');

    try {
      const response = await axios.post(buildUrl(url), { fields }, buildRequestParams());
      return readDataFromResponse(response);
    } catch (error) {
      ErrorHandleUtils.handleResponseError(error);
    }
  }
};

module.exports = DAOUtils;
