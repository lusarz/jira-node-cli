const IssueLinkAction/*:Action*/ = require('../../lib/actions/issue-link');
const ConfigurationUtils = require('../../lib/utils/configuration-utils');
const clipboardy = require('clipboardy');

describe('jira issue-link', () => {
  let sandbox;

  before(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(ConfigurationUtils, 'readConfiguration').returns({ API_URL: 'https://example.atlassian.net'});
    sandbox.stub(clipboardy, 'write');
    IssueLinkAction.run('ABC-16');
  });

  after(() => { sandbox.restore() });

  it('write link to issue into clipboard', () => {
    sinon.assert.calledWith(clipboardy.write, 'https://example.atlassian.net/browse/ABC-16');
  });
});
