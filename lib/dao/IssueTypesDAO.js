const DAOUtils = require('../utils/DAOUtils');
const IssueTypesMapper = require('../mappers/IssueTypesMapper');

module.exports = {
  getIssueTypesExcludingSubtasks (projectId) {
    return DAOUtils
      .fetch(`/project/${projectId}`)
      .then(({ issueTypes }) => issueTypes.filter(issue => !issue.subtask))
      .then(IssueTypesMapper.mapIssueTypes);
  }
};
