const clockContainer = document.querySelector(".js-clock"),
  clockTime = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours(),
    mins = date.getMinutes();
  clockTime.innerText = `${hours < 10 ? `0${hours}` : hours} : ${
    mins < 10 ? `0${mins}` : mins
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
