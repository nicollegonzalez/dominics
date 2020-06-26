let sliderImages = document.querySelectorAll(".slide");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
let current = 0;
let carouselTimer = 3000;


// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init Carousel Loop
function startCarousel() {
  reset();
  sliderImages[0].style.display = "block";
  carouselLoop = setInterval(function(){
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    
    slideRight();
  }, carouselTimer);

  document.getElementById("arrow-left").onclick = function () {
    clearInterval(carouselLoop);
    carouselLoop = setInterval(function(){
      if (current === sliderImages.length - 1) {
        current = -1;
      }
  
      slideRight();
    }, carouselTimer)
  }

  document.getElementById("arrow-right").onclick = function () {
    clearInterval(carouselLoop);
    carouselLoop = setInterval(function(){
      if (current === sliderImages.length - 1) {
        current = -1;
      }
  
      slideRight();
    }, carouselTimer)
  }
}



// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}


// Left arrow click
if(arrowLeft !== null){
  arrowLeft.addEventListener("click", function() {
    
    if (current === 0 && sliderImages != 0) {
      current = sliderImages.length;
    }
    slideLeft();
  });

// Right arrow click
  arrowRight.addEventListener("click", function() {
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  });

  startCarousel();

  
}



