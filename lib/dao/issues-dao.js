const DAOUtils = require('../utils/dao-utils');
const IssuesMapper = require('../mappers/issues-mapper');

module.exports = {
  async findIssueByName (issueName) {
    return IssuesMapper.mapIssueDetails(await DAOUtils.fetch(`/issue/${issueName}`));
  },

  createIssue ({ summary, description, issueTypeId, projectId }) {
    return DAOUtils.post('/issue', {
      summary,
      description,
      issuetype: { id: issueTypeId },
      project: { id: projectId },
    })
  },

  async fetchIssuesUsingJQL (jql) {
    return IssuesMapper.mapIssues(await DAOUtils.fetch(`/search?jql=${jql}`));
  }
};
