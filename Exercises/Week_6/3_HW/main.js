let form = document.getElementById("form");
let tableData = document.getElementById("tableData");
let double = document.getElementById("double");
let doubleRate = document.getElementById("doubleRate");
double.addEventListener("click", sortArr);
doubleRate.addEventListener("click", sortArr2);
let arr = [];
function submit() {
  let objs = {};
  if (form.children[0].value === "" || form.children[1].value === "") {
    return document.getElementById("error").innerText = "please enter each two input";
  }
  if (arr.find(el=>(el.name === form.children[0].value)) ) {
    return document.getElementById("error").innerText = "This video already exist";
  }
  for (const element of form.children) {
    if (form.lastElementChild === element) break;
    objs[element.name] = element.value;
  }
  arr.push(objs);
  console.log(arr);
  document.getElementById("error").innerText = "";
  render();
}
function render() {
  let text = "";
  tableData.style.display = "grid";
  tableData.innerHTML = rows();
  function rows() {
    let index;
    for (const row of arr) {
      index = arr.indexOf(row);
      text += `<div>${row.name}</div>
          <div>${row.rate}</div>  
          <div class="delete"><button data-i="${index}">delete</button></div>`;
    }
    return text;
  }
}
//delegation
tableData.addEventListener("click", (event) => {
  if (event.target.dataset.i) {
    arr.splice(event.target.dataset.i, 1);
  }

  render();
});
function sortArr() {
  arr.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  render();
}
function sortArr2() {
  arr.sort((a, b) => a.rate - b.rate);
  render();
}
