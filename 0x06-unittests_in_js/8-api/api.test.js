const expect = require('chai').expect;
const sinon = require('sinon');
const request = require('request');

describe('Integration testing of web application', function() {

  it('should have the correct status code', function() {
    request('http://localhost:7865/', (error, response, body) => {
      if (!error) {
        expect(response.statusCode).to.equal(200);
      }
    })
  });

  it('should have the correct message body', function() {
    request('http://localhost:7865/', (error, response, body) => {
      if (!error) {
        expect(body).to.equal('Welcome to the payment system');
      }
    })
  });

});