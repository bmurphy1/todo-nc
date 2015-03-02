LoginView = Marionette.ItemView.extend({
  initialize: function() {
    window.loginView = this;
  },
  template: '#login-view',
  tagname: 'form',
  id: 'login-view-form',
  
  ui: {
    'email': '#email',
    'password': '#password',
    'loginButton': '#login-button',
    'errors': '#errors'
  },
  
  events: {
    'click @ui.loginButton': 'login'
  },
  
  login: function () {
    var view = this;
    
    Todo.startSession({
      email:    view.ui.email.val(),
      password: view.ui.password.val(),
      success:  function(user) { 
        view.destroy();
        TodoApp.execute('todo:list');
      },
      error:    function(xhr)  {
        view.showErrors(JSON.parse(xhr.responseText).error);
      }
    });
  },
  
  showErrors: function(errorText) {
    this.ui.errors.text(errorText);
  }
});