TodoListController = Marionette.Controller.extend({
  initialize: function() {
    this.todoList = new TodoList();
    var todoList = this.todoList;
      Todo.loadTodos({
        success: function(todos) { 
          todoList.reset(todos);
        },
        error: function(xhr) {console.log('error')}
      });

    this.todoListView = new TodoListView({collection: this.todoList});
    TodoApp.todoRegion.show(this.todoListView);
  },
  
  onDestroy: function() {
    this.todoListView.destroy();
  }
});