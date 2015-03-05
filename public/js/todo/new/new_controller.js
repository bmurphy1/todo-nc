TodoNewController = Marionette.Controller.extend({
  initialize: function() {
    var todoItem = new TodoItem();
    window.todoNewView = new TodoNewView({model: todoItem});
    todoNewView.render();

    var $modalEl = $('#modal');
    $modalEl.html(todoNewView.el);
    $modalEl.modal();
  }
});