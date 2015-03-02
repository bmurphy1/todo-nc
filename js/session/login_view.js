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
    'login': '#login',
    'errors': '#login-errors'
  },
  
  events: {
    'click @ui.login': 'login'
  },
  
  login: function () {
    var view = this;
    
    Todo.startSession({
      email:    view.ui.email.val(),
      password: view.ui.password.val(),
      success:  function(user) { 
        console.log('login success');
        view.destroy();
        TodoApp.execute('todo:list');
      },
      error:    function(xhr)  {
        view.loginErrors(JSON.parse(xhr.responseText).error, view);
      }
    });
  },
  
  loginErrors: function(errorText, view) {
    this.ui.errors.text(errorText);
  }
});