const prompt = require('inquirer').prompt;
const ProjectsDAO = require('../dao/projects-dao');

module.exports = {
  async chooseProject () {
    const projects = await ProjectsDAO.getProjects();

    const { projectId } = await prompt({
      type: 'list',
      name: 'projectId',
      message: 'Choose project: ',
      choices: projects.map(project => ({ value: project.id, name: project.name }))
    });

    return projectId;
  }
};
