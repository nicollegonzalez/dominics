const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');
let counter = 1;
let size = carouselImages[counter].clientWidth;
const carouselTimer = 4000;



// Translate x positioning to correct first image
carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px';

// Init Carousel Loop
startCarousel();

// instead of the ES6 wat ()=> you can do function(){}
arrowRight.addEventListener('click',()=>{
  slideRight();
});

arrowLeft.addEventListener('click',()=>{
  slideLeft();
});

carouselSlide.addEventListener('transitionend', ()=>{
  // console.log('fired');
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = "none";
    size = carouselImages[counter].clientWidth;
    counter = carouselImages.length -2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
  }

  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = "none";
    size = carouselImages[counter].clientWidth;
    counter = carouselImages.length -counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
  }
})

function slideLeft() {
  if(counter <= 0) return;
  carouselSlide.style.transition = "transform 0.6s ease-in-out";
  size = carouselImages[counter].clientWidth;
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
}

function slideRight() {
  if(counter >= carouselImages.length-1) return;
  carouselSlide.style.transition = "transform 0.6s ease-in-out";
  size = carouselImages[counter].clientWidth;
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
}

function startCarousel() {
  carouselLoop = setInterval(function(){
    slideRight();
  }, carouselTimer);

  document.getElementById('arrow-left').onclick = function () {
    clearInterval(carouselLoop);
    carouselLoop = setInterval(function(){
      slideLeft();
    }, carouselTimer)
  }

  document.getElementById("arrow-right").onclick = function () {
    clearInterval(carouselLoop);
    carouselLoop = setInterval(function(){
      slideRight();
    }, carouselTimer)
  }
}




// Old vanilla carousel with loop worked well but didn't have slide feature
// let sliderImages = document.querySelectorAll(".slide");
// const arrowLeft = document.querySelector("#arrow-left");
// const arrowRight = document.querySelector("#arrow-right");
// let current = 0;
// let previous = 0;
// let carouselTimer = 3000;


// // Clear all images
// function reset() {
//   for (let i = 0; i < sliderImages.length; i++) {
//     sliderImages[i].style.display = "none";
//   }
// }

// // Init Carousel Loop
// function startCarousel() {
//   reset();
//   sliderImages[0].style.display = "block";
//   carouselLoop = setInterval(function(){
//     if (current === sliderImages.length - 1) {
//       previous = current;
//       current = -1;
//     }

//     slideRight();
//   }, carouselTimer);

//   document.getElementById("arrow-left").onclick = function () {
//     clearInterval(carouselLoop);
//     carouselLoop = setInterval(function(){
//       if (current === sliderImages.length - 1) {
//         previous = current;
//         current = -1;
//       }
  
//       slideRight();
//     }, carouselTimer)
//   }

//   document.getElementById("arrow-right").onclick = function () {
//     clearInterval(carouselLoop);
//     carouselLoop = setInterval(function(){
//       if (current === sliderImages.length - 1) {
//         previous = current;
//         current = -1;
//       }
  
//       slideRight();
//     }, carouselTimer)
//   }
// }



// // Show prev
// function slideLeft() {
//   reset();
//   sliderImages[current - 1].style.display = "block";
//   current--;
// }

// // Show next
// function slideRight() {
//   reset();
//   sliderImages[current + 1].style.display = "block";
//   current++;
// }


// // Left arrow click
// if(arrowLeft !== null){
//   arrowLeft.addEventListener("click", function() {
    
//     if (current === 0 && sliderImages != 0) {
//       previous = current;
//       current = sliderImages.length;
//     }
//     slideLeft();
//   });

// // Right arrow click
//   arrowRight.addEventListener("click", function() {
//     if (current === sliderImages.length - 1) {
//       previous = current;
//       current = -1;
//     }
//     slideRight();
//   });

//   startCarousel();

  
// }