TodoEditController = Marionette.Controller.extend( {
  initialize: function(model) {
    var todoEditView = new TodoEditView(model);
    TodoApp.todoEditRegion.show(todoEditView);
  }
});