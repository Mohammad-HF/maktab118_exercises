export function createFood(callBack) {
  let html = "";
  if (localStorage.length !== 0) {
    for (const key in localStorage) {
      if (isNaN(key)) break;
      food[key] = JSON.parse(localStorage.getItem(key));
    }
    callBack(food);
  }
  food.forEach((element) => {
    html += `<div data-id =${element.id} class="food flexD-sm-col alignC-sm-center row-sm-gap10">
        <div class="imgText flexD-sm-col ">
          <img class="alignS-sm-center" src=${element.srcImage} alt="" />
          <div class="text display-sm-flex flexD-sm-col alignC-sm-center">
            <p><b>${element.name}</b></p>
            <p>${element.fee} تومان</p>
            <div class="number" >
              <i class="fa fa-plus " aria-hidden="true"></i>
              <p>${element.number}</p>
              <i class="fa fa-minus" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <p class="alignS-sm-center">${element.sum} تومان</p>
      </div>`;
  });
  return html;
}
export function numberFood(event, callBack) {
  if (event.target.className.includes("fa-plus")) {
    addFood(event.target.parentElement);
    callBack(food);
  } else if (event.target.className.includes("fa-minus")) {
    deleteFood(event.target.parentElement);
    callBack(food);
  }
}
function addFood(parent) {
  let parent1 = parent;
  parent = parent.parentElement;
  parent = parent.parentElement;
  parent = parent.parentElement;
  let idElement = parent.dataset.id;
  let object = food.find(({ id }) => id === Number(idElement));
  parent1.children[1].innerText = ++object.number;
  object.sum = object.fee * object.number;
  parent.lastElementChild.innerText = object.sum + " تومان";
}
function deleteFood(parent) {
  let parent1 = parent;
  parent = parent.parentElement;
  parent = parent.parentElement;
  parent = parent.parentElement;
  let idElement = parent.dataset.id;
  let object = food.find(({ id }) => id === Number(idElement));
  if (object.number > 0) {
    parent1.children[1].innerText = --object.number;
    object.sum = object.fee * object.number;
    parent.lastElementChild.innerText = object.sum + " تومان";
  }
}
const food = [
  {
    id: 12,
    srcImage: "public/hamburger.png",
    name: "همبرگر معمولی",
    fee: 8000,
    number: 0,
    sum: 0,
  },
  {
    id: 16,
    srcImage: "public/hamburger.png",
    name: "همبرگر مخصوص",
    fee: 10000,
    number: 0,
    sum: 0,
  },
  {
    id: 18,
    srcImage: "public/hamburger.png",
    name: "همبرگر معمولی باقارچ و پنیر",
    fee: 10000,
    number: 0,
    sum: 0,
  },
  {
    id: 8,
    srcImage: "public/hamburger.png",
    name: "همبرگر مخصوص با قارچ و پنیر",
    fee: 20000,
    number: 0,
    sum: 0,
  },
  {
    id: 4,
    srcImage: "public/french_fries.png",
    name: "سیب زمینی سرخ کرده",
    fee: 10000,
    number: 0,
    sum: 0,
  },
  {
    id: 1,
    srcImage: "public/french_fries.png",
    name: "سیب زمینی سرخ کرده ویژه",
    fee: 25000,
    number: 0,
    sum: 0,
  },
  {
    id: 33,
    srcImage: "public/soda.png",
    name: "نوشابه",
    fee: 5000,
    number: 0,
    sum: 0,
  },
  {
    id: 70,
    srcImage: "public/soda.png",
    name: "نوشابه رژیمی",
    fee: 6000,
    number: 0,
    sum: 0,
  },
  {
    id: 44,
    srcImage: "public/salad.png",
    name: "سالاد فصل",
    fee: 8000,
    number: 0,
    sum: 0,
  },
  {
    id: 24,
    srcImage: "public/ceasar.png",
    name: "سالاد سزار",
    fee: 25000,
    number: 0,
    sum: 0,
  },
];
