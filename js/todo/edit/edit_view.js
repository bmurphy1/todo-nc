TodoEditView = Marionette.ItemView.extend({
  template: '#todo-edit-view',
  tagname: 'form',
  id: 'todo-edit-form',
  
  ui: { 'description': '#description',
        'submit': '#submit'
      },
  
  events: { 'click @ui.submit': 'submit' },
  
  submit: function() {
    var description = this.ui.description.val();
    if(description == '') return;
    var model = this.model;
    var view = this;
    Todo.updateTodo({
      todo: {
        todoId: model.get('id'),
        description: description,
        is_complete: model.get('is_complete')
      },
      success: function(todo) { TodoApp.execute('todo:list');
                                view.destroy();},
      error:   function()     { alert('todo create error!') }
    });
  }
});