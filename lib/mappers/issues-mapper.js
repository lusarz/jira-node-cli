const CommentsMapper = require('./comments-mapper');

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
    };

    return issue;
  },

  mapIssueDetails (serverIssue) {
    const issue/*: IssueDetails*/ = IssueMapper.mapIssue(serverIssue);
    issue.commentsCount = serverIssue.fields.comment.total;
    issue.comments = (serverIssue.fields.comment.comments || []).map(CommentsMapper.mapComment);
    return issue;
  },

  mapIssues ({ issues }) {
    return issues.map(IssueMapper.mapIssue);
  }
};

module.exports = IssueMapper;
