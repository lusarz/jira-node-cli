const DAOUtils = require('../utils/DAOUtils');

module.exports = {
  findMyNotReleasedIssues () {
    return DAOUtils.fetchIssuesUsingJQL('status not in (Released) AND assignee in (currentUser()) ORDER BY status ASC');
  },

  findMyDeployedToStageIssues () {
    return DAOUtils.fetchIssuesUsingJQL(`status in ('Deployed to Stage') AND assignee in (currentUser()) ORDER BY status ASC`);
  },

  findDeployedToStageIssues () {
    return DAOUtils.fetchIssuesUsingJQL(`status in ('Deployed to Stage') ORDER BY status ASC`);
  },

  findIssueByName (issueName) {
    return DAOUtils.fetch(`/issue/${issueName}`)
  },

  findCurrentSprintIssues () {
    return DAOUtils.fetchIssuesUsingJQL(`project=REF AND sprint in openSprints() ORDER BY status ASC`);
  }
};
