window.onload = function() {
  var largePicture = document.querySelector('.image-container')
  
  // Load large image
  var imgLarge = new Image();
  imgLarge.src = largePicture.dataset.large; 
  imgLarge.onload = function () {
    imgLarge.classList.add('loaded');  
  };
    imgLarge.classList.add('picture');
  largePicture.appendChild(imgLarge);
}