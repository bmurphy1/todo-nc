TodoItem = Backbone.Model.extend({
  sync: function(method, model, options) {
    switch(method) {
      case 'create':
        return Todo.createTodo({
          todo: {
            description: model.get('description'),
            is_complete: false
          },
          success:  function(todo) { console.log(todo); return todo },
          error:    function(xhr)  { console.log(xhr); return xhr }
        });
        break;
      case 'update':
        return Todo.updateTodo({
          todoId: model.get('id'),
          data: { is_complete: model.get('is_complete'),
                  description: model.get('description') },
          success: function(todo) { return todo },
          error:   function(xhr)  { return xhr }
        });
        break;
      default:
          console.log(method + ' not supported');
    }
  },

  toggleComplete: function() {
    this.set('is_complete', !this.get('is_complete'));
    this.save();
  }
});

TodoList = Backbone.Collection.extend({
  model: TodoItem,

  fetch: function() {
    this.sync('read');
  },

  sync: function(method, model, options) {
    switch(method) {
      case 'read':
        var collection = this;
        return Todo.loadTodos({
          success: function(todos) { collection.reset(todos) },
          error:   function(xhr)   { return xhr }
        });
      default:
        console.log(method + ' not supported');
    }
  }
});