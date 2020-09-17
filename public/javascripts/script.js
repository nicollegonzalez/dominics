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
const inputs = document.getElementsByTagName('input');
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


if(pathName.indexOf("/careers") !== -1){
  careersApplicationBtn.addEventListener('click', function(e){
    careersApplication.classList.toggle('none');
  })
  
  printApplicationBtn.addEventListener('click',function(e){
    console.log("HERE 1!!!");
    function adjustHeight(textareaElement, minHeight) {
      // compute the height difference which is caused by border and outline
      var outerHeight = parseInt(window.getComputedStyle(textareaElement).height, 10);
      console.log("&&&&&&& Outer Height", outerHeight);
      if(outerHeight >= 17){
      
        var diff = outerHeight - textareaElement.clientHeight;
        console.log("$$$$$$$",diff);
  
        // set the height to 0 in case of it has to be shrinked
        textareaElement.style.height = 0;
      
        // set the correct height
        // el.scrollHeight is the full height of the content, not just the visible part
        console.log("$$$$$$$$$ Scroll Height", textareaElement.scrollHeight);
        textareaElement.style.height = Math.max(minHeight, textareaElement.scrollHeight - (diff * 2)) + 'px';
        console.log("$%$%$%$%:",textareaElement.style.height);
      }
    }


    var textAreas = [].slice.call(document.querySelectorAll('textarea'));

    textAreas.forEach(function(el) {

      // we need box-sizing: border-box, if the textarea has padding
      el.style.boxSizing = el.style.mozBoxSizing =  el.style.webkitBoxSizing = 'border-box';

      // we don't need any scrollbars, do we? :)
      el.style.overflowY = 'hidden';

      // the minimum height initiated through the "rows" attribute
      var minHeight = 17;
      console.log("&%&$&$&%&^&$ Min Height:", minHeight);
      
      adjustHeight(el, minHeight);

    });


    window.print();
    

    setTimeout(function () {
      console.log("AFTER PRINTING!!!!");
      console.log("HERE 2!!!");
      function adjustHeight(textareaElement, minHeight) {
        // compute the height difference which is caused by border and outline
        var outerHeight = parseInt(window.getComputedStyle(textareaElement).height, 10);
        console.log("outerHeight",outerHeight);
        if(outerHeight < 195 ){
          outerHeight = 195;
          console.log("outerHeight NEW***",outerHeight);
          // textareaElement.clientHeight = 106;
          console.log("clientHeight:", textareaElement.clientHeight);
        }
        if(outerHeight >= 195){
          var diff = outerHeight - (outerHeight - 2);
          console.log("diff",diff);
    
          // set the height to 0 in case of it has to be shrinked
          textareaElement.style.height = 0;
        
          // set the correct height
          // el.scrollHeight is the full height of the content, not just the visible part
          textareaElement.style.height = Math.max(minHeight, textareaElement.scrollHeight + diff) + 'px';
        }
      }
  
  
      // we use the textarea tag as a marker
      var textAreas = [].slice.call(document.querySelectorAll('textarea'));
  
      // iterate through all the textareas on the page
      textAreas.forEach(function(el) {
  
          // we need box-sizing: border-box, if the textarea has padding
          el.style.boxSizing = el.style.mozBoxSizing = 'border-box';
  
          // we don't need any scrollbars, do we? :)
          el.style.overflowY = 'hidden';
  
          // the minimum height initiated through the "rows" attribute
          var minHeight = 108;
  
          // el.addEventListener('input', function() {
          //     adjustHeight(el, minHeight);
          // });
  
          // // we have to readjust when window size changes (e.g. orientation change)
          // window.addEventListener('resize', function() {
          //     adjustHeight(el, minHeight);
          // });
  
          // we adjust height to the initial content
          adjustHeight(el, minHeight);
  
      });

    },1500);



  });

  // console.log(typeof(inputs));
  // console.log((inputs.length));
  
  for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(e){
      let parentElement = inputs[i].parentElement;
      console.log(parentElement);
      if(document.querySelector('#first-time-input').value.toUpperCase() === "YES"){
        document.querySelector('#first-time-yes-input').classList.remove("none");
        console.log(document.querySelector('#first-time-yes-input').previousElementSibling);//.classList.remove("none");
        document.querySelector('#first-time-yes-input').previousElementSibling.classList.remove("none");
      }else{
        document.querySelector('#first-time-yes-input').classList.add("none");
        document.querySelector('#first-time-yes-input').previousElementSibling.classList.add("none");
      }
      if(document.querySelector('#currently-employed-input').value.toUpperCase() === "YES"){
        document.querySelector('#currently-employed-yes-input').classList.remove("none");
        // console.log(document.querySelector('#currently-employed-yes-input').previousElementSibling);//.classList.remove("none");
        document.querySelector('#currently-employed-yes-input').previousElementSibling.classList.remove("none");
      }else{
        document.querySelector('#currently-employed-yes-input').classList.add("none");
        document.querySelector('#currently-employed-yes-input').previousElementSibling.classList.add("none");
      }
      if(document.querySelector('#high-school-input').value !== ""){
        console.log(document.querySelector('#high-school-input').value);
        document.querySelector('#high-school-start-date-input').classList.remove("none");
        document.querySelector('#high-school-start-date-input').previousElementSibling.classList.remove("none");
        document.querySelector('#high-school-start-date-input').nextElementSibling.classList.remove("none");
        document.querySelector('#high-school-end-date-input').classList.remove("none");
        document.querySelector('#high-school-graduate-input').classList.remove("none");
        document.querySelector('#high-school-graduate-input').previousElementSibling.classList.remove("none");
      }else{
        document.querySelector('#high-school-start-date-input').classList.add("none");
        document.querySelector('#high-school-start-date-input').previousElementSibling.classList.add("none");
        document.querySelector('#high-school-start-date-input').nextElementSibling.classList.add("none");
        document.querySelector('#high-school-end-date-input').classList.add("none");
      }
      if(document.querySelector('#college-input').value !== ""){
        console.log(document.querySelector('#college-input').value);
        document.querySelector('#college-start-date-input').classList.remove("none");
        document.querySelector('#college-start-date-input').previousElementSibling.classList.remove("none");
        document.querySelector('#college-start-date-input').nextElementSibling.classList.remove("none");
        document.querySelector('#college-end-date-input').classList.remove("none");
        document.querySelector('#college-graduate-input').classList.remove("none");
        document.querySelector('#college-graduate-input').previousElementSibling.classList.remove("none");
      }else{
        document.querySelector('#college-start-date-input').classList.add("none");
        document.querySelector('#college-start-date-input').previousElementSibling.classList.add("none");
        document.querySelector('#college-start-date-input').nextElementSibling.classList.add("none");
        document.querySelector('#college-end-date-input').classList.add("none");
        document.querySelector('#college-graduate-input').classList.add("none");
        document.querySelector('#college-graduate-input').previousElementSibling.classList.add("none");
      }
      if(document.querySelector('#trade-school-input').value !== ""){
        console.log(document.querySelector('#trade-school-input').value);
        document.querySelector('#trade-school-start-date-input').classList.remove("none");
        document.querySelector('#trade-school-start-date-input').previousElementSibling.classList.remove("none");
        document.querySelector('#trade-school-start-date-input').nextElementSibling.classList.remove("none");
        document.querySelector('#trade-school-end-date-input').classList.remove("none");
        document.querySelector('#trade-school-graduate-input').classList.remove("none");
        document.querySelector('#trade-school-graduate-input').previousElementSibling.classList.remove("none");
      }else{
        document.querySelector('#trade-school-start-date-input').classList.add("none");
        document.querySelector('#trade-school-start-date-input').previousElementSibling.classList.add("none");
        document.querySelector('#trade-school-start-date-input').nextElementSibling.classList.add("none");
        document.querySelector('#trade-school-end-date-input').classList.add("none");
        document.querySelector('#trade-school-graduate-input').classList.add("none");
        document.querySelector('#trade-school-graduate-input').previousElementSibling.classList.add("none");
      }
      if(document.querySelector('#previous-employment-name-1-input').value !== ""){
        console.log(document.querySelector('#previous-employment-name-1-input').value);
        document.querySelector('#previous-employment-position-1-input').classList.remove("none");
        document.querySelector('#previous-employment-position-1-input').previousElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-wage-1-input').classList.remove("none");
        document.querySelector('#previous-employment-wage-1-input').previousElementSibling.classList.remove("none");
        // document.querySelector('#previous-employment-wage-1-input').nextElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-start-date-1-input').classList.remove("none");
        document.querySelector('#previous-employment-start-date-1-input').nextElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-end-date-1-input').classList.remove("none");
        document.querySelector('#previous-employment-left-1-input').classList.remove("none");
        document.querySelector('#previous-employment-left-1-input').previousElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-responsibilities-1-input').classList.remove("none");
        document.querySelector('#previous-employment-responsibilities-1-input').previousElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-contact-permision-1-input').classList.remove("none");
        document.querySelector('#previous-employment-contact-permision-1-input').previousElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-contact-name-1-input').classList.remove("none");
        document.querySelector('#previous-employment-contact-name-1-input').previousElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-contact-number-1-input').classList.remove("none");
        document.querySelector('#previous-employment-contact-number-1-input').previousElementSibling.classList.remove("none");
        // document.querySelector('#').classList.remove("none");
        // document.querySelector('#').nextElementSibling.classList.remove("none");
        
      }else{
        document.querySelector('#previous-employment-position-1-input').classList.add("none");
        document.querySelector('#previous-employment-position-1-input').previousElementSibling.classList.add("none");
        document.querySelector('#previous-employment-wage-1-input').classList.add("none");
        document.querySelector('#previous-employment-wage-1-input').previousElementSibling.classList.add("none");
        // document.querySelector('#previous-employment-wage-1-input').nextElementSibling.classList.add("none");
        document.querySelector('#previous-employment-start-date-1-input').classList.add("none");
        // document.querySelector('#previous-employment-start-date-1-input').previousElementSibling.classList.add("none");
        document.querySelector('#previous-employment-start-date-1-input').nextElementSibling.classList.add("none");
        document.querySelector('#previous-employment-end-date-1-input').classList.add("none");
        document.querySelector('#previous-employment-left-1-input').classList.add("none");
        document.querySelector('#previous-employment-left-1-input').previousElementSibling.classList.add("none");
        document.querySelector('#previous-employment-responsibilities-1-input').classList.add("none");
        document.querySelector('#previous-employment-responsibilities-1-input').previousElementSibling.classList.add("none");
        document.querySelector('#previous-employment-contact-permision-1-input').classList.add("none");
        document.querySelector('#previous-employment-contact-permision-1-input').previousElementSibling.classList.add("none");
        document.querySelector('#previous-employment-contact-name-1-input').classList.add("none");
        document.querySelector('#previous-employment-contact-name-1-input').previousElementSibling.classList.add("none");
        document.querySelector('#previous-employment-contact-number-1-input').classList.add("none");
        document.querySelector('#previous-employment-contact-number-1-input').previousElementSibling.classList.add("none");
      }
      if(document.querySelector('#previous-employment-name-2-input').value !== ""){
        console.log(document.querySelector('#previous-employment-name-2-input').value);
        document.querySelector('#previous-employment-position-2-input').classList.remove("none");
        document.querySelector('#previous-employment-position-2-input').previousElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-wage-2-input').classList.remove("none");
        document.querySelector('#previous-employment-wage-2-input').previousElementSibling.classList.remove("none");
        // document.querySelector('#previous-employment-wage-2-input').nextElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-start-date-2-input').classList.remove("none");
        document.querySelector('#previous-employment-start-date-2-input').nextElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-end-date-2-input').classList.remove("none");
        document.querySelector('#previous-employment-left-2-input').classList.remove("none");
        document.querySelector('#previous-employment-left-2-input').previousElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-responsibilities-2-input').classList.remove("none");
        document.querySelector('#previous-employment-responsibilities-2-input').previousElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-contact-permision-2-input').classList.remove("none");
        document.querySelector('#previous-employment-contact-permision-2-input').previousElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-contact-name-2-input').classList.remove("none");
        document.querySelector('#previous-employment-contact-name-2-input').previousElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-contact-number-2-input').classList.remove("none");
        document.querySelector('#previous-employment-contact-number-2-input').previousElementSibling.classList.remove("none");
        // document.querySelector('#').classList.remove("none");
        // document.querySelector('#').nextElementSibling.classList.remove("none");
        
      }else{
        document.querySelector('#previous-employment-position-2-input').classList.add("none");
        document.querySelector('#previous-employment-position-2-input').previousElementSibling.classList.add("none");
        document.querySelector('#previous-employment-wage-2-input').classList.add("none");
        document.querySelector('#previous-employment-wage-2-input').previousElementSibling.classList.add("none");
        // document.querySelector('#previous-employment-wage-2-input').nextElementSibling.classList.add("none");
        document.querySelector('#previous-employment-start-date-2-input').classList.add("none");
        // document.querySelector('#previous-employment-start-date-2-input').previousElementSibling.classList.add("none");
        document.querySelector('#previous-employment-start-date-2-input').nextElementSibling.classList.add("none");
        document.querySelector('#previous-employment-end-date-2-input').classList.add("none");
        document.querySelector('#previous-employment-left-2-input').classList.add("none");
        document.querySelector('#previous-employment-left-2-input').previousElementSibling.classList.add("none");
        document.querySelector('#previous-employment-responsibilities-2-input').classList.add("none");
        document.querySelector('#previous-employment-responsibilities-2-input').previousElementSibling.classList.add("none");
        document.querySelector('#previous-employment-contact-permision-2-input').classList.add("none");
        document.querySelector('#previous-employment-contact-permision-2-input').previousElementSibling.classList.add("none");
        document.querySelector('#previous-employment-contact-name-2-input').classList.add("none");
        document.querySelector('#previous-employment-contact-name-2-input').previousElementSibling.classList.add("none");
        document.querySelector('#previous-employment-contact-number-2-input').classList.add("none");
        document.querySelector('#previous-employment-contact-number-2-input').previousElementSibling.classList.add("none");
      }
      if(document.querySelector('#previous-employment-name-3-input').value !== ""){
        console.log(document.querySelector('#previous-employment-name-3-input').value);
        document.querySelector('#previous-employment-position-3-input').classList.remove("none");
        document.querySelector('#previous-employment-position-3-input').previousElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-wage-3-input').classList.remove("none");
        document.querySelector('#previous-employment-wage-3-input').previousElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-wage-3-input').nextElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-start-date-3-input').classList.remove("none");
        document.querySelector('#previous-employment-start-date-3-input').nextElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-end-date-3-input').classList.remove("none");
        document.querySelector('#previous-employment-left-3-input').classList.remove("none");
        document.querySelector('#previous-employment-left-3-input').previousElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-responsibilities-3-input').classList.remove("none");
        document.querySelector('#previous-employment-responsibilities-3-input').previousElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-contact-permision-3-input').classList.remove("none");
        document.querySelector('#previous-employment-contact-permision-3-input').previousElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-contact-name-3-input').classList.remove("none");
        document.querySelector('#previous-employment-contact-name-3-input').previousElementSibling.classList.remove("none");
        document.querySelector('#previous-employment-contact-number-3-input').classList.remove("none");
        document.querySelector('#previous-employment-contact-number-3-input').previousElementSibling.classList.remove("none");
        // document.querySelector('#').classList.remove("none");
        // document.querySelector('#').nextElementSibling.classList.remove("none");
        
      }else{
        document.querySelector('#previous-employment-position-3-input').classList.add("none");
        document.querySelector('#previous-employment-position-3-input').previousElementSibling.classList.add("none");
        document.querySelector('#previous-employment-wage-3-input').classList.add("none");
        document.querySelector('#previous-employment-wage-3-input').previousElementSibling.classList.add("none");
        // document.querySelector('#previous-employment-wage-3-input').nextElementSibling.classList.add("none");
        document.querySelector('#previous-employment-start-date-3-input').classList.add("none");
        // document.querySelector('#previous-employment-start-date-3-input').previousElementSibling.classList.add("none");
        document.querySelector('#previous-employment-start-date-3-input').nextElementSibling.classList.add("none");
        document.querySelector('#previous-employment-end-date-3-input').classList.add("none");
        document.querySelector('#previous-employment-left-3-input').classList.add("none");
        document.querySelector('#previous-employment-left-3-input').previousElementSibling.classList.add("none");
        document.querySelector('#previous-employment-responsibilities-3-input').classList.add("none");
        document.querySelector('#previous-employment-responsibilities-3-input').previousElementSibling.classList.add("none");
        document.querySelector('#previous-employment-contact-permision-3-input').classList.add("none");
        document.querySelector('#previous-employment-contact-permision-3-input').previousElementSibling.classList.add("none");
        document.querySelector('#previous-employment-contact-name-3-input').classList.add("none");
        document.querySelector('#previous-employment-contact-name-3-input').previousElementSibling.classList.add("none");
        document.querySelector('#previous-employment-contact-number-3-input').classList.add("none");
        document.querySelector('#previous-employment-contact-number-3-input').previousElementSibling.classList.add("none");
      }
      if(document.querySelector('#refernce-name-1-input').value !== ""){
        document.querySelector('#refernce-number-1-input').classList.remove("none");
        document.querySelector('#refernce-number-1-input').previousElementSibling.classList.remove("none");
        document.querySelector('#refernce-relationship-1-input').classList.remove("none");
        document.querySelector('#refernce-relationship-1-input').previousElementSibling.classList.remove("none");
        // document.querySelector('#').classList.remove("none");
        // document.querySelector('#').nextElementSibling.classList.remove("none");
        
      }else{
        document.querySelector('#refernce-number-1-input').classList.add("none");
        document.querySelector('#refernce-number-1-input').previousElementSibling.classList.add("none");
        document.querySelector('#refernce-relationship-1-input').classList.add("none");
        document.querySelector('#refernce-relationship-1-input').previousElementSibling.classList.add("none");
      }
      if(document.querySelector('#refernce-name-2-input').value !== ""){
        document.querySelector('#refernce-number-2-input').classList.remove("none");
        document.querySelector('#refernce-number-2-input').previousElementSibling.classList.remove("none");
        document.querySelector('#refernce-relationship-2-input').classList.remove("none");
        document.querySelector('#refernce-relationship-2-input').previousElementSibling.classList.remove("none");
        // document.querySelector('#').classList.remove("none");
        // document.querySelector('#').nextElementSibling.classList.remove("none");
        
      }else{
        document.querySelector('#refernce-number-2-input').classList.add("none");
        document.querySelector('#refernce-number-2-input').previousElementSibling.classList.add("none");
        document.querySelector('#refernce-relationship-2-input').classList.add("none");
        document.querySelector('#refernce-relationship-2-input').previousElementSibling.classList.add("none");
      }
      if(document.querySelector('#refernce-name-3-input').value !== ""){
        document.querySelector('#refernce-number-3-input').classList.remove("none");
        document.querySelector('#refernce-number-3-input').previousElementSibling.classList.remove("none");
        document.querySelector('#refernce-relationship-3-input').classList.remove("none");
        document.querySelector('#refernce-relationship-3-input').previousElementSibling.classList.remove("none");
        // document.querySelector('#').classList.remove("none");
        // document.querySelector('#').nextElementSibling.classList.remove("none");
        
      }else{
        document.querySelector('#refernce-number-3-input').classList.add("none");
        document.querySelector('#refernce-number-3-input').previousElementSibling.classList.add("none");
        document.querySelector('#refernce-relationship-3-input').classList.add("none");
        document.querySelector('#refernce-relationship-3-input').previousElementSibling.classList.add("none");
      }
        
    });
  };


  (function() {
    function adjustHeight(textareaElement, minHeight) {
      console.log("HERE 3!!!");
      // compute the height difference which is caused by border and outline
      var outerHeight = parseInt(window.getComputedStyle(textareaElement).height, 10);
      console.log("outerHeight",outerHeight);
      if(outerHeight < 108){
        outerHeight = 108;
      }
      if(outerHeight >= 108){
        console.log("outerHeight*",outerHeight);
        var diff = outerHeight - textareaElement.clientHeight;
        // console.log("diff",diff);
  
        // set the height to 0 in case of it has to be shrinked
        textareaElement.style.height = 0;
      
        // set the correct height
        // el.scrollHeight is the full height of the content, not just the visible part
        // console.log("Scroll Height:",textareaElement.scrollHeight);
        textareaElement.style.height = Math.max(minHeight, textareaElement.scrollHeight + diff) + 'px';
      }
    }


    // we use the textarea tag as a marker
    var textAreas = [].slice.call(document.querySelectorAll('textarea'));

    // iterate through all the textareas on the page
    textAreas.forEach(function(el) {

        // we need box-sizing: border-box, if the textarea has padding
        el.style.boxSizing = el.style.mozBoxSizing = 'border-box';

        // we don't need any scrollbars, do we? :)
        el.style.overflowY = 'hidden';

        // the minimum height initiated through the "rows" attribute
        var minHeight = 108;
        console.log("minHeight",minHeight)

        el.addEventListener('input', function() {
            adjustHeight(el, minHeight);
            console.log("input",minHeight)
        });

        // we have to readjust when window size changes (e.g. orientation change)
        window.addEventListener('resize', function() {
            adjustHeight(el, minHeight);
            console.log("resize",minHeight)
        });

        // we adjust height to the initial content
        adjustHeight(el, minHeight);

    });
  }());

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





