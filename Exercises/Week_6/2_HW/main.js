let nav = document.getElementById("navBar");
let iBar = document.getElementById("iBar");
iBar.addEventListener("click", () => {
  nav.classList.toggle("dis-none");
});
let plus = document.getElementById("plus");
let plusPage = document.getElementById("plusPage");
plus.addEventListener("click",() => {
plusPage.classList.remove("dis-none");
});
let plusBack = document.getElementById("plusBack");
plusBack.addEventListener("click",() => {
  plusPage.classList.add("dis-none");
  });