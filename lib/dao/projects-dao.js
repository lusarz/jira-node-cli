const DAOUtils = require('../utils/dao-utils');
const ProjectsMapper = require('../mappers/projects-mapper');

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
