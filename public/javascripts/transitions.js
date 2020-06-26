const hamburgers = document.querySelectorAll('.hamburger');
const hamburgerSmallScreen = document.querySelector('.hamburger:last-of-type');
const hamburgerLargeScreen = document.querySelector('.hamburger:first-of-type');
const mainContent = document.querySelector('.main-content');
const navMenu = document.querySelector('.nav-menu');
const navMenuLargeScreen = document.querySelector('.nav-menu-large-screen');
const mainContentChildren = document.querySelector('.main-content-body');
const scrollContainer = document.getElementById("main-content-body");
const navBar = document.querySelector('nav');
const logo = document.querySelector('.logo');

hamburgerSmallScreen.addEventListener('click', function(e){
  hamburgerSmallScreen.classList.toggle('hamburger-opened');
  hamburgerLargeScreen.classList.toggle('hamburger-opened');
  mainContent.classList.toggle('hamburger-opened');
  navMenu.classList.toggle('hamburger-opened');
  navBar.classList.toggle('hamburger-opened');
  navMenuLargeScreen.classList.toggle('hidden');
});

hamburgerLargeScreen.addEventListener('click', function(e){
  hamburgerSmallScreen.classList.toggle('hamburger-opened');
  hamburgerLargeScreen.classList.toggle('hamburger-opened');
  mainContent.classList.toggle('hamburger-opened');
  navMenu.classList.toggle('hamburger-opened');
  navBar.classList.toggle('hamburger-opened');
  navMenuLargeScreen.classList.toggle('hidden');
});

mainContentChildren.addEventListener('click', function(e){
  hamburgerSmallScreen.classList.remove('hamburger-opened');
  hamburgerLargeScreen.classList.remove('hamburger-opened');
  mainContent.classList.remove('hamburger-opened');
  navMenu.classList.remove('hamburger-opened');
  navBar.classList.remove('hamburger-opened');
  navMenuLargeScreen.classList.add('hidden');
});
  
scrollContainer.onscroll = function() {
  navBar.classList.toggle("scrolled", scrollContainer.scrollTop > navBar.clientHeight);
  logo.classList.toggle("scrolled", scrollContainer.scrollTop > navBar.clientHeight);
};


//scroll to 1
window.scrollTo( 0, 1 );
var scrollTop = 1,
  getScrollTop = function(){
    return win.pageYOffset || win.document.compatMode === "CSS1Compat" && win.document.win.document.scrollTop || win.document.body.scrollTop || 0;
  },

  //reset to 0 on bodyready, if needed
  bodycheck = setInterval(function(){
    if( win.document.body ){
      clearInterval( bodycheck );
      scrollTop = getScrollTop();
      win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
    }	
  }, 15 );