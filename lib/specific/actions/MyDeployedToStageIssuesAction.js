const AbstractAction = require('../../core/actions/AbstractAction');
const IssuesDAO = require('../dao/IssuesDAO');


class MyDeployedToStageIssuesAction extends AbstractAction {
  constructor () {
    super('IssuesWithAssigneePrinter');
  }

  fetch () {
    return IssuesDAO.findMyDeployedToStageIssues()
  }
}

MyDeployedToStageIssuesAction.COMMAND = 'my-stage';
MyDeployedToStageIssuesAction.DESCRIPTION = 'Show my deployed to stage issues';

module.exports = MyDeployedToStageIssuesAction;
