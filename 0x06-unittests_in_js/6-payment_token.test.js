const expect = require('chai').expect;
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  let data;
  beforeEach(async function() {
    sinon.stub(getPaymentTokenFromAPI);
    data = await getPaymentTokenFromAPI(true).then(val => val);
  });

  afterEach(function(){
    sinon.restore();
  });

  it('verifies that the promise returns the correct value', function() {
    expect(data).to.deep.equal({data: 'Successful response from the API' })
  });
});