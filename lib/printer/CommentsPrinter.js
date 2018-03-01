const PrintUtils = require('../utils/PrintUtils');

module.exports = {
  printComments (comments/*: Array<Comment>*/) {
    if (comments.length) {
      PrintUtils.printField('Last comment details', comments[comments.length - 1].updateTimeInfo, 'green');

      PrintUtils.printNewLine();
      comments.forEach((comment, index ) => {
        PrintUtils.printLine(`${comment.author} - ${comment.content}`, index % 2 ? 'magenta' : 'blue');
        PrintUtils.printNewLine();
      })
    }
  }
};
