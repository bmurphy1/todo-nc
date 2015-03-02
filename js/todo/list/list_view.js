TodoItemView = Marionette.ItemView.extend({
  template: '#todo-item-view',
  tagName: 'tr',
  className: 'todo',
  
  ui: { checkbox: ':checkbox' },
  events: { 'click @ui.checkbox': 'toggleComplete' },
  
  onRender: function() {
    this.ui.checkbox.prop('checked', this.model.get('is_complete'));
  },
  
  toggleComplete: function() { this.model.toggleComplete(); }
});

TodoListView = Marionette.CompositeView.extend({
  template: '#todo-list-view',
  tagName: 'table',
  id: 'todos',
  childView: TodoItemView
});