var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var handler = require('./lib/request-handler');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/client'));


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