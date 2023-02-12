function calculateWindChill() {
    // Get temperature and wind speed from input fields
    var temperature = document.getElementById("temperature").value;
    var windSpeed = document.getElementById("windSpeed").value;
  
    // Check if the input values meet the specification limits
    if (temperature <= 50 && windSpeed > 3) {
      // Calculate wind chill factor using the formula
      var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
  
      // Round the wind chill factor to 1 decimal place
      windChill = windChill.toFixed(1);
  
      // Display the wind chill factor
      document.getElementById("weather").innerHTML = "Wind Chill: " + windChill + "°F";
    } else {
      // Display "N/A" if the input values do not meet the requirements
      document.getElementById("weather").innerHTML = "N/A";
    }
  }