const DAOUtils = require('../utils/DAOUtils');
const ProjectsMapper = require('../mappers/ProjectsMapper');

module.exports = {
  getProjects () {
    return DAOUtils
      .fetch(`/project`)
      .then(ProjectsMapper.mapProjects);
  },

  getProject (projectId) {
    return DAOUtils.fetch(`/project/${projectId}`);
  }
};
