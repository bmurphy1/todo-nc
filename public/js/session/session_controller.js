SessionController = Marionette.Controller.extend({
  initialize: function() {
    var sessionView = new SessionView();
    TodoApp.loginRegion.show(sessionView);
  }
});