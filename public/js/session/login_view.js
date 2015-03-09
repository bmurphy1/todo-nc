SessionView = Marionette.ItemView.extend({
  template: '#login-view',
  tagname: 'form',
  id: 'login-view-form',

  ui: {
    'loginEmail': '#login-email',
    'loginPassword': '#login-password',
    'signupEmail': '#signup-email',
    'signupPassword': '#signup-password',
    'loginButton': '#login-button',
    'signupButton':'#signup-button',
    'loginNotice': '#login-notice',
    'signupNotice': '#signup-notice'
  },

  events: {
    'click @ui.loginButton': 'login',
    'click @ui.signupButton': 'signup'
  },

  login: function () {
    var view = this;

    Todo.startSession({
      email:    view.ui.loginEmail.val(),
      password: view.ui.loginPassword.val(),
      success:  function(user) {
        view.destroy();
        TodoApp.execute('todo:list');
      },
      error:    function(xhr)  {
        view.showLoginNotice(JSON.parse(xhr.responseText).error);
      }
    });
  },

  signup: function() {
    var view = this;

    Todo.createUser({
      email:    view.ui.signupEmail.val(),
      password: view.ui.signupPassword.val(),
      success:  function(user) {
        view.showSignupNotice('User successfully created. Please login.');
        view.clearSignupFields();
      },
      error:    function(xhr)  {
        view.showSignupNotice(JSON.parse(xhr.responseText).email);
      }
    });
  },

  showLoginNotice: function(noticeText) {
    this.ui.loginNotice.text(noticeText);
  },

  showSignupNotice: function(noticeText) {
    this.ui.signupNotice.text(noticeText);
  },

  clearSignupFields: function() {
    this.ui.signupEmail.val('');
    this.ui.signupPassword.val('');
  }
});