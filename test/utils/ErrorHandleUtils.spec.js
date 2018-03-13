const sinon = require('sinon');

const ErrorHandleUtils = require('../../lib/utils/ErrorHandleUtils');
const ErrorPrintUtils = require('../../lib/utils/ErrorPrintUtils');

describe('When error not contains response', () => {

  before(() => {
    sinon.stub(process, 'exit');
  });

  it('unexpected error information should be printed', () => {
    const spy = sinon.stub(ErrorPrintUtils, 'printUnexpectedError');
    ErrorHandleUtils.handleResponseError('NetworkError');
    sinon.assert.calledWith(spy, 'NetworkError');
  });
});
