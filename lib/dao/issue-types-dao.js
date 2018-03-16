const DAOUtils = require('../utils/dao-utils');
const IssueTypesMapper = require('../mappers/issue-types-mapper');

module.exports = {
  getIssueTypesExcludingSubtasks (projectId) {
    return DAOUtils
      .fetch(`/project/${projectId}`)
      .then(({ issueTypes }) => issueTypes.filter(issue => !issue.subtask))
      .then(IssueTypesMapper.mapIssueTypes);
  }
};
