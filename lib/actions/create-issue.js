const IssuesDAO = require('../dao/IssuesDAO');
const ProjectsInquirer = require('../inquirer/ProjectsInquirer');
const IssuesInquirer = require('../inquirer/IssuesInquirer');
const PrintUtils = require('../utils/PrintUtils');

module.exports = {
  description: 'Create new issue',
  props: [],
  run () {
    return ProjectsInquirer
      .chooseProject()
      .then(IssuesInquirer.getIssueParameters)
      .then(IssuesDAO.createIssue)
      .then(({ key }) => PrintUtils.printLine(`Issue '${key}' successfully created`, 'green'));
  }
};