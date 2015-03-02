TodoItemView = Marionette.ItemView.extend({
  template: '#todo-item-view',
  tagName: 'tr',
  className: 'todo',
  
  ui: { checkbox: ':checkbox',
            edit: '#edit' },
  
  events: { 'click @ui.checkbox': 'toggleComplete',
                'click @ui.edit': 'editTodo'},
  
  onRender: function() {
    this.ui.checkbox.prop('checked', this.model.get('is_complete'));
  },
  
  editTodo: function() {
    TodoApp.execute('todo:edit', this.model);
  },
  
  toggleComplete: function() { this.model.toggleComplete(); }
});

TodoListView = Marionette.CompositeView.extend({
  template: '#todo-list-view',
  tagName: 'table',
  id: 'todos',
  childView: TodoItemView
});