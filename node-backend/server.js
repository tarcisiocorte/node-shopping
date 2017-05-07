var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');


var env = process.env.NODE_ENV = process.NODE_ENV || 'development';

var app = express();

function compile(str,path){
    return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');

app.set('view engine','jade');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
    res.render('index');
});

// it will call the mockup page
app.get('mockup', function(req, res){
    res.render('mockup');
});

var port = 3030;
app.listen(port);

console.log('server is running: listenning the Port: ' + port);