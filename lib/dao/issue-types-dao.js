const DAOUtils = require('../utils/dao-utils');
const IssueTypesMapper = require('../mappers/issue-types-mapper');

module.exports = {
  async getIssueTypesExcludingSubtasks (projectId) {
    const { issueTypes } = await DAOUtils.fetch(`/project/${projectId}`);

    return issueTypes
      .filter(issue => !issue.subtask)
      .map(IssueTypesMapper.mapIssueType)
  }
};
