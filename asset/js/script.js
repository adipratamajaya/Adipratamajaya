const mamanRacing = document.querySelector("#nengDonat");
const powerRaginang = document.querySelector(".modeNight");

powerRaginang.addEventListener("click", ()=> {
  const rangerMerah = document.querySelector('main');
  const birunya = document.querySelector("#kata_ganti");
  const navNya = document.querySelector("header");
  const me = document.querySelector(".des_");
  const headernya = document.querySelector("footer");
  const plusnya = document.querySelector(".plus_");
  const projectNya = document.querySelector(".clinet");


  rangerMerah.classList.toggle('night');
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
