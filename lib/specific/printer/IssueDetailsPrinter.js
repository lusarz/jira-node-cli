const Printer = require('../../core/printer/index');
const moment = require('moment');

class IssuePrinter {
  static print (issue) {
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
}

module.exports = IssuePrinter;
