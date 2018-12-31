const DAOUtils = require('../utils/dao-utils');
const ProjectsMapper = require('../mappers/projects-mapper');

module.exports = {
  async getProjects () {
    const projects = await DAOUtils.fetch(`/project`);
    return projects.map(ProjectsMapper.mapProject);
  },

  async getProject (projectId) {
    return DAOUtils.fetch(`/project/${projectId}`);
  }
};
