let body = document.getElementById("body");
let showAdd = document.getElementById("showAdd");
let add = document.getElementById("add");
let createPerson = document.getElementById("createP");
let formData = document.getElementById("form");
let error = document.getElementById("error");
// merge personData and additionalPersonData
function merge() {
  let merge = [];
  for (const iterator of personData) {
    for (const iterator2 of additionalPersonData) {
      if (iterator.uid === iterator2.uid) {
        merge.push({ ...iterator, ...iterator2 });
      }
    }
  }
  return merge;
}
//create html
function render() {
  let html = "";
  for (const person of result) {
    html += createHtml(person);
  }
  body.innerHTML = html;
}
function createHtml({
  firstName,
  lastName,
  city,
  phoneNumber,
  uid,
  position,
  postalCode,
}) {
  return `<tr>
            <td>${uid}</td>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${phoneNumber}</td>
            <td>${position}</td>
            <td>${postalCode}</td>
            <td>${city}</td>
            <td><button id="button">Delete</button></td>
          </tr>`;
}
//====================event handler
// add new person
function addPerson() {
  const object = {};
  if (result.find(({ uid }) => uid.toString() === formData.children[1].value)) {
    error.classList.remove("success");
    error.classList.add("fail");
    error.innerText = "uid is exist enter another one";
  } else {
    for (const element of formData.children) {
      if (
        element.tagName === "INPUT" &&
        element !== formData.lastElementChild
      ) {
        object[element.name] = element.value;
        element.value = "";
      }
    }
    result.push(object);
    error.classList.remove("fail");
    error.classList.add("success");
    error.innerText = "Successfull";
    render();
  }
}
//show add section
function showAddSection(params) {
  if (add.classList.contains("dis-none")) {
    add.classList.remove("dis-none");
    showAdd.innerText = "To Close The Create Form Please Press";
    showAdd.classList.add("state2-button");
    error.classList.remove("success");
    error.classList.remove("fail");
    error.innerText = "";
  } else {
    showAdd.innerText = "To Create New Person Please Press";
    showAdd.classList.remove("state2-button");
    add.classList.add("dis-none");
  }
}
//delete person
function deletePerson(event) {
  if (event.target.id === "button") {
    function data({uid}) {
      return uid.toString() ===
        
          event.target.parentElement.parentElement.firstElementChild.innerText
        ;
    }
    result.splice(result.findIndex(data), 1);
    render();
  }
}
//=======================
// call
const result = merge();
render();
//events
showAdd.addEventListener("click", showAddSection);
formData.addEventListener("submit", addPerson);
body.addEventListener("click", deletePerson);
