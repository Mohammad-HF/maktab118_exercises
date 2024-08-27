export let card = document.getElementById("card");
export let showModule = document.getElementById("showModule");
import { main } from "./../main.js";
let allSumPrice = 0;
let offIsSet;
export function sumCard(food) {
  //to save object in localStorage they should string
  let sum = food.reduce((accumulative, current, index) => {
    localStorage.setItem(index, JSON.stringify(current));
    return (accumulative += current.sum);
  }, 0);
  setCard(sum);
}

function setCard(sum) {
  let wage = sum * 0.05;
  allSumPrice = sum + wage;
  card.children[1].innerText = sum + " تومان";
  card.children[3].innerText = wage + " تومان";
  card.children[5].innerText = 0 + " درصد";
  card.children[8].children[1].innerText = allSumPrice + " تومان";
  if (sum !== 0) {
    checkOff("false");
  }
}
export function checkOff(userSelectOff) {
  let off = card.children[6].firstElementChild.value;
  let sumAndOff = 0;
  card.children[7].innerText = "";
  card.children[7].classList.remove("backG-error");
  if (errorHandle(userSelectOff, off) !== "") return;
  switch (off) {
    case "":
      sumAndOff = allSumPrice;
      card.children[5].innerText = 0 + " درصد";
      break;
    case "gold":
      sumAndOff = (allSumPrice * 70) / 100;
      card.children[5].innerText = 30 + " درصد";
      break;
    case "silver":
      sumAndOff = (allSumPrice * 80) / 100;
      card.children[5].innerText = 20 + " درصد";
      break;
    case "bronze":
      sumAndOff = (allSumPrice * 90) / 100;
      card.children[5].innerText = 10 + " درصد";
      break;
  }
  card.children[8].children[1].innerText = sumAndOff + " تومان";
  offIsSet = off;
}
function errorHandle(userSelectOff, off) {
  if (allSumPrice === 0) {
    card.children[7].classList.add("backG-error");
    return (card.children[7].innerText = "هنوز غذایی انتخاب نکردید");
  } else if (off === "" && userSelectOff === "true") {
    card.children[7].classList.add("backG-error");
    card.children[7].innerText = "لطفا کد تخیف را وارد کنید";
    return "";
  } else if (off === "") {
    return "exit";
  } else if (off !== "gold" && off !== "silver" && off !== "bronze") {
    card.children[7].classList.add("backG-error");
    return (card.children[7].innerText = "کد تخفیف صحیح نمی باشد");
  } else if (off === offIsSet && userSelectOff === "true") {
    card.children[7].classList.add("backG-error");
    return (card.children[7].innerText = "کد تخفیف اعمال شده است");
  } else return "";
}
export function submitBuy() {
  if (allSumPrice === 0) {
    return errorHandle(1, 2);
  }
  localStorage.clear();
  showModule.classList.remove("display-none");
  main.classList.add("filterEvent-blurNone");
}
