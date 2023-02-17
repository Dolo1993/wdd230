const lazyImages = document.querySelectorAll('img[data-src');

const lazyLoad = (image) => {
  image.src = image.dataset.src;
  image.classList.remove('lazy');
};

const options = {
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      lazyLoad(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, options);

lazyImages.forEach((image) => {
  observer.observe(image);
});