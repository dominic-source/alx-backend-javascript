const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment.js');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  beforeEach(function() {
    Utils.calculateNumber = sinon.stub();
    Utils.calculateNumber.returns(10);
    sinon.spy(console, 'log');
  });
  afterEach(function() {
    sinon.restore()
  });
  it("validates the Utils module method", function() {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledOnce).to.be.true;
  });

  it("validates the Utils module method is called with argument", function() {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.firstCall.args).to.deep.equal(['SUM', 100, 20]);
  });

  it('validates that the utils.calculateNumber always return 10', function() {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.firstCall.args[0]).to.equal('The total is: 10')
  });
});
