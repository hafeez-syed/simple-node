var request = require('supertest');
var app = require('../index');
describe('GET / ', function () {
    it('respond with hello world', function (done) {
        //navigate to root and check the the response is "hello world"
        request(app).get('/').expect('Hello World!!!', done);
        // done();
    });
});