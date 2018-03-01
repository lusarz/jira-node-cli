const expect = require('chai').expect;
const RequireUtils = require('../../lib/utils/RequireUtils');

describe('RequireUtils.readAvailableActions', () => {
  it('return all actions', () => {
    expect(RequireUtils.readAvailableActions().sort()).to.deep.equal(['issue', 'issue-link', 'issue-status', 'jql']);
  });
});

describe('RequireUtils.readAvailableAliases', () => {
  it('return all aliases', () => {
    expect(RequireUtils.readAvailableAliases().sort()).to.deep.equal(['my-not-released', 'my-stage', 'sprint', 'stage']);
  });
});
