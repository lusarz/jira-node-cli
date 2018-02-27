const AbstractAction = require('../../core/actions/AbstractAction');
const IssuesDAO = require('../dao/IssuesDAO');


class DeployedToStageIssuesAction extends AbstractAction {
  constructor () {
    super('IssuesWithAssigneePrinter');
  }

  fetch () {
    return IssuesDAO.findDeployedToStageIssues()
  }
}

DeployedToStageIssuesAction.COMMAND = 'stage';
DeployedToStageIssuesAction.DESCRIPTION = 'Show all deployed to stage issues';

module.exports = DeployedToStageIssuesAction;
