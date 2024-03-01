const expect = require('chai').expect;
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

  it('should have the correct status code when id is a number', function(done) {
    request('http://localhost:7865/cart/5', (error, response, body) => {
      if (!error) {
        expect(response.statusCode).to.equal(200);
        done();
      }
    });
  });

  it('should have the correct message when id is a number', function(done) {
    request('http://localhost:7865/cart/5', (error, response, body) => {
      if (!error) {
        expect(body).to.equal('Payment methods for cart 5');
        done();
      }
    });
  });

  it('should have the correct message when id is a number', function(done) {
    request('http://localhost:7865/cart/5', (error, response, body) => {
      if (!error) {
        expect(response.statusMessage).to.equal('OK');
        done();
      }
    });
  });

  it('should have the correct status code when id is not a number', function(done) {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      if (!error) {
        expect(response.statusCode).to.equal(404);
        done();
      }
    });
  });

  it('should have the correct payload', function(done) {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      if (!error) {
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      }
    });
  });

  it('should have the correct login data', function(done) {
    options = {
      url: 'http://localhost:7865/login',
      form: {"userName": "Betty"}, 
      headers: {'Content-Type': 'application/json'}
    };

    request.post(options, (error, response, body) => {
      if (!error) {
        expect(body).to.equal('Welcome Betty');
        done();
      }
    });
  });

});