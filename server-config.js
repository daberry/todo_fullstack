var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var handler = require('./lib/request-handler');

var app = express();

app.set('views', __dirname + '/views'); //find all the views file inside the dir path.
app.set('view engine', 'ejs'); //use the ejs engine
app.use(partials()); //line 13-15 is a middleware to transpile json to JS object.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/client'));  //look into /client for static file


app.get('/', handler.getIndex);

app.get('/todo', handler.getTodo);
app.post('/todo', handler.postTodo);

app.get('/login', handler.getLogin);
app.post('/login', handler.postLogin);
app.get('/logout', handler.getLogout);

app.get('/signup', handler.getSignup);
app.post('/signup', handler.postSignup);

app.get('/*', handler.get404);

module.exports = app;