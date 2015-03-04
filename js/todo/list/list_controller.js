TodoListController = Marionette.Controller.extend({
  initialize: function() {
    
    this.todoList = new TodoList();
    this.todoList.fetch();
    
    this.todoListView = new TodoListView({collection: this.todoList});
    TodoApp.todoRegion.show(this.todoListView);
  },
  
  onDestroy: function() {
    this.todoListView.destroy();
  }
});