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
  mainContentChildren.classList.toggle('hambuger-opened');
  navMenu.classList.toggle('hamburger-opened');
  navBar.classList.toggle('hamburger-opened');
  navMenuLargeScreen.classList.toggle('hidden');
  // .classList.remove('hidden');
});

hamburgerLargeScreen.addEventListener('click', function(e){
  hamburgerSmallScreen.classList.toggle('hamburger-opened');
  hamburgerLargeScreen.classList.toggle('hamburger-opened');
  mainContent.classList.toggle('hamburger-opened');
  mainContentChildren.classList.toggle('hambuger-opened');
  navMenu.classList.toggle('hamburger-opened');
  navBar.classList.toggle('hamburger-opened');
  navMenuLargeScreen.classList.toggle('hidden');
});

mainContentChildren.addEventListener('click', function(e){
  hamburgerSmallScreen.classList.remove('hamburger-opened');
  hamburgerLargeScreen.classList.remove('hamburger-opened');
  mainContent.classList.remove('hamburger-opened');
  mainContentChildren.classList.toggle('hambuger-opened');
  navMenu.classList.remove('hamburger-opened');
  navBar.classList.remove('hamburger-opened');
  navMenuLargeScreen.classList.add('hidden');
});
  
console.log(scrollContainer);
scrollContainer.onscroll = function() {
  navBar.classList.toggle("scrolled", scrollContainer.scrollTop > navBar.clientHeight);
  logo.classList.toggle("scrolled", scrollContainer.scrollTop > navBar.clientHeight);
};
// scrollContainer.onscroll = function() {
//   console.log('scrolling');
//   // window.scrollTo(0, 1);
//   navBar.classList.toggle("scrolled", scrollContainer.scrollTop > navBar.clientHeight);
//   logo.classList.toggle("scrolled", scrollContainer.scrollTop > navBar.clientHeight);
// };

// // window.scrollTo(0,1);
// window.addEventListener("load",function() {
//   setTimeout(function() {
//       window.scrollTo(0, 1);
//   }, 1000);
// });