TodoNewView = Marionette.ItemView.extend({
  template: '#todo-new-view',
  tagname: 'form',
  id: 'todo-new-form',
  
  ui: { 'description': '#description',
        'submit': '#submit'
      },
  
  events: { 'click @ui.submit': 'submit' },
  
  submit: function() {
    if(description == '') return;
    this.model.set('description', this.ui.description.val());
    this.model.set('is_complete', false);
    this.model.save();
  }
});