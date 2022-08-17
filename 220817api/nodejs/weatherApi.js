const { response } = require("express");

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
} // 1. 로컬스토리지야, 위치 저장돼있니?

// 있다 -> 2-1.getWeather : 로컬 스토리지에 있는 내용들을 가져와
// (문자열로 저장된 것들 숫자로 가져와.) 그리고 4번 getWeather로 가

// 없다 -> 2-2. askForCoords : 브라우저야, 위치 얻을 수 있어?
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    // navigator.geolocation.getCurrentPosition(success[, error[, [options]])
}

// 3. handleGeoSuccess : 브라우저야, 위치 중에서 경도랑 위도 줘.
// 로컬 스토리지에 (문자열로) 저장해. 날씨 가져오는데 쓸거야.

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}


// 4. getWeather : weatherAPI야, 내 로컬스토리지에 있는 경도-위도에 해당하는 날씨 알려줘. html에 날씨 띄워
function getWeather(lat, lng) {// 여기서 코드 변형함.
    fetch(`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0?lat=${lat}&lon=${lng}&appid=Su%2FjD4AQWu0vPPnQkcm0dVbiPxWqLgUu6AN6Snk4oK0JGGr38kehRNwGQtPIWP9iZ7BzO%2FQccEWTlb5yAxsUPw%3D%3D&units=metric`
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `지금 ${place}은 ${temperature}도 입니다.`
    })
}