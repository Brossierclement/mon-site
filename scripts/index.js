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
