const nameForm = document.querySelector(".js-name-form"),
  input = nameForm.querySelector("input"),
  greetings = document.querySelector(".js-greetings");

const userLS = "curUser",
  showing = "showing";
function paintGreeting(text) {
  nameForm.classList.remove(showing);
  greetings.classList.add(showing);
  greetings.innerText = `hello ${text}`;
}

function saveName(text) {
  localStorage.setItem(userLS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const inputVal = input.value;
  paintGreeting(inputVal);
  saveName(inputVal);
}
function askName() {
  nameForm.classList.add(showing);
  nameForm.addEventListener("submit", handleSubmit);
}

function loadName() {
  const curUser = localStorage.getItem(userLS);

  if (curUser === null) {
    askName();
  } else {
    paintGreeting(curUser);
  }
}

loadName();
