const DAOUtils = require('../utils/DAOUtils');
const IssuesMapper = require('../mappers/IssuesMapper');

module.exports = {
  findIssueByName (issueName) {
    return DAOUtils
      .fetch(`/issue/${issueName}`)
      .then(IssuesMapper.mapIssueDetails)
  },

  createIssue ({ summary, description, issueTypeId, projectId }) {
    return DAOUtils.post('/issue', {
      summary,
      description,
      issuetype: { id: issueTypeId },
      project: { id: projectId },
    })
  },

  fetchIssuesUsingJQL (jql) {
    return DAOUtils
      .fetch(`/search?jql=${jql}`)
      .then(IssuesMapper.mapIssues);
  }
};
