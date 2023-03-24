 

 
//     const icon = document.createElement("img");
//     icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
// Weather API endpoint
const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=4693e3d9da68657f229c5244a54f4233';
const forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=4693e3d9da68657f229c5244a54f4233';

// Select the HTML elements
const tempElement = document.getElementById('temp');
const conditionElement = document.getElementById('condition');
const humidityElement = document.getElementById('humidity');
const forecastElement = document.getElementById('forecast');

// Fetch the current weather data from the API
fetch(weatherAPI)
  .then(response => response.json())
  .then(data => {
    // Update the HTML elements with the current weather data
    const temp = data.main.temp;
    tempElement.textContent = `${temp} °C`;
    
    const condition = data.weather[0].description;
    conditionElement.textContent = condition; 
    
    const humidity = data.main.humidity;
    humidityElement.textContent = `${humidity}%`; 
    icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  });

// Fetch the forecast data from the API
fetch(forecastAPI)
  .then(response => response.json())
  .then(data => {
    // Get the forecast for the next 3 days
    const forecast = data.list.filter((item) => item.dt_txt.includes('12:00:00')).slice(0, 3);
    
    // Update the HTML element with the forecast data
    forecast.forEach((item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
      const temp = item.main.temp;
      const li = document.createElement('li');
      li.textContent = `${date}: ${temp} °C`;
      forecastElement.appendChild(li);
    });
  }); 



// Get the current date and format it as "MM/DD/YYYY"
let currentDate = new Date();
let formattedDate = (currentDate.getMonth() + 1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear();

// Find the footer element and add the date to it
let footer = document.querySelector("footer");
let dateSpan = document.createElement("span");
dateSpan.textContent = "Last modified: " + formattedDate;
footer.appendChild(dateSpan);