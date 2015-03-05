HeaderView = Marionette.ItemView.extend({
  template: '#header-view',

  ui: { 'logout': '#logout-button',
        'todoNew': '#todo-new-button' },

  events: { 'click @ui.logout': 'logout',
            'click @ui.todoNew': 'todoNew' },

  logout: function() {
    var view = this;
    Todo.endSession({
      success: function(todo) {
        TodoApp.execute('logout');
        view.destroy();
      },
      error:   function(xhr)  { console.log('logout error!') }
    });
  }
  ,
  todoNew: function() {
    TodoApp.execute('todo:new');
  }
});