// const pathName = window.location.pathname;
let size;
let counter;
let carouselSlide;
let carouselImages;
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
const carouselTimer = 4000;
let translateX;

window.addEventListener("load", (event) => {
  console.log("Finished loading");
  if (pathName == "/") {
    // console.log(pathName);

    carouselSlide = document.querySelector(".carousel-slide");
    carouselImages = document.querySelectorAll(".slide");
    counter = 1;
    size = carouselImages[counter].clientWidth;

    // Translate x positioning to correct first image
    if (carouselImages[counter] != undefined) {
      carouselSlide.style.transform = "translateX(" + -size * counter + "px";
    }

    // Init Carousel Loop
    startCarousel();
    // setTimeout(startCarousel(), 3000);

    // instead of the ES6 way ()=> you can do function(){}
    arrowRight.addEventListener("click", () => {
      slideRight();
    });

    arrowLeft.addEventListener("click", () => {
      slideLeft();
    });

    carouselSlide.addEventListener("transitionend", () => {
      // console.log('fired');
      if (carouselImages[counter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        size = carouselImages[counter].clientWidth;
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
      }

      if (carouselImages[counter].id === "firstClone") {
        carouselSlide.style.transition = "none";
        size = carouselImages[counter].clientWidth;
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
      }
    });

    function slideLeft() {
      if (counter <= 0) return;
      carouselSlide.style.transition = "transform 0.6s ease-in-out";
      size = carouselImages[counter].clientWidth;
      counter--;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    }

    function slideRight() {
      if (counter >= carouselImages.length - 1) return;
      carouselSlide.style.transition = "transform 0.6s ease-in-out";
      size = carouselImages[counter].clientWidth;
      counter++;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    }

    function startCarousel() {
      carouselLoop = setInterval(function () {
        slideRight();
      }, carouselTimer);

      document.getElementById("arrow-left").onclick = function () {
        clearInterval(carouselLoop);
        carouselLoop = setInterval(function () {
          slideRight();
        }, carouselTimer);
      };

      document.getElementById("arrow-right").onclick = function () {
        clearInterval(carouselLoop);
        carouselLoop = setInterval(function () {
          slideRight();
        }, carouselTimer);
      };
    }
  } else if (
    pathName == "/locations/dominicsIV" ||
    pathName == "/locations/dominicsIII" ||
    pathName == "/locations/dominicsII" ||
    pathName == "/locations/dominicsI"
  ) {
    carouselSlide = document.querySelector(".gallery-carousel-slide");
    carouselImages = document.querySelectorAll(".gallery-slide");
    counter = 1;
    size = carouselImages[counter].clientWidth;
    translateX = -size * counter + size / 2;
    // Translate x positioning to correct first image
    if (carouselImages[counter] != undefined) {
      carouselSlide.style.transform = "translateX(" + translateX + "px";
    }

    // Init Carousel Loop
    startCarousel();
    // setTimeout(startCarousel(), 3000);

    // instead of the ES6 way ()=> you can do function(){}
    arrowRight.addEventListener("click", () => {
      slideRight();
    });

    arrowLeft.addEventListener("click", () => {
      slideLeft();
    });

    carouselSlide.addEventListener("transitionend", () => {
      if (carouselImages[counter].className === "gallery-slide lastClone") {
        console.log(carouselImages[counter].className);
        carouselSlide.style.transition = "none";
        size = carouselImages[counter].clientWidth;
        counter = carouselImages.length - 2;
        translateX = -size * counter + size / 2;
        carouselSlide.style.transform = "translateX(" + translateX + "px)";
      }

      if (carouselImages[counter].className === "gallery-slide firstClone") {
        console.log(carouselImages[counter].className);
        carouselSlide.style.transition = "none";
        size = carouselImages[counter].clientWidth;
        counter = carouselImages.length - counter;
        translateX = -size * counter + size / 2;
        carouselSlide.style.transform = "translateX(" + translateX + "px)";
      }
    });

    function slideLeft() {
      if (counter <= 0) return;
      carouselSlide.style.transition = "transform 0.6s ease-in-out";
      size = carouselImages[counter].clientWidth;
      counter--;
      translateX = -size * counter + size / 2;
      carouselSlide.style.transform = "translateX(" + translateX + "px)";
    }

    function slideRight() {
      if (counter >= carouselImages.length - 1) return;
      // console.log(carouselSlide);
      carouselSlide.style.transition = "transform 0.6s ease-in-out";
      size = carouselImages[counter].clientWidth;
      counter++;
      translateX = -size * counter + size / 2;
      carouselSlide.style.transform = "translateX(" + translateX + "px)";
    }

    function startCarousel() {
      carouselLoop = setInterval(function () {
        slideRight();
      }, carouselTimer);

      document.getElementById("arrow-left").onclick = function () {
        clearInterval(carouselLoop);
        carouselLoop = setInterval(function () {
          slideRight();
        }, carouselTimer);
      };

      document.getElementById("arrow-right").onclick = function () {
        clearInterval(carouselLoop);
        carouselLoop = setInterval(function () {
          slideRight();
        }, carouselTimer);
      };
    }
  }
});
