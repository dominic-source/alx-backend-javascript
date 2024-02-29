const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment.js');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  beforeEach(function() {
    Utils.calculateNumber = sinon.stub();
    sinon.spy(console, 'log');
  });
  afterEach(function() {
    sinon.restore()
  });

  it("Verify that the console is logging the string The total is: 120", function() {
    Utils.calculateNumber.returns(120);
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.firstCall.args[0]).to.equal('The total is: 120');
  });

  it("Verify that the console is logging the string The total is: 20", function() {
    Utils.calculateNumber.returns(20);
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.firstCall.args[0]).to.equal('The total is: 20');
  });
});
