const expect = require('chai').expect;
const AliasUtils = require('../../lib/utils/AliasUtils');

describe('Alias command description', () => {
  const alias/*: Alias*/ = {
    propsData: {
      jql: 'assignee in (currentUser())'
    }
  };

  const action/*: Action*/ = {
    name: 'jql',
    description: 'Show issues using JQL',
    props: ['jql']
  };

  it(`contains original action invocation`, () => {
    expect(AliasUtils.prepareDescription(alias, action)).to.includes(`jira jql 'assignee in (currentUser())'`);
  });
});
