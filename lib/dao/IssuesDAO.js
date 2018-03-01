const DAOUtils = require('../utils/DAOUtils');
const IssuesMapper = require('../mappers/IssuesMapper');

module.exports = {
  findIssueByName (issueName) {
    return DAOUtils
      .fetch(`/issue/${issueName}`)
      .then(IssuesMapper.mapIssueDetails);
  },

  fetchIssuesUsingJQL (jql) {
    return DAOUtils
      .fetch(`/search?jql=${jql}`)
      .then(IssuesMapper.mapIssues);
  }
};
