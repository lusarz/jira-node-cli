const DAOUtils = require('../../core/utils/DAOUtils');


function findMyNotReleasedIssues () {
  return DAOUtils.fetch(`/search?jql=status not in (Released) AND assignee in (currentUser()) ORDER BY status ASC`);
}

function findMyDeployedToStageIssues () {
  return DAOUtils.fetch(`/search?jql=status in ('Deployed to Stage') AND assignee in (currentUser()) ORDER BY status ASC`);
}

function findDeployedToStageIssues () {
  return DAOUtils.fetch(`/search?jql=status in ('Deployed to Stage') ORDER BY status ASC`);
}

function findIssueByName (issueName) {
  return DAOUtils.fetch(`/issue/${issueName}`)
}

function findCurrentSprintIssues () {
  return DAOUtils.fetch(`/search?jql=project=REF AND sprint in openSprints() ORDER BY status ASC`);
}

module.exports = {
  findMyNotReleasedIssues,
  findMyDeployedToStageIssues,
  findDeployedToStageIssues,
  findIssueByName,
  findCurrentSprintIssues
};
