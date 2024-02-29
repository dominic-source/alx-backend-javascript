const expect = require('chai').expect;
const sinon = require('sinon');
const request = require('request');

describe('Index page', function() {

  it('should have the correct status code', function(done) {
    request('http://localhost:7865/', (error, response, body) => {
      if (!error) {
        expect(response.statusCode).to.equal(200);
        done();
      }
    })
  });

  it('should have the correct message body', function(done) {
    request('http://localhost:7865/', (error, response, body) => {
      if (!error) {
        expect(body).to.equal('Welcome to the payment system');
        done();
      }
    })
  });

  
  it('should have the correct status message', function(done) {
    request('http://localhost:7865/', (error, response, body) => {
      if (!error) {
        expect(response.statusMessage).to.equal('OK');
        done();
      }
    })
  });

  it('should have the correct method', function(done) {
    request('http://localhost:7865/', (error, response, body) => {
      if (!error) {
        expect(response.headers['content-length']).to.equal('29');
        done();
      }
    })
  });

});