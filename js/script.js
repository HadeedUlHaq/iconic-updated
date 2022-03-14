var openn = document.querySelector(".menubar");
var responsivemenu = document.querySelector(".modalnav");
var close = document.querySelector(".close");
openn.addEventListener("click", () => {
  responsivemenu.style.display = "block";
});
close.addEventListener("click", () => {
  responsivemenu.style.display = "none";
});
