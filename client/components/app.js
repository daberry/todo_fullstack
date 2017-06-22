angular.module('todoFullstack')
  .controller('todoAppCtrl', function() {
    var me = this;
    this.todoList = window.exampleTodoData.todos;
    this.clickHandler = function(owner, todotext) {
      console.log('hey you called the click handler', owner, todotext);
      me.todoList.push({owner: owner, text: todotext});
    };
  })
  .component('todoApp', {
    controller: 'todoAppCtrl',
    templateUrl: 'views/app.html'
  });