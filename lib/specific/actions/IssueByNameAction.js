const AbstractAction = require('../../core/actions/AbstractAction');
const IssuesDAO = require('../dao/IssuesDAO');


class IssueByNameAction extends AbstractAction {
  constructor (issueName) {
    super('IssueDetailsPrinter');
    this.issueName = issueName;
  }

  fetch () {
    return IssuesDAO.findIssueByName(this.issueName);
  }
}

IssueByNameAction.COMMAND = 'issue [name]';
IssueByNameAction.DESCRIPTION = 'Show issue details';

module.exports = IssueByNameAction;
