const body = document.querySelector("body");
const IMG_NUM = 6;

function paintImage(imageNum) {
  const image = new Image();
  image.src = `images/${imageNum + 1}.jpeg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}
function generateRandom() {
  return Math.floor(Math.random() * IMG_NUM);
}
function init() {
  const randomNum = generateRandom();
  paintImage(randomNum);
}

init();
