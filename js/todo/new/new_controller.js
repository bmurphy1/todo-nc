TodoNewController = Marionette.Controller.extend({
  initialize: function() {
    var todoNewView = new TodoNewView();
    TodoApp.todoNewRegion.show(todoNewView);
  }
});