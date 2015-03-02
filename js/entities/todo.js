TodoItem = Backbone.Model.extend({
  toggleComplete: function() {
    this.set('is_complete', !this.get('is_complete'));
    Todo.updateTodo({
      todoId: this.get('id'),
      data: { description: this.get('description'), 
              is_complete: this.get('is_complete') },
      success: function(todo) { alert('todo update success!') },
      error:   function(xhr)  { alert('todo update error!') }
    });
  }
});

TodoList = Backbone.Collection.extend({
  model: TodoItem
});