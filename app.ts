import { Metadata } from './Metadata';
import { TodoList } from './TodoList';

const todoList = new TodoList<Metadata>();

const todoListInt = new TodoList<Metadata>();

const foo = todoList.getAllTodos()

todoList.note('Code', {assignee: 'Sidney'});
todoList.note('UI', {assignee: 'Sidney'});

const improveErrorHandling = todoList.note('Fehgler', {assignee: 'Sidney'});

todoList.edit(improveErrorHandling, 'Fehler');

todoList.tickOff(improveErrorHandling);

console.log(todoList.getAllTodos())


