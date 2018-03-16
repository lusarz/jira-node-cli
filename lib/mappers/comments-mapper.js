const DateUtils = require('../utils/date-utils');

const CommentsMapper = {
  mapComment (serverComment) {

    const comment/*: Comment*/ = {
      author: serverComment.author.name,
      content: serverComment.body,
      updateTimeInfo: DateUtils.formatDateTimeWithFromNow(serverComment.updated)
    };
    return comment;
  }
};

module.exports = CommentsMapper;
