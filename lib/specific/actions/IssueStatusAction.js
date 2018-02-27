const AbstractAction = require('../../core/actions/AbstractAction');
const IssuesDAO = require('../dao/IssuesDAO');

class IssueStatusAction extends AbstractAction {
  constructor (issueName) {
    super('IssueStatusPrinter');
    this.issueName = issueName;
  }

  fetch () {
    return IssuesDAO.findIssueByName(this.issueName);
  }
}

IssueStatusAction.COMMAND = 'issue-status [name]';
IssueStatusAction.DESCRIPTION = 'Show issue status';

module.exports = IssueStatusAction;
