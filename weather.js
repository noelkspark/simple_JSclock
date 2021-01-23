const COORDs = "coords";

function handleGeoInfo(position) {
  console.log(position);
}
function handGeoError() {
  console.log("Can't access geo location");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoInfo, handGeoError);
}

function loadCoord() {
  const loadedCoords = localStorage.getItem(COORDs);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    getWeather();
  }
}

function init() {
  loadCoord();
}

init();
