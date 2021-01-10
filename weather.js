const COORDS = 'coords';

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    //console.log(position.coords.latitude);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
        // same as below codes 
        // latitude: latitude,
        // longitude: longitude
    }
    saveCoords(coordsObj);
}

function handleGeoError() {
    console.log("can't access geo location");
}

function askForCoods() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null) {
        askForCoods();
    } else {
        // getWeather
    }
}

function init() {
    loadCoords();
}

init();