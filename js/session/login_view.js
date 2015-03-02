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
    'signupButton':'#signup-button',
    'errors': '#errors'
  },
  
  events: {
    'click @ui.loginButton': 'login',
    'click @ui.signupButton': 'signup'
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
  
  signup: function() {
    var view = this;
    
    Todo.createUser({
      email:    view.ui.email.val(),
      password: view.ui.password.val(),
      success:  function(user) { console.log(user) },
      error:    function(xhr)  { console.log(xhr) }
    });
  },
  
  showErrors: function(errorText) {
    this.ui.errors.text(errorText);
  }
});