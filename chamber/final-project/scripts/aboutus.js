// Get the current date and format it as "MM/DD/YYYY"
let currentDate = new Date();
let formattedDate = (currentDate.getMonth() + 1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear();

// Find the footer element and add the date to it
let footer = document.querySelector("footer");
let dateSpan = document.createElement("span");
dateSpan.textContent = "Last modified: " + formattedDate;
footer.appendChild(dateSpan);