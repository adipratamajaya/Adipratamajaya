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
  const navNya = document.querySelector("header");


  bodyNight.classList.toggle('night');
  navNya.classList.toggle('night');
})

mamanRacing.addEventListener("click", () => {
  mamanRacing.classList.toggle("open")
})
