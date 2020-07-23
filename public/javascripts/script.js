const pathName = window.location.pathname;
const hamburgers = document.querySelectorAll('.hamburger');
const hamburgerSmallScreen = document.querySelector('.hamburger:last-of-type');
const hamburgerLargeScreen = document.querySelector('.hamburger:first-of-type');
const informationHeader = document.querySelector('#information-header');
const wrapper = document.querySelector('#wrapper');
const navMenu = document.querySelector('#rightNav');
const navMenuLargeScreen = document.querySelector('.nav-menu-large-screen');
const mainContent = document.querySelector('#mainContent');
// const scrollContainer = document.getElementById("main-content-body");
const scrollContainer = document.getElementById("scrollingSegment");
const navBar = document.querySelector('#header');
const logo = document.querySelector('#header .logo');
const footer= document.querySelector('#footer');

const locations = [
  {title: "Dominic's Pizza & Pasta I", lat: 26.369428, lng:  -80.1726854, address: {street:"8177 Glades Rd #19", city:"Boca Raton", state:"Florida"}, number: '(561) 487-3186', addressURL: 'https://goo.gl/maps/TsiBJ26DMMoG2Uj66'},
  {title: "Dominic's Pizza & Pasta II", lat: 26.3653671, lng:  -80.1999743, address: {street:"9834 West Glades Road", city:"Boca Raton", state:"Florida"}, number: '(561) 487-6325', addressURL: 'https://goo.gl/maps/vdq8R1JBkwNW5FHR8'},
  {title: "Dominic's Pizza & Pasta III", lat: 26.5711936, lng:  -80.1474034, address: {street:"6566 Hypoluxo Road", city:"Lake Worth", state:"Florida"}, number: '(561) 641-1110', addressURL: 'https://goo.gl/maps/2LqXPSy16fx1jN238'},
  {title: "Dominic's Pizza & Pasta IV", lat: 26.5441955, lng: -80.090206, address: {street:"1790 North Congress Avenue", city:"Boynton Beach", state:"Florida"}, number: '(561) 734-3033', addressURL: 'https://goo.gl/maps/xenEMwiqNQkvLV9p6'},
]

hamburgerSmallScreen.addEventListener('click', function(e){
  hamburgerSmallScreen.classList.toggle('hamburger-opened');
  hamburgerLargeScreen.classList.toggle('hamburger-opened');
  informationHeader.classList.toggle('hamburger-opened');
  wrapper.classList.toggle('hamburger-opened');
  navMenu.classList.toggle('hamburger-opened');
  navBar.classList.toggle('hamburger-opened');
  mainContent.classList.toggle('hamburger-opened');
  logo.classList.toggle('hamburger-opened');
  footer.classList.toggle('hamburger-opened');
  navMenuLargeScreen.classList.toggle('hidden');
});
hamburgerLargeScreen.addEventListener('click', function(e){
  hamburgerSmallScreen.classList.toggle('hamburger-opened');
  hamburgerLargeScreen.classList.toggle('hamburger-opened');
  informationHeader.classList.toggle('hamburger-opened');
  wrapper.classList.toggle('hamburger-opened');
  navMenu.classList.toggle('hamburger-opened');
  navBar.classList.toggle('hamburger-opened');
  mainContent.classList.toggle('hamburger-opened');
  logo.classList.toggle('hamburger-opened');
  footer.classList.toggle('hamburger-opened');
  navMenuLargeScreen.classList.toggle('hidden');
});


mainContent.addEventListener('click', function(e){
  hamburgerSmallScreen.classList.remove('hamburger-opened');
  hamburgerLargeScreen.classList.remove('hamburger-opened');
  mainContent.classList.remove('hamburger-opened');
  navMenu.classList.remove('hamburger-opened');
  informationHeader.classList.remove('hamburger-opened');
  wrapper.classList.remove('hamburger-opened');
  navBar.classList.remove('hamburger-opened');
  mainContent.classList.remove('hamburger-opened');
  logo.classList.remove('hamburger-opened');
  footer.classList.remove('hamburger-opened');
  navMenuLargeScreen.classList.add('hidden');
});


window.onload = function() {
  

  navMenuLargeScreen.style.top = (informationHeader.clientHeight - window.scrollY) +'px';
  if( pathName == "/about" || pathName == "/careers" || pathName == "/locations" ){
    logo.classList.add("scrolled");
    navBar.classList.toggle("scrolled");
  }
}

window.onscroll = function(){
  // console.log("Window is scrolling");
  if(window.scrollY <= informationHeader.clientHeight){
    navMenuLargeScreen.style.top = (informationHeader.clientHeight - window.scrollY) +'px';
  }else {
    navMenuLargeScreen.style.top = 0 +'px';
  }
  
  if( pathName != "/about" && pathName != "/careers" && pathName != "/locations"){
    navBar.classList.toggle("scrolled", window.scrollY > navBar.clientHeight + informationHeader.clientHeight || window.pageYOffset > navBar.clientHeight + informationHeader.clientHeight);
    logo.classList.toggle("scrolled", window.scrollY > navBar.clientHeight + informationHeader.clientHeight || window.pageYOffset > navBar.clientHeight + informationHeader.clientHeight);
  }
}





startMap();

function startMap() {
  // Initialize the map

  if(document.getElementById('map')){
    const mapCenter = { lat: 26.47960075, lng: -80.1468382,};
    const map = new google.maps.Map(document.getElementById('map'), 
      {
        zoom: 11,
        center: mapCenter
      }
    );

    // Add Markers
    for(let i = 0; i < locations.length; i++){
      addMarker(locations[i], map);
    }
  }
  

  for(let i=0; i<4; i++){
    const elementID = "map"+ (i+1);
    // console.log(elementID);
    if(document.getElementById(elementID)){
      const locationMap = new google.maps.Map(document.getElementById(elementID), 
      {
        zoom: 15,
        center: { lat: locations[i].lat, lng: locations[i].lng},
      }
      );
      addMarker(locations[i], locationMap);

      break;
    }
   

  }


 
  // addMarker Function
  function addMarker(location, theMap){
    const marker = new google.maps.Marker({
      position: {lat:location.lat, lng:location.lng},
      map: theMap,
      // icon: '../images/D.png',
    });

    const infowindow = new google.maps.InfoWindow({
      content: `<div class="map-info-window">
      <h4 class="title">${location.title}</h4>
      <div class="address">
          <h4>Address:</h4>
          <a href="${location.addressURL}" target="_blank">
              <div>${location.address.street}</div>
              <div>${location.address.city}, ${location.address.state}</div>
          </a>
      </div>
      <div class="Contact">
          <h4>Phone:</h4><span></span>
          <div><a href="tel:${location.number}">${location.number}</a></div>
      </div>
      </div>`
    });
    marker.addListener('click', function(){
      infowindow.open(theMap, marker)
    })
  }

    
}




// const pathName = window.location.pathname;
let size;
let counter;
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');
const carouselTimer = 4000;
if(pathName ==  "/"){
  console.log(pathName);
  counter = 1;
  size = carouselImages[counter].clientWidth;
  
  // Translate x positioning to correct first image
  if(carouselImages[counter] != undefined){
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px';
  }

  // Init Carousel Loop
  startCarousel();
  // setTimeout(startCarousel(), 3000);

  // instead of the ES6 way ()=> you can do function(){}
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

};