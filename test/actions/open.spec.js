const OpenAction/*:Action*/ = require('../../lib/actions/open');
const ConfigurationUtils = require('../../lib/utils/configuration-utils');
const BrowserUtils = require('../../lib/utils/browser-utils');

describe('jira open', () => {
  let sandbox;

  before(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(ConfigurationUtils, 'readConfiguration').returns({ API_URL: 'https://example.atlassian.net'});
    sandbox.stub(BrowserUtils, 'openUrl');
    OpenAction.run('ABC-16');
  });

  after(() => { sandbox.restore() });

  it('opens link in browser', () => {
    sinon.assert.calledWith(BrowserUtils.openUrl, 'https://example.atlassian.net/browse/ABC-16');
  });
});
