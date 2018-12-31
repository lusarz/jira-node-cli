const DAOUtils = require('../utils/dao-utils');
const IssuesMapper = require('../mappers/issues-mapper');

module.exports = {
  async findIssueByName (issueName) {
    const issue = await DAOUtils.fetch(`/issue/${issueName}`);
    return IssuesMapper.mapIssueDetails(issue);
  },

  async createIssue ({ summary, description, issueTypeId, projectId }) {
    return DAOUtils.post('/issue', {
      summary,
      description,
      issuetype: { id: issueTypeId },
      project: { id: projectId },
    })
  },

  async fetchIssuesUsingJQL (jql) {
    const { issues } = await DAOUtils.fetch(`/search?jql=${jql}`);
    return issues.map(IssuesMapper.mapIssue);
  }
};
