TodoNewView = Marionette.ItemView.extend({
  template: '#todo-new-view',
  tagname: 'form',
  id: 'todo-new-form',
  
  ui: { 'description': '#description',
        'submit': '#submit'
      },
  
  events: { 'click @ui.submit': 'submit' },
  
  submit: function() {
    var description = this.ui.description.val();
    if(description == '') return;
    this.ui.description.val('');
    Todo.createTodo({
      todo: {
        description: description,
        is_complete: false
      },
      success: function(todo) { TodoApp.execute('todo:list') },
      error:   function()     { alert('todo create error!') }
    });
  }
});