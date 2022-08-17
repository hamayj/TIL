function showLocation(event) {
  var latitude = event.coords.latitude 
  var longitude = event.coords.longitude
  document.querySelector("#latitude").textContent = latitude
  document.querySelector("#longitude").textContent = longitude 

  
  let apiKey = "Su%2FjD4AQWu0vPPnQkcm0dVbiPxWqLgUu6AN6Snk4oK0JGGr38kehRNwGQtPIWP9iZ7BzO%2FQccEWTlb5yAxsUPw%3D%3D"
  let weatherUrl = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0?lat=" + latitude 
                + "&lon=" + longitude 
                + "&appid=" + apiKey; 

	let options = { method: 'GET' }
  ajax(weatherUrl, options).then((response) => {
      console.log(response)
    //   let icon = response.weather[0].icon
    //   let iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
    //   let img = document.querySelector("#wicon")
    //   img.src = iconUrl 
      document.querySelector("#tempr").textContent = (response.main.temp) + "(" + (response.main.temp - 273) + ")" // 현재 온도
    }).catch((error) => {
      console.log(error)
    })
}

function showError(event) {
  alert("위치 정보를 얻을 수 없습니다.")
}

window.addEventListener('load', () => { 
  if(window.navigator.geolocation) {
     window.navigator.geolocation.getCurrentPosition(showLocation,showError)
  }
})