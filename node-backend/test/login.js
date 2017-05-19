var express = require('../server/config/express')();
var request = require('supertest')(express);

describe('#Login', function() {

//TODO: beforeEach - in order to delete uncessary records

    it('#doing login with white values', function(done) {
        request.post('/login')
            .send({username:'', password:''})
            .expect(302, done);
    });

    it('#doing login with invalid data', function(done) {
        request.post('/login')
            .send({username:'dkdkdkd', password:'dddddd'})
            .expect(302, done);
    });
});
