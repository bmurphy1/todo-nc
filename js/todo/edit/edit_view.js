TodoEditView = Marionette.ItemView.extend({
  template: '#todo-edit-view',
  tagname: 'form',
  id: 'todo-edit-form',
  
  ui: { 'description': '#description',
        'submit': '#submit'
      },
  
  events: { 'click @ui.submit': 'submit' },
  
  submit: function() {
    if(description == '') return;
    this.model.set('description', this.ui.description.val());
    this.model.save();
    this.destroy();
  }
});