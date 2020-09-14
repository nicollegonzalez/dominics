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
const footer = document.querySelector('#footer');
const careersApplicationBtn = document.querySelector('#careers-application-btn');
const careersApplication = document.querySelector('#career-application-form');
const printApplicationBtn = document.querySelector('#print-application-btn');
const locationGallary = document.querySelector('.gallary');

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


if(careersApplicationBtn){
  careersApplicationBtn.addEventListener('click', function(e){
    careersApplication.classList.toggle('none');
  })
  
  console.log(careersApplication);
  console.log(careersApplicationBtn);
  console.log(printApplicationBtn);
  printApplicationBtn.addEventListener('click',function(e){
    let form = document.getElementById("career-application-form");
    let name = form.name.value;
    let address = form.address.value;
    let phoneNumber = form.phonenumber.value;
    let cellPhone = form.cellnumber.value;
    let position = form.position.value;
    let wageRequirement = form.wagerequirement.value;
    let fullPartTime = form.fullparttime.value;
    let firstTimeInput = form.firsttimeinput.value;
    let firstTimeYesInput = form.firsttimeyesinput.value;
    let currentlyEmployed = form.currentlyemployed.value;
    let currentlyEmployedYes = form.currentlyemployedyes.value;
    let terminated = form.terminated.value;
    let age = form.age.value;
    let misdemeanorFelony = form.misdemeanorfelony.value;
    let tobaccoAlcoholViolation = form.tobaccoalcoholviolation.value;
    let drugsUse = form.drugsuse.value;
    let drugsTest = form.drugstest.value;
    let heavyLifting = form.heavylifting.value;
    let healthConditions = form.healthconditions.value;
    let highSchool = form.highschool.value;
    let highSchoolStartDate = form.highschoolstartdate.value;
    let highSchoolEndDate = form.highschoolenddate.value;
    let highSchoolGraduate = form.highschoolgraduate.value;
    let college = form.college.value;
    let collegeStartDate = form.collegestartdate.value;
    let collegeEndDate = form.collegeenddate.value;
    let collegeGraduate = form.collegegraduate.value;
    let tradeSchool = form.tradeschool.value;
    let tradeSchoolStartDate = form.tradeschoolstartdate.value;
    let tradeSchoolEndDate = form.tradeschoolenddate.value;
    let tradeSchoolGraduate = form.tradeschoolgraduate.value;
    let attendingSchool = form.attendingschool.value;
    let previousEmploymentName1 = form.previousemploymentname1.value;
    let previousEmploymentPosition1 = form.previousemploymentposition1.value;
    let previousEmploymentWage1 = form.previousemploymentwage1.value;
    let previousEmploymentStartDate1 = form.previousemploymentstartdate1.value;
    let previousEmploymentEndDate1 = form.previousemploymentenddate1.value;
    let previousEmploymentLeft1 = form.previousemploymentleft1.value;
    let previousEmploymentResponsibilities1 = form.previousemploymentresponsibilities1.value;
    let previousEmploymentContactPermision1 = form.previousemploymentcontactpermision1.value;
    let previousEmploymentContactName1 = form.previousemploymentcontactname1.value;
    let previousEmploymentContactNumber1 = form.previousemploymentcontactnumber1.value;
    let previousEmploymentName2 = form.previousemploymentname2.value;
    let previousEmploymentPosition2 = form.previousemploymentposition2.value;
    let previousEmploymentWage2 = form.previousemploymentwage2.value;
    let previousEmploymentStartDate2 = form.previousemploymentstartdate2.value;
    let previousEmploymentEndDate2 = form.previousemploymentenddate2.value;
    let previousEmploymentLeft2 = form.previousemploymentleft2.value;
    let previousEmploymentResponsibilities2 = form.previousemploymentresponsibilities2.value;
    let previousEmploymentContactPermision2 = form.previousemploymentcontactpermision2.value;
    let previousEmploymentContactName2 = form.previousemploymentcontactname2.value;
    let previousEmploymentContactNumber2 = form.previousemploymentcontactnumber2.value;
    let previousEmploymentName3 = form.previousemploymentname3.value;
    let previousEmploymentPosition3 = form.previousemploymentposition3.value;
    let previousEmploymentWage3 = form.previousemploymentwage3.value;
    let previousEmploymentStartDate3 = form.previousemploymentstartdate3.value;
    let previousEmploymentEndDate3 = form.previousemploymentenddate3.value;
    let previousEmploymentLeft3 = form.previousemploymentleft3.value;
    let previousEmploymentResponsibilities3 = form.previousemploymentresponsibilities3.value;
    let previousEmploymentContactPermision3 = form.previousemploymentcontactpermision3.value;
    let previousEmploymentContactName3 = form.previousemploymentcontactname3.value;
    let previousEmploymentContactNumber3 = form.previousemploymentcontactnumber3.value;
    let refernceName1 = form.referncename1.value;
    let refernceNumber1 = form.referncenumber1.value;
    let refernceRelationship1 = form.referncerelationship1.value;
    let refernceName2 = form.referncename2.value;
    let refernceNumber2 = form.referncenumber2.value;
    let refernceRelationship2 = form.referncerelationship2.value;
    let refernceName3 = form.referncename3.value;
    let refernceNumber3 = form.referncenumber3.value;
    let refernceRelationship3 = form.referncerelationship3.value;
    let whiteWine = form.whitewine.value;
    let redWine = form.redwine.value;
    let blushWine = form.blushwine.value;
    let italianDishes = form.italiandishes.value;
  
    console.log(name);
    console.log(address);
    console.log(phoneNumber);
    console.log(cellPhone);
    console.log(position);
    console.log(wageRequirement);
    console.log(fullPartTime);
    console.log(firstTimeInput);
    console.log(firstTimeYesInput);
    console.log(currentlyEmployed);
    console.log(currentlyEmployedYes);
    console.log(terminated);
    console.log(age);
    console.log(misdemeanorFelony);
    console.log(tobaccoAlcoholViolation);
    console.log(drugsUse);
    console.log(drugsTest);
    console.log(heavyLifting);
    console.log(healthConditions);
    console.log(highSchool);
    console.log(highSchoolStartDate);
    console.log(highSchoolEndDate);
    console.log(highSchoolGraduate);
    console.log(college);
    console.log(collegeStartDate);
    console.log(collegeEndDate);
    console.log(collegeGraduate);
    console.log(tradeSchool);
    console.log(tradeSchoolStartDate);
    console.log(tradeSchoolEndDate);
    console.log(tradeSchoolGraduate);
    console.log(attendingSchool);
    console.log(previousEmploymentName1);
    console.log(previousEmploymentPosition1);
    console.log(previousEmploymentWage1);
    console.log(previousEmploymentStartDate1);
    console.log(previousEmploymentEndDate1);
    console.log(previousEmploymentLeft1);
    console.log(previousEmploymentResponsibilities1);
    console.log(previousEmploymentContactPermision1);
    console.log(previousEmploymentContactName1);
    console.log(previousEmploymentContactNumber1);
    console.log(previousEmploymentName2);
    console.log(previousEmploymentPosition2);
    console.log(previousEmploymentWage2);
    console.log(previousEmploymentStartDate2);
    console.log(previousEmploymentEndDate2);
    console.log(previousEmploymentLeft2);
    console.log(previousEmploymentName3);
    console.log(previousEmploymentPosition3);
    console.log(previousEmploymentWage3);
    console.log(previousEmploymentStartDate3);
    console.log(previousEmploymentEndDate3);
    console.log(previousEmploymentLeft3);
    console.log(previousEmploymentResponsibilities3);
    console.log(previousEmploymentContactPermision3);
    console.log(previousEmploymentContactName3);
    console.log(previousEmploymentContactNumber3);
    console.log(refernceName1);
    console.log(refernceNumber1);
    console.log(refernceRelationship1);
    console.log(refernceName2);
    console.log(refernceNumber2);
    console.log(refernceRelationship2);
    console.log(refernceName3);
    console.log(refernceNumber3);
    console.log(refernceRelationship3);
    console.log(whiteWine);
    console.log(redWine);
    console.log(blushWine);
    console.log(italianDishes);
  
    window.print();
  })
}


if(pathName.indexOf("/locations/") !== -1){
  if(pathName.indexOf("/locations/dominicsIV") !== -1){
    console.log("HI IV");
    locationGallary.innerHTML += `
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-1.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-2.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-3.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-4.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-5.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-6.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-7.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-8.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-9.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-10.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-11.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-12.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-13.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-14.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-15.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-16.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-18.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-23.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-25.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-26.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-27.jpg" alt="" class="thumbnail">
    `;
  }
  else if(pathName.indexOf("/locations/dominicsIII") !== -1){
    console.log("HI III");
    locationGallary.innerHTML += `
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-1.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-2.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-3.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-4.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-5.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-6.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-7.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-8.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-9.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-10.jpg" alt="" class="thumbnail">
    `
  }
  else if(pathName.indexOf("/locations/dominicsII") !== -1){
    console.log("HI II");
    locationGallary.innerHTML += `
    <img src="/images/dominicsII/DominicsPizzaPastaII-1.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsII/DominicsPizzaPastaII-2.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsII/DominicsPizzaPastaII-3.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsII/DominicsPizzaPastaII-4.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsII/DominicsPizzaPastaII-5.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsII/DominicsPizzaPastaII-6.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsII/DominicsPizzaPastaII-7.jpg" alt="" class="thumbnail">
    `
  }
  else if(pathName.indexOf("/locations/dominicsI") !== -1){
    console.log("HI I");
    locationGallary.innerHTML += `
    <img src="/images/dominicsI/DominicsPizzaPastaI-1.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsI/DominicsPizzaPastaI-2.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsI/DominicsPizzaPastaI-3.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsI/DominicsPizzaPastaI-4.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsI/DominicsPizzaPastaI-5.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsI/DominicsPizzaPastaI-6.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsI/DominicsPizzaPastaI-7.jpg" alt="" class="thumbnail">
    <img src="/images/dominicsI/DominicsPizzaPastaI-8.jpg" alt="" class="thumbnail">
    `
  }
};

// if(pathName.indexOf("/locations/dominics") !== -1){
//   console.log()
// }



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
  // console.log(pathName);
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

function myPrint(frm) {
  var printdata = document.getElementById(frm);
  newwin = window.open("");
  newwin.document.write(printdata.outerHTML);
  newwin.print();
  newwin.close();
}