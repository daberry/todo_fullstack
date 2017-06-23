angular.module('todoFullstack')
  .controller('todoAppCtrl', function($http) {
    var me = this;
    this.todoList = window.exampleTodoData.todos;
    this.clickHandler = function(owner, todotext) {
      console.log('hey you called the click handler', owner, todotext);
      //me.todoList.push({owner: owner, text: todotext});
      $http.post('http://127.0.0.1:3000/todo', {owner: owner, todoText: todotext})
        .then(function(results){
          me.getTodos();
        })
        .catch(function(err) {
          console.error(err);
        })
    };
    this.getTodos = function() {
      $http.get('http://127.0.0.1:3000/todo')
        .then(function(results){
          console.log(results);
          me.todoList = results.data;
        })
        .catch(function(err) {
          console.error(err);
        })
    }
    setInterval(this.getTodos.bind(me),5000);
  })
  .component('todoApp', {
    controller: 'todoAppCtrl',
    templateUrl: 'views/app.html'
  });