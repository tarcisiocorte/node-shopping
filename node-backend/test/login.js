var express = require('../config/express')();
var request = require('supertest')(express);


describe('#Login', function() {

//TODO: beforeEach - in order to delete uncessary records

    it('#doing login with white values', function(done) {
        request.post('/login')
            .send({userName: "", password: ""})
            .expect(302, done);
    });

    it('#doing login with invalid data', function(done) {
        request.post('/login')
            .send({userName: "test", password: "testxxx"})
            .expect(302, done);
    });
});
