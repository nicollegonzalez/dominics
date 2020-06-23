 







document.getElementById("carousel").onmouseenter = function () {
  clearInterval(startCarousel);
}

document.getElementById("carousel").onmouseleave = function () {
  startCarousel = setInterval(function(){
    carouselLoop();
  }, carouselTimer)
}