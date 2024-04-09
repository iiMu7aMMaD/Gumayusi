const menuToggle = document.querySelector(".toggle");
const main = document.querySelector(".main");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  main.classList.toggle("active");
});
