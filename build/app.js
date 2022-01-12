"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoList_1 = require("./TodoList");
const todoList = new TodoList_1.TodoList();
todoList.note('Code', { assignee: 'Sidney' });
todoList.note('UI', { assignee: 'Sidney' });
const improveErrorHandling = todoList.note('Fehgler', { assignee: 'Sidney' });
todoList.edit(improveErrorHandling, 'Fehler');
todoList.tickOff(improveErrorHandling);
console.log(todoList.getAllTodos());