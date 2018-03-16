const prompt = require('inquirer').prompt;
const ProjectsDAO = require('../dao/projects-dao');

module.exports = {
  chooseProject () {
    return ProjectsDAO.getProjects()
      .then(projects => prompt({
        type: 'list',
        name: 'projectId',
        message: 'Choose project: ',
        choices: projects.map(project => ({ value: project.id, name: project.name }))
      }))
      .then(({ projectId }) => projectId)
  }
};
