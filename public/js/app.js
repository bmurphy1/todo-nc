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
  window.todoListController = new TodoListController();
  window.headerController = new HeaderController();
});

TodoApp.commands.setHandler('todo:edit', function(model) {
  var todoEditController = new TodoEditController(model);
});

TodoApp.commands.setHandler('todo:new', function() {
  var todoNewController = new TodoNewController();
});

TodoApp.commands.setHandler('logout', function() {
  window.todoListController.destroy();
  window.headerController.destroy();
  new SessionController();
});