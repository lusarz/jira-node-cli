const AbstractAction = require('../../core/actions/AbstractAction');
const IssuesDAO = require('../dao/IssuesDAO');


class CurrentSprintIssuesAction extends AbstractAction {
  constructor () {
    super('IssuesWithAssigneePrinter');
  }

  fetch () {
    return IssuesDAO.findCurrentSprintIssues()
  }
}

CurrentSprintIssuesAction.COMMAND = 'sprint';
CurrentSprintIssuesAction.DESCRIPTION = 'Show current sprint issues';

module.exports = CurrentSprintIssuesAction;
