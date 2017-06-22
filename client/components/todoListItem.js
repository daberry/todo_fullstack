angular.module('todoFullstack')
  .controller('todoListItemCtrl', function() {

  })
  .component('todoListItem', {
    bindings: {
      todoObject: '<'
    },
    controller: 'todoListItemCtrl',
    templateUrl: 'views/todoListItem.html'
  });