TodoNewView = Marionette.ItemView.extend({
  template: '#todo-new-view',

  ui: { 'description': '#description',
        'submit': '#submit'
      },

  events: { 'click @ui.submit': 'submit' },

  submit: function() {
    if(description == '') return;
    this.model.save({'description': this.ui.description.val(), 'is_complete': false});
    TodoApp.todoListController.todoList.add(this.model);
  }
});