const Printer = require('../utils/PrintUtils');
const StringUtils = require('../utils/StringUtils');
const moment = require('moment');

module.exports = {
  printIssues ({ issues }) {
    issues.forEach(module.exports.printIssue); // Not sure why `this.printIssue` cannot be used
  },

  printIssueWithAssignee (issue) {
    const statusColor = issue.fields.status.statusCategory.colorName.split('-')[0];
    Printer.printNoNewLine(StringUtils.fillWithSpaces(`[${issue.fields.status.name}]`, 20), statusColor);

    const assignee = issue.fields.assignee && issue.fields.assignee.key;
    Printer.print(issue.key + ': ' + issue.fields.summary + ' - ' + (assignee || 'not assigned'), assignee ? 'white' : 'green');
  },

  printIssuesWithAssignee ({ issues }) {
    issues.forEach(module.exports.printIssueWithAssignee);
  },

  printIssue (issue) {
    const statusColor = issue.fields.status.statusCategory.colorName.split('-')[0];
    Printer.printNoNewLine(StringUtils.fillWithSpaces(`[${issue.fields.status.name}]`, 20), statusColor);
    Printer.print(issue.key + ': ' + issue.fields.summary);
  },

  printIssueStatus (issue) {
    const statusColor = issue.fields.status.statusCategory.colorName.split('-')[0];
    Printer.print(`[${issue.fields.status.name}]`, statusColor);
  },

  printIssueDetails (issue) {
    Printer.print(issue.key + ': ' + issue.fields.summary);

    const statusColor = issue.fields.status.statusCategory.colorName.split('-')[0];
    Printer.print(`[${issue.fields.status.name}]`, statusColor);

    const commentData = issue.fields.comment;
    Printer.printField('Comments', commentData.total, 'green');

    if (commentData.comments.length) {
      const lastComment = commentData.comments[ commentData.comments.length - 1];
      const lastCommentDate = moment(lastComment.updated);
      Printer.printField('Last comment details', lastCommentDate.format('DD.MM.YYYY, h:mm:ss') + `(${lastCommentDate.fromNow()})`, 'green');

      Printer.print('');
      let index = 0;
      commentData.comments.forEach(comment => {
        index++;
        Printer.print(`${comment.author.name} - ${comment.body}`, index % 2 ? 'magenta' : 'blue');
      })
    }
  }
};
