const ProjectsDAO = require('../dao/ProjectsDAO');
const IssueTypesDAO = require('../dao/IssueTypesDAO');
const IssuesDAO = require('../dao/IssuesDAO');
const ProjectsInquirer = require('../inquirer/ProjectsInquirer');
const IssuesInquirer = require('../inquirer/IssuesInquirer');
const PrintUtils = require('../utils/PrintUtils');

function run () {
  let projectId;

  return ProjectsDAO
    .getProjects()
    .then(ProjectsInquirer.chooseProject)
    .then(project => {
      projectId = project.id;
      return IssueTypesDAO.getIssueTypesExcludingSubtasks(project.id)
    })
    .then(IssuesInquirer.provideIssueParameters)
    .then(({ name, description, type }) => IssuesDAO.createIssue(name, description, type, projectId))
    .then(({ key }) => PrintUtils.printLine(`Issue '${key}' successfully created`, 'green'));
}

module.exports = { run };
