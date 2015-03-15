describe('TodoItem.sync', function() {

  beforeEach(function() {
    Todo.USER = {id: 3, email: 'test@test.com', api_token:'abc123'};
    spyOn(Todo, 'createTodo');
    spyOn(Todo, 'updateTodo');
  });

  it('should call Todo.createTodo when saving new model', function() {
    var todoItem = new TodoItem();
    todoItem.save();

    expect(Todo.createTodo).toHaveBeenCalled();
  });

  it('should call Todo.updateTodo when saving changes to existing model', function() {
    var todoItem = new TodoItem({id: 1, description: 'buy milk', is_complete: false});
    todoItem.save();

    expect(Todo.updateTodo).toHaveBeenCalled();
  });
});

describe('TodoItem.sync ajax', function() {
  it('create should set model.id to that of returned value', function() {
    jasmine.Ajax.install();

    var todoItem = new TodoItem({description: 'buy milk', is_complete: false});
    todoItem.save();

    jasmine.Ajax.requests.mostRecent().respondWith({
      status: 200,
      responseText: JSON.stringify({id: 42})
    });

    expect(todoItem.get('id')).toEqual(42);
    jasmine.Ajax.uninstall();
  });
});

describe('TodoListItem.sync', function() {

  beforeEach(function() {
    spyOn(Todo, 'loadTodos');
  });

  it('should call Todo.loadTodos when reading collection of todos', function() {
    var todoList = new TodoList();
    todoList.fetch();

    expect(Todo.loadTodos).toHaveBeenCalled();
  });
});