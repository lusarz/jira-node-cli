const DAOUtils = require('../utils/DAOUtils');

module.exports = {
  findIssueByName (issueName) {
    return DAOUtils.fetch(`/issue/${issueName}`)
  }
};
