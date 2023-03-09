// function calculateWindChill() {
//   var temperature = document.getElementById("temperature").textContent;
//   var windSpeed = document.getElementById("windspeed").textContent;

//   if (temperature <= 50 && windSpeed > 3.0) {
//     var windChillFactor = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
//     document.getElementById("windchill").textContent = windChillFactor.toFixed(2) + "°F";
//   } else {
//     document.getElementById("windchill").textContent = "N/A";
//   }
// }

// calculateWindChill();
 

const apiKey = "4693e3d9da68657f229c5244a54f4233";
const city = "Monrovia,Liberia";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

// Retrieve the current temperature and weather icon
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const currentTemp = Math.round(data.main.temp);
    const weatherIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const weatherDesc = data.weather[0].description;
    document.getElementById("current-temp").textContent = currentTemp;
    document.getElementById("weather-icon").setAttribute("src", weatherIcon);
    document.getElementById("weather-icon").setAttribute("alt", weatherDesc);
    document.querySelector("figcaption").textContent = weatherDesc;
  })
  .catch((error) => console.log(error));


