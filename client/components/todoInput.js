angular.module('todoFullstack')
  .controller('todoInputCtrl', function() {

  })
  .component('todoInput', {
    bindings: {
      clickHandler: '<'
    },
    controller: 'todoInputCtrl',
    templateUrl: 'views/todoInput.html'
  });