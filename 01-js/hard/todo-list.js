/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  // add(todo): adds todo to list of todos
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  // remove(indexOfTodo): remove todo from list of todos
  remove(indexOfTodo) {
    this.todos.splice(indexOfTodo, 1);
  }
  // update(index, updatedTodo): update todo at given index
  update(index, updatedTodo) {
    this.todos[index] = updatedTodo;
  }
  // getAll: returns all todos
  getAll() {
    return this.todos;
  }
  // get(indexOfTodo): returns todo at given index
  get(indexOfTodo) {
    return this.todos[indexOfTodo];
  }
  // clear: deletes all todos
  clear() {
    this.todos = [];
  }
}

// test todo
const todo = new Todo();
todo.add("Buy Milk");
todo.add("Buy Eggs");
todo.add("Buy Bread");
console.log(todo.getAll()); // [ 'Buy Milk', 'Buy Eggs', 'Buy Bread' ]
todo.remove(1);
console.log(todo.getAll()); // [ 'Buy Milk', 'Buy Bread' ]
todo.update(1, "Buy Cheese");
console.log(todo.getAll()); // [ 'Buy Milk', 'Buy Cheese' ]
console.log(todo.get(1)); // Buy Cheese
todo.clear();
console.log(todo.getAll()); // []

module.exports = Todo;
