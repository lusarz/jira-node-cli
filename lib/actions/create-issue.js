module.exports = {
  description: 'Create new issue',
  props: [],
  run () {
    const IssuesDAO = require('../dao/issues-dao');
    const ProjectsInquirer = require('../inquirer/projects-inquirer');
    const IssuesInquirer = require('../inquirer/issues-inquirer');
    const PrintUtils = require('../utils/print-utils');

    return ProjectsInquirer
      .chooseProject()
      .then(IssuesInquirer.getIssueParameters)
      .then(IssuesDAO.createIssue)
      .then(({ key }) => PrintUtils.printLine(`Issue '${key}' successfully created`, 'green'));
  }
};
