import "./style.css";
import { createFood, numberFood } from "./entities/food.js";
import {
  sumCard,
  checkOff,
  submitBuy,
  card,
  showModule,
} from "./entities/card.js";
export let main = document.getElementById("main");
let foodList = document.getElementById("foodList");
let ok = document.getElementById("ok");
foodList.innerHTML = createFood(sumCard);
let foods = document.querySelectorAll(".food");
//primisify
function listener(event) {
  let myPromise = new Promise((resolve, reject) => {
    numberFood(event, resolve);
  });
  myPromise.then(sumCard);
}
foodList.addEventListener("click", listener);
card.children[6].lastElementChild.addEventListener("click", () =>
  checkOff("true")
);
card.lastElementChild.addEventListener("click", submitBuy);
ok.addEventListener("click", () => {
  showModule.classList.add("display-none");
  main.classList.remove("filterEvent-blurNone");
  location.reload();
});
