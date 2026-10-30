"use strict";

const menuIcon = document.querySelector(".menu-icon");
const aside = document.querySelector(".asd");

menuIcon.addEventListener("click", function () {
  aside.classList.toggle("asdactive");

  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
});
