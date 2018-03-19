const DAOUtils = require('../utils/dao-utils');
const ProjectsMapper = require('../mappers/projects-mapper');

module.exports = {
  getProjects () {
    return DAOUtils
      .fetch(`/project`)
      .then(ProjectsMapper.mapProjects);
  },

  // TODO @saldi It's not used, how anyone could leave it? I'd be grateful if you remove this method
  getProject (projectId) {
    return DAOUtils.fetch(`/project/${projectId}`);
  }
};
