 // Select all images with the class 'lazy'
const lazyImages = document.querySelectorAll('[data-src]');

// Create a function to load the image
function loadLazyImage(image) {
  // Get the image source from the 'data-src' attribute
  const src = image.getAttribute('data-src');
  if (!src) {
    return;
  }
  
  // Load the image and replace the 'src' attribute
  image.src = src;
  
  // Remove the 'lazy' class
  image.classList.remove('lazy');
}

// Create a function to handle the scroll event
function handleScroll() {
  // Loop through all the lazy images
  lazyImages.forEach((image) => {
    // Check if the image is in the viewport
    const bounding = image.getBoundingClientRect();
    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      // If the image is in the viewport, load it
      loadLazyImage(image);
    }
  });
}

// Add an event listener for the 'scroll' event
window.addEventListener('scroll', handleScroll); 

// initialize display elements
const todayDisplay = document.querySelector("#today");
const visitsDisplay = document.querySelector("#visits");
const daysLeftOutput = document.querySelector("#daysleft");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls")); // Using the Number() function ensures that if the storage item does not exist, it will be converted into a zero (0) which helps on the if block condition.

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date demonstration
todayDisplay.textContent = Date.now();
//84600000 equals the number of miliseconds in one day.

// Days until Christmas
let today = new Date();
let christmas = new Date(today.getFullYear(), 11, 25);
// check if is the waing days of December, if so ... change to next year.
if (today.getMonth() == 11 && today.getDate() > 25) {
	christmas.setFullYear(christmas.getFullYear() + 1);
}

let daysleft = (christmas.getTime() - Date.now()) / 84600000;

daysLeftOutput.innerHTML = `${daysleft.toFixed(
	0
)} days<br> 🎄Christmas is ${christmas}`;
 





const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}; 
document.getElementById('currentdate').textContent=new Date().toLocaleDateString('en-Us', options); 


// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
