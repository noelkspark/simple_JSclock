const todoForm = document.querySelector(".js-todo-form"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todoList");

const todoLS = "todo";
let todos = [];

function saveTodo() {
  localStorage.setItem(todoLS, JSON.stringify(todos));
}
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);
  const cleanToDo = todos.filter(function (todo) {
    return todo.id !== parseInt(li.id);
  });
  todos = cleanToDo;
  console.log(cleanToDo);
  saveTodo();
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = todos.length + 1;
  delBtn.innerText = "✄";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  todoList.appendChild(li);
  const todoObj = {
    text: text,
    id: newId,
  };
  todos.push(todoObj);
  saveTodo();
}
function handleSubmit(event) {
  event.preventDefault();
  const curVal = todoInput.value;
  paintToDo(curVal);
  todoInput.value = "";
}
function loadToDo() {
  const loadedToDo = localStorage.getItem(todoLS);
  if (loadedToDo !== null) {
    const parsedTodo = JSON.parse(loadedToDo);
    parsedTodo.forEach(function (todo) {
      paintToDo(todo.text);
    });
  }
}
function init() {
  loadToDo();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
