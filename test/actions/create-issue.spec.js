const expect = require('chai').expect;
const sinon = require('sinon');

const CreateIssueAction/*:Action*/ = require('../../lib/actions/create-issue');

const IssuesDAO = require('../../lib/dao/issues-dao');
const ProjectsInquirer = require('../../lib/inquirer/projects-inquirer');
const IssuesInquirer = require('../../lib/inquirer/issues-inquirer');
const PrintUtils = require('../../lib/utils/print-utils');

const ISSUE_PARAMETERS = require('../fixtures/issue-parameters');

describe('When user want to create an issue', () => {
  it(`don't need to provide any parameters`, () => {
    expect(CreateIssueAction.props).to.be.empty;
  });
});

describe('When user invoke create-issue action', () => {
  let sandbox;
  before(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(ProjectsInquirer, 'chooseProject').resolves(6);
    sandbox.stub(IssuesInquirer, 'getIssueParameters').resolves(ISSUE_PARAMETERS);
    sandbox.stub(IssuesDAO, 'createIssue').resolves({ key: 'ABC-16'});
    sandbox.stub(PrintUtils, 'printLine');
    CreateIssueAction.run();
  });

  after(() => { sandbox.restore() });

  it('choose issue type for project chosen project', () => {
    sinon.assert.calledWith(IssuesInquirer.getIssueParameters, 6);
  });

  it('issue should be created with chosen parameters', () => {
    sinon.assert.calledWith(IssuesDAO.createIssue, ISSUE_PARAMETERS);
  });

  it('should see information about created issue', () => {
    sinon.assert.calledWith(PrintUtils.printLine, `Issue 'ABC-16' successfully created`, 'green');
  });
});
