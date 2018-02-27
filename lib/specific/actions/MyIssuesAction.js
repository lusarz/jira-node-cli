const AbstractAction = require('../../core/actions/AbstractAction');
const IssuesDAO = require('../dao/IssuesDAO');


class MyIssuesAction extends AbstractAction {
  constructor () {
    super('IssuesWithAssigneePrinter');
  }

  fetch () {
    return IssuesDAO.findMyNotReleasedIssues()
  }
}

MyIssuesAction.COMMAND = 'my-not-released';
MyIssuesAction.DESCRIPTION = 'Show my not released issues';

module.exports = MyIssuesAction;
