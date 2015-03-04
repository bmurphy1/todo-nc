SessionController = Marionette.Controller.extend({
  initialize: function() {
    window.sessionView = new SessionView();
    TodoApp.loginRegion.show(sessionView);
  }
});