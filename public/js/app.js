TodoApp = new Marionette.Application();

TodoApp.addRegions({
    headerRegion: '#header',
    todoRegion: '#container',
    todoNewRegion: '#todo-new',
    todoEditRegion: '#todo-edit',
    loginRegion: '#login'
});

TodoApp.on('start', function(options) {
  new SessionController();
});

TodoApp.commands.setHandler('todo:list', function() {
  TodoApp.todoListController = new TodoListController();
  TodoApp.headerController = new HeaderController();
});

TodoApp.commands.setHandler('todo:edit', function(model) {
  var todoEditController = new TodoEditController(model);
});

TodoApp.commands.setHandler('todo:new', function() {
  var todoNewController = new TodoNewController();
});

TodoApp.commands.setHandler('logout', function() {
  TodoApp.todoListController.destroy();
  TodoApp.headerController.destroy();
  new SessionController();
});