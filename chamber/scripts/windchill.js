function calculateWindChill() {
  var temperature = document.getElementById("temperature").textContent;
  var windSpeed = document.getElementById("windspeed").textContent;

  if (temperature <= 50 && windSpeed > 3.0) {
    var windChillFactor = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    document.getElementById("windchill").textContent = windChillFactor.toFixed(2) + "°F";
  } else {
    document.getElementById("windchill").textContent = "N/A";
  }
}

calculateWindChill();
 




