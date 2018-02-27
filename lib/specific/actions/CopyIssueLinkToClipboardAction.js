const clipboardy = require('clipboardy');
const ConfigurationUtils = require('../../core/utils/ConfigurationUtils');
const { API_URL } = ConfigurationUtils.readConfiguration();

const AbstractAction = require('../../core/actions/AbstractAction');


class MyDeployedToStageIssuesAction extends AbstractAction {
  constructor (name) {
    super();
    this.link = `${API_URL}/browse/${name}`;
  }

  fetch () {
    return Promise.resolve(clipboardy.writeSync(this.link));
  }
}

MyDeployedToStageIssuesAction.COMMAND = 'issue-link [name]';
MyDeployedToStageIssuesAction.DESCRIPTION = 'Copy to clipboard link to issue';

module.exports = MyDeployedToStageIssuesAction;
