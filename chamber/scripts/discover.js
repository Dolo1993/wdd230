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






const imgElements = document.querySelectorAll("img[data-src]"); 
const lazyLoadingObserver=new IntersectionObserver(
  (entries, observer)=>{ 
    console.log(entries);  
    entries.forEach((entry) => { 
    if (!entry.isIntersecting)return; 
    entry.target.src = entry.target.dataset.src; 
    entry.target.addEventListener('load',()=>{
      entry.target.classList.remove('gallery-img')
   })
  });  
 }, 
 {threshold: 0.8}
);  
imgElements.forEach((img) =>lazyLoadingObserver.observe(img));

 

