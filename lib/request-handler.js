var util = require('../lib/utility');
var db = require('./dbConfig');
var Todo = require('../models/todos');

exports.getIndex = function(req, res) {
  res.render('index');
};

exports.getTodo = function(req, res) {
  console.log('getTodo request');
  Todo.find({}, function(err, results) {
    if (err) return console.erorr(err);
    //console.log(results);
    res.status(200).send(results);
  });
};

exports.postTodo = function(req, res) {
  console.log('postTodo request ',req.body);
  if (req.body.hasOwnProperty('owner') && req.body.hasOwnProperty('todoText')) {
    new Todo({
      owner: req.body.owner,
      todoText: req.body.todoText
    }).save()
      .then(function(newTodo) {
        res.status(201).send();
      })
      .catch(function(err) {
        if (err) {console.error(err);}
      });
  }
};

exports.getLogin = function(req, res) {

};

exports.postLogin = function(req, res) {

};

exports.getLogout = function(req, res) {

};

exports.getSignup = function(req, res) {

};

exports.postSignup = function(req, res) {

};

exports.get404 = function(req, res) {

};

/*
 app.get('/', handler.getIndex);

 app.get('/todo', handler.getTodo);
 app.post('/todo', handler.postTodo);

 app.get('/login', handler.getLogin);
 app.post('/login', handler.postLogin);
 app.get('/logout', handler.getLogout);

 app.get('/signup', handler.getSignup;
 app.post('/signup', handler.postSignup);

 app.get('/*', handler.get404);
 */