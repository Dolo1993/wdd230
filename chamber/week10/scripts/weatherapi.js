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