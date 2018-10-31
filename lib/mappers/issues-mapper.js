const CommentsMapper = require('./comments-mapper');
const ConfigurationUtils = require('../utils/configuration-utils');
const { API_URL } = ConfigurationUtils.readConfiguration();

const IssueMapper = {
  mapIssue (serverIssue) {
    const assignee = serverIssue.fields.assignee && serverIssue.fields.assignee.key;

    const issue/*: Issue*/ = {
      statusColor: serverIssue.fields.status.statusCategory.colorName.split('-')[0],
      statusName: serverIssue.fields.status.name,
      key: serverIssue.key,
      summary: serverIssue.fields.summary,
      assignee,
      summaryColor: assignee ? 'white' : 'green',
      link: `${API_URL}/browse/${serverIssue.key}`
    };

    return issue;
  },

  mapIssueDetails (serverIssue) {
    const issue/*: IssueDetails*/ = IssueMapper.mapIssue(serverIssue);
    if (serverIssue.fields.comment) {
      issue.commentsCount = serverIssue.fields.comment.total;
      issue.comments = (serverIssue.fields.comment.comments || []).map(CommentsMapper.mapComment);
    }
    if (serverIssue.fields.subtasks) {
      issue.children = serverIssue.fields.subtasks.map(IssueMapper.mapIssueDetails);
    } else {
      issue.children = [];
    }
    issue.description = serverIssue.fields.description;
    return issue;
  },

  mapIssues ({ issues }) {
    return issues.map(IssueMapper.mapIssue);
  }
};

module.exports = IssueMapper;
