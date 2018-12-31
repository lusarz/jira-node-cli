const expect = require('chai').expect;
const RequireUtils = require('../../lib/utils/require-utils');

describe('RequireUtils.readAvailableActions', () => {
  it('return all actions', () => {
    expect(RequireUtils
      .readAvailableActions()
      .map(action => action.name)
      .sort()
    ).to.deep.equal(['create-issue', 'issue', 'issue-link', 'issue-status', 'jql']);
  });
});

describe('RequireUtils.readAvailableAliases', () => {
  it('return all aliases', () => {
    expect(RequireUtils
      .readAvailableAliases()
      .map(({ alias }) => alias.name)
      .sort()
    ).to.deep.equal(['all', 'my-issues', 'my-not-released', 'my-stage', 'sprint', 'stage']);
  });
});
