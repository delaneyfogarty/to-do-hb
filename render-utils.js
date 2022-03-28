export function renderTodo(todo) {
  const div = document.createElement('div');
  const pTag = document.createElement('p');
    // create a div and a p tag

    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
  if (todo.complete) {
    div.classList.add('complete');
  } else {
    div.classList.add('incomplete');
  }
    // add the 'todo' css class no matter what
  div.classList.add('todo');
    // put the todo's text into the p tag
  todo.textContent = pTag;

    // append stuff
  div.append(pTag);
    // return the div
  return div;
}