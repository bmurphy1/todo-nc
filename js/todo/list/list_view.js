TodoItemView = Marionette.ItemView.extend({
  template: '#todo-item-view',
  tagName: 'tr',
  className: 'todo',
TodoListView = Marionette.CompositeView.extend({
  template: '#todo-list-view',
  tagName: 'table',
  id: 'todos',
  childView: TodoItemView
});