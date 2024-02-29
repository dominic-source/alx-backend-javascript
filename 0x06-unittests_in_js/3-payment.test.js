const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment.js');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  const sandbox = sinon.createSandbox();
  beforeEach(function() {
    Utils.calculateNumber = sandbox.spy();
    sendPaymentRequestToApi(100, 20);
  });

  afterEach(function() {
    sandbox.restore();
  });

  it("validates the Utils module method", function() {
    expect(Utils.calculateNumber.calledOnce).to.be.true;
  });

  it("validates the Utils module method is called with argument", function() {
    expect(Utils.calculateNumber.firstCall.args).to.deep.equal(['SUM', 100, 20]);
  });
});
