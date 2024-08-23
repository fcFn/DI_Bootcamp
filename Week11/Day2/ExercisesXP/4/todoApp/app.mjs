// Exercise 4: Todo List using ES6 module syntax
//
// Instructions:
// 1. Create a directory named todoApp.
// 2. Inside the todoApp directory, create two files: todo.js and app.js.
// 3. In todo.js, define an ES6 module that exports a TodoList class.
// 4. The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.
// 5. Export the TodoList class.
// 6. In app.js, import the TodoList class from the todo.js module.
// 7. Create an instance of the TodoList class.
// 8. Add a few tasks, mark some as complete, and list all tasks.
// 9. Run app.js and verify that the todo list operations are working correctly.

import { TodoList } from './todo.mjs';

const myTodoList = new TodoList();

myTodoList.addTask('Buy groceries');
myTodoList.addTask('Finish homework');
myTodoList.addTask('Go for a run');

console.log('Initial todo list:');
myTodoList.listTasks();

myTodoList.markComplete(1);
myTodoList.markComplete(2);

console.log('\nUpdated todo list:');
myTodoList.listTasks();
