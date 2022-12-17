function getweatherdata() {
  navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords;
    document.getElementById("lat").innerHTML = latitude;
    document.getElementById("long").innerHTML = longitude;
    latitude.innerHTML = latitude;
    longitude.innerHTML = longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a05e4d21c63465c3bc75f5b6c429b24a`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        showWethereData(data);
      });
  });
}
function showWethereData(data) {
  document.getElementById("loc").innerHTML = `${data.name}`;
  document.getElementById("latti").innerHTML = `${data.coord.lat}`;
  document.getElementById("logit").innerHTML = `${data.coord.lon}`;
  document.getElementById("Time_Zone").innerHTML = `${data.timezone}`;
  document.getElementById("Wind_speed").innerHTML = `${data.wind.speed}`;
  document.getElementById("pressure").innerHTML = `${data.main.pressure}`;
  document.getElementById("Humidity").innerHTML = `${data.main.humidity}`;
  document.getElementById("Wind_Direction").innerHTML = `${data.wind.speed}`;
  document.getElementById("Temp").innerHTML = `${data.main.temp}`;
  document.getElementById("Feels_like").innerHTML = `${data.main.feels_like}`;
}


let button = document.getElementById("btn");
button.onclick = getweatherdata();
