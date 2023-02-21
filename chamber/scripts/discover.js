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
 {threshold: 0.9}
);  
imgElements.forEach((img) =>lazyLoadingObserver.observe(img));

 
// initialize display elements
const todayDisplay = document.querySelector("#today");
const visitsDisplay = document.querySelector("#visits");
const daysLeftOutput = document.querySelector("#daysleft"); 



 // Get the current date
 const currentDate = new Date();

 // Get the last visit date from local storage
 const lastVisit = localStorage.getItem('lastVisit');
 
 // If there is no last visit date in local storage, set it to the current date
 if (!lastVisit) {
   localStorage.setItem('lastVisit', currentDate);
 } else {
   // Calculate the number of days since the last visit
   const daysSinceVisit = Math.round((currentDate - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
   
   // Display the number of days on the page
   const daysSinceVisitElement = document.getElementById('days-since-visit');
   daysSinceVisitElement.textContent = daysSinceVisit;
   
   // Update the last visit date in local storage to the current date
   localStorage.setItem('lastVisit', currentDate);
 }