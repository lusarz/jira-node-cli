const ProjectMapper = {
  mapProject (serverProject) {
    const project/*: Project*/ = {
      id: serverProject.id,
      name: serverProject.name,
      key: serverProject.key
    };

    return project;
  },

  mapProjects (projects) {
    return projects.map(ProjectMapper.mapProject);
  }
};

module.exports = ProjectMapper;
