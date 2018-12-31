module.exports = {
  description: 'Create new issue',
  props: [],
  async run () {
    const IssuesDAO = require('../dao/issues-dao');
    const ProjectsInquirer = require('../inquirer/projects-inquirer');
    const IssuesInquirer = require('../inquirer/issues-inquirer');
    const PrintUtils = require('../utils/print-utils');

    const projectId = await ProjectsInquirer.chooseProject();
    const parameters = await IssuesInquirer.getIssueParameters(projectId);
    const issue = await IssuesDAO.createIssue(parameters);
    PrintUtils.printLine(`Issue '${issue.key}' successfully created`, 'green')
  }
};
