const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment.js');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  const spy = sinon.createSandbox();
  beforeEach(function() {
    Utils.calculateNumber = spy.spy();
    sendPaymentRequestToApi(100, 20);
  });

  afterEach(function() {
    spy.restore();
  });

  it("validates the Utils module method", function() {
    expect(Utils.calculateNumber.calledOnce).to.be.true;
  });

  it("validates the Utils module method is called with argument", function() {
    expect(Utils.calculateNumber.firstCall.args).to.deep.equal(['SUM', 100, 20]);
  });
});
