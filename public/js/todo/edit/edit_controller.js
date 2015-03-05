TodoEditController = Marionette.Controller.extend( {
  initialize: function(model) {

    var todoEditView = new TodoEditView({model: model});
    todoEditView.render();

    var $modalEl = $('#modal');
    $modalEl.html(todoEditView.el);
    $modalEl.modal();
  }
});