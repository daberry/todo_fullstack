angular.module('todoFullstack')
  .controller('todoListCtrl', function() {

  })
  .component('todoList', {
    bindings: {
      todos: '<'
    },
    controller: 'todoListCtrl',
    templateUrl: 'views/todoList.html'
  });