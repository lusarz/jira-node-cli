const expect = require('chai').expect;
const ActionUtils = require('../../lib/utils/ActionUtils');

describe('ActionUtils.buildCommand', () => {
  it('return properly formatted command that may be registered in commander', () => {
    expect(ActionUtils.buildCommand('jql', ['jql'])).to.equal('jql [jql]');
    expect(ActionUtils.buildCommand('jql', ['jql', 'another'])).to.equal('jql [jql] [another]');
  });

  it('return action when no params are provided', () => {
    expect(ActionUtils.buildCommand('sprint')).to.equal('sprint');
  });
});
