 // Select all images with the class 'lazy'
const lazyImages = document.querySelectorAll('img[data-src]');

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