// const openBtn = document.querySelector(".card-project");
// const closeBtn = document.getElementById("close-modal");
// const modal = document.getElementById("modal");

// openBtn.addEventListener("click", () => {
//   modal.classList.add("open");
// });

// closeBtn.addEventListener("click", () => {
//   modal.classList.remove("open");
// });

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// const convas = document.querySelector(".projects-canvas");
// const ctx = convas.getContext("2d");

// ctx.beginPath();
// ctx.moveTo(20, 20);
// ctx.lineTo(30, 100);
// ctx.lineTo(100, 50);
// ctx.fill();

// const header = document.querySelector("header");
// window.addEventListener("scroll", () => {
//   let scrollTop = window.scrollY;

//   if (scrollTop >= 20) {
//     header.classList.add("header-scroll");
//   } else {
//     header.classList.remove("header-scroll");
//   }
// });

const headerFog = document.querySelector(".header-fog");
const bgVideo = document.querySelector(".background-video");

window.addEventListener("scroll", () => {
  console.log("scroll");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  headerFog.style.opacity = 0 + scrollTop / 800;
  bgVideo.style.opacity = 1 - scrollTop / 800;
});
