import {
  checkAuth,
  createTodo,
  completeTodo,
  getTodos,
  logout,
  deleteAllTodos,
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(todoForm);

  await createTodo({
    todo: data.get('todo'),
    complete: false,
  });

  todoForm.reset();

  await displayTodos();
    // on submit, create a todo, reset the form, and display the todos
});


async function displayTodos() {
    // fetch the todos
  todosEl.textContent = '';

  const todoList = await getTodos();

  for (let item of todoList) {
    const itemEl = document.createElement('p');

    itemEl.textContent = `${item.todo}`;

    if (item.complete) {
      itemEl.classList.add('is_complete');
    } else {
      itemEl.addEventListener('click', async () => {
        await completeTodo(item.id);
        displayTodos();

      });
    }
    todoList.append(itemEl);
  }

    // display the list of todos

    // be sure to give each todo an event listener

    // on click, complete that todo
}

// add an on load listener that fetches and displays todos on load
window.addEventListener('load', () => {
    displayTodos();
});

logoutButton.addEventListener('click', () => {
  logout();
});


deleteButton.addEventListener('click', async () => {
    // delete all todos
  await deleteAllTodos();
    // then refetch and display the updated list of todos
  await displayTodos();
});
