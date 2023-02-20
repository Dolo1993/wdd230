document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  let lazyImageObserver;

  const lazyLoad = function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.removeAttribute('data-src');
        lazyImageObserver.unobserve(lazyImage);
      }
    });
  };

  if ('IntersectionObserver' in window) {
    lazyImageObserver = new IntersectionObserver(lazyLoad);
    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback for older browsers that don't support IntersectionObserver
    let lazyImagesArray = Array.from(lazyImages);
    window.addEventListener('scroll', function() {
      lazyImagesArray = lazyImagesArray.filter(function(lazyImage) {
        if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== 'none') {
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.removeAttribute('data-src');
          return false;
        } else {
          return true;
        }
      });
      if (lazyImagesArray.length === 0) {
        window.removeEventListener('scroll', lazyLoad);
      }
    });
  }
});