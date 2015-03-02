TodoListController = Marionette.Controller.extend({
  initialize: function() {
    var todoList = new TodoList();
      Todo.loadTodos({
        success: function(todos) { 
          todoList.reset(todos);
        },
        error: function(xhr) {console.log('error')}
      });

    var todoListView = new TodoListView({collection: todoList});
    TodoApp.todoRegion.show(todoListView);
  }
});