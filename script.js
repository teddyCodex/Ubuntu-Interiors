let mainEl = document.getElementById("main");
let footerEl = document.getElementById("footer");
let subNav = document.getElementById("sub-nav");

function myFunction(x) {
  x.classList.toggle("change");
  mainEl.classList.toggle("hidden");
  footerEl.classList.toggle("hidden");
  subNav.classList.toggle("hidden");
}
