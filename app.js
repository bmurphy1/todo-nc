TodoApp = new Marionette.Application();

TodoApp.addRegions({
    todoRegion: '#container',
    todoNewRegion: '#todo-new'
});

TodoApp.commands.setHandler('todo:list', function() {
  window.todoListController = new TodoListController();
});

TodoApp.commands.setHandler('todo:edit', function(model) {
  window.todoEditController = new TodoEditController(model);
});