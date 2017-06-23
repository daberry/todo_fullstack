var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
  owner: String,
  todoText: String
});

var Todo = mongoose.model('Todo', todoSchema);

// var newTodo = new Todo ({
//   owner: 'Not David',
//   todoText: 'slay the tech assessment'
// }).save();


module.exports = Todo;