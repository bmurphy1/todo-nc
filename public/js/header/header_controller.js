HeaderController = Marionette.Controller.extend({
  initialize: function() {
    this.headerView = new HeaderView();
    TodoApp.headerRegion.show(this.headerView);
  },
  
  onDestroy: function() {
    this.headerView.destroy();
  }
});