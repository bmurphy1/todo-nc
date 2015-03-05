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

  modelEvents: {'change:description': 'render'},

  editTodo: function() {
    TodoApp.execute('todo:edit', this.model);
  },

  toggleComplete: function() { this.model.toggleComplete(); },
});


TodoListView = Marionette.CompositeView.extend({
  template: '#todo-list-view',
  tagName: 'table',
  className: 'table',
  id: 'todos',
  childView: TodoItemView,

  ui: {    'tbody': 'tbody',
      bulkComplete: '#bulk-complete' },

  events: { 'click @ui.bulkComplete': 'bulkToggleComplete' },

  collectionEvents: { 'update': 'render' },

  onRender: function() {
    window.views = this.children;
    this.ui.tbody.sortable();
  },

  bulkToggleComplete: function() {
    if (this.ui.bulkComplete.prop('checked')) {
      _.each(this.children._views, function(view) {view.ui.checkbox.prop('checked', true)});
      _.each(this.collection.models, function(model) {
        model.set('is_complete', true);
        model.save();
      });
    } else {
      _.each(this.children._views, function(view) {view.ui.checkbox.prop('checked', false)});
      _.each(this.collection.models, function(model) {
        model.set('is_complete', false);
        model.save;
      });
    }
  }
});