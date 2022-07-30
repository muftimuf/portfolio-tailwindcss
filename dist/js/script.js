// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger Button
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Change Navbar Link Color
const sectionHome = document.getElementById("home");
const sectionAbout = document.getElementById("about");
const sectionPortfolio = document.getElementById("portfolio");
const sectionClients = document.getElementById("clients");
const sectionBlog = document.getElementById("blog");
const sectionContact = document.getElementById("contact");
let linkHome = document.querySelector(".link-home");
let linkAbout = document.querySelector(".link-about");
let linkPortfolio = document.querySelector(".link-portfolio");
let linkClients = document.querySelector(".link-clients");
let linkBlog = document.querySelector(".link-blog");
let linkContact = document.querySelector(".link-contact");
