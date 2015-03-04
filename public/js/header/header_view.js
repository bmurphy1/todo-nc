HeaderView = Marionette.ItemView.extend({
  template: '#header-view',
  
  ui: { 'logout': '#logout-button' },
  events: { 'click @ui.logout': 'logout' },
  
  logout: function() {
    var view = this;
    Todo.endSession({
      success: function(todo) {
        console.log('logout success!');
        TodoApp.execute('logout');
        view.destroy();
      },
      error:   function(xhr)  { console.log('logout error!') }
    });
  }
});