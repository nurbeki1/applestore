const btn = document.querySelector("#btn");
const menu = document.querySelector("#menu");

console.log("SAs");
btn.addEventListener("click", function () {
  menu.classList.toggle("menu_burg");
});
