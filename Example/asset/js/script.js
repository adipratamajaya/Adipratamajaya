// alert("website under display improvement 😝")

const mamanRacing = document.querySelector("#nengDonat");
const powerRaginang = document.querySelector(".modeNight");

powerRaginang.addEventListener("click", ()=> {
  const rangerMerah = document.querySelector('main');
  const birunya = document.querySelector("#kata_ganti");
  const navNya = document.querySelector("header");
  const me = document.querySelector(".des_");


  rangerMerah.classList.toggle('night');
  birunya.classList.toggle('night');
  navNya.classList.toggle('night');
  me.classList.toggle(`night`);
})

mamanRacing.addEventListener("click", () => {
  mamanRacing.classList.toggle("open")
})