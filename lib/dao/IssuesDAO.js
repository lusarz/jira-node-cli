const DAOUtils = require('../utils/DAOUtils');
const IssuesMapper = require('../mappers/IssuesMapper');

module.exports = {
  findIssueByName (issueName) {
    return DAOUtils
      .fetch(`/issue/${issueName}`)
      .then(IssuesMapper.mapIssueDetails)
  },

  createIssue (name, description, issueTypeId, projectId) {
    return DAOUtils.post('/issue', {
      fields: {
        project: { id: projectId },
        summary: name,
        description,
        issuetype: { id: issueTypeId }
      }
    })
  },

  fetchIssuesUsingJQL (jql) {
    return DAOUtils
      .fetch(`/search?jql=${jql}`)
      .then(IssuesMapper.mapIssues);
  }
};
