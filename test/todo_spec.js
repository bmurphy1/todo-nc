describe('TodoItem.sync', function() {

  beforeEach(function() {
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