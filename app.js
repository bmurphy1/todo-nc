TodoApp = new Marionette.Application();

TodoApp.addRegions({
    todoRegion: '#container',
    todoNewRegion: '#todo-new'
});

TodoApp.commands.setHandler('todo:list', function() {
  window.todoListController = new TodoListController();
});