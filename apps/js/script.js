const mamanRacing = document.querySelector("#nengDonat");
const aElemnt = document.querySelector(".navigasi_");

// funciton hamburgerna
mamanRacing.addEventListener("click", () => {

    const menu = document.querySelector(".navigasi_");
// aksinya
    menu.classList.toggle("menu");
    mamanRacing.classList.toggle("open");
  })

  aElemnt.addEventListener("click", ()=> {

    const menu = aElemnt;
    menu.classList.remove("menu");
    mamanRacing.classList.remove("open");

  })