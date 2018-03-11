const DAOUtils = require('./lib/utils/DAOUtils');

/*DAOUtils
  .fetch('/project')
  //.then(statuses => statuses[0].statuses.map(status => status.name))
  .then(console.log)*/


DAOUtils
  .fetch('/project')
  .then(projects => projects.map(project => project.key))
  .then(console.log)
