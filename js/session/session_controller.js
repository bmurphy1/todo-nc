SessionController = Marionette.Controller.extend({
  initialize: function() {
    var loginView = new LoginView();
    TodoApp.loginRegion.show(loginView);
  }
});