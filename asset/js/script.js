const mamanRacing = document.querySelector("#nengDonat");
const powerRaginang = document.querySelector(".modeNight");
// hamburger
const burgerking = document.querySelector("#nengDonat");

burgerking.addEventListener("click", () => {
  // Menu Navigasinya
  const nav_menu = document.querySelector("#nav_menu");
  nav_menu.classList.toggle("show");
})

powerRaginang.addEventListener("click", ()=> {
const bodyNight = document.querySelector("body");
  const birunya = document.querySelector("#kata_ganti");
  const navNya = document.querySelector("header");
  const me = document.querySelector(".des_");
  const headernya = document.querySelector("footer");
  const plusnya = document.querySelector(".plus_");
  const projectNya = document.querySelector(".clinet");
  const textProfile = document.querySelector(".text_profile");
  const landing = document.querySelector(".landing__");


  textProfile.classList.toggle("night");
  landing.classList.toggle("night");
  bodyNight.classList.toggle('night');
  birunya.classList.toggle('night');
  navNya.classList.toggle('night');
  me.classList.toggle(`night`);
  headernya.classList.toggle('night');
  plusnya.classList.toggle('night');
  projectNya.classList.toggle("night");
})

mamanRacing.addEventListener("click", () => {
  mamanRacing.classList.toggle("open")
})
