let left = document.getElementById("left");
let button = document.getElementById("button");
let body = document.getElementById("body");
let counter = 0;
let twoImage = [];
let saveTwoImage = [];
let yourName = "";
let html = "";
const imgSource = [
  "public/angular.svg",
  "public/aurelia.svg",
  "public/backbone.svg",
  "public/ember.svg",
  "public/react.svg",
  "public/vue.svg",
];
const imgSource2 = imgSource.slice();
//======
button.firstElementChild.addEventListener("click", newGame);
button.lastElementChild.addEventListener("click", clearBoard);
left.addEventListener("click", cardChange);
function cardChange(event) {
  if (event.target.tagName !== "IMG") return;
  let src = event.target.src;
  if (src.slice(src.indexOf("public")) !== "public/js.svg") return;
  event.target.classList.add("rotate");
  const random = Math.floor(Math.random() * imgSource2.length);
  let img = imgSource2[random];
  setTimeout(() => {
    event.target.src = img;
  }, 100);
  if (!twoImage[0]) {
    twoImage[0] = img;
  } else if (!twoImage[1]) {
    twoImage[1] = img;
  }
  if (twoImage.length === 2) {
    if (twoImage[0] === twoImage[1]) {
      saveTwoImage.push(twoImage[0]);
      imgSource2.splice(imgSource2.indexOf(twoImage[0]), 1);
    }
    setTimeout(reset, 1400);
    left.removeEventListener("click", cardChange);
    setTimeout(() => {
      left.addEventListener("click", cardChange);
    }, 1400);
    counter++;
    twoImage = [];
    if (saveTwoImage.length === 6) {
      yourName = prompt("enter your name");
      createElement();
    }
  }
}

function newGame() {
  saveTwoImage = [];
  imgSource2.splice(0, imgSource2.length);
  imgSource2.push(...imgSource);
  counter = 0;
  reset();
}
function createElement() {
  html += `<tr>
            <td>${yourName}</td>
            <td>${counter}</td>
           </tr>`;
  body.innerHTML = html;
}
function clearBoard() {
  body.innerHTML = "";
}
function reset() {
  let src;
  for (const element of left.children) {
    src = element.src.slice(element.src.indexOf("public"));
    if (!saveTwoImage.includes(src) && !src.includes("public/js.svg")) {
      element.src = "public/js.svg";
      element.classList.remove("rotate");
    }
  }
}
