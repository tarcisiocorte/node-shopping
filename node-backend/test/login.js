var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('../server/config/config')[env];

require('../server/config/express')(app, config);

require('../server/config/mongoose')(config);

require('../server/config/passport')();

require('../server/config/routes')(app);

console.log('all modules have been loaded');


var request = require('supertest')(express);


describe('#Login', function() {

//TODO: beforeEach - in order to delete uncessary records

    it('#doing login with white values', function(done) {
        this.timeout(15000);
        request.post('/login')
            .send({username:'', password:''})
            .expect(302, done);
    });

    it('#doing login with invalid data', function(done) {
          this.timeout(15000);
        request.post('/login')
            .send({username:'dkdkdkd', password:'dddddd'})
            .expect(302, done);
    });
});
