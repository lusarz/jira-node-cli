const Inquirer = require('inquirer');

module.exports = {
  chooseProject (projects) {
    return Inquirer
      .prompt([
        {
          type: 'list',
          name: 'projectKey',
          message: 'Choose project: ',
          choices: projects.map(project => ({ value: project.key, name: project.name }))
        }])
      .then(({ projectKey }) => projects.find(project => project.key === projectKey));
  }
};
