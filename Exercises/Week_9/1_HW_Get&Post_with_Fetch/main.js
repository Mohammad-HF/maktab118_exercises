import "./style.css";
let getShow = document.getElementById("getShow");
let reqForm = document.getElementById("reqForm");
let reqBody = document.getElementById("reqBody");
let postShow = document.getElementById("postShow");
let error = document.getElementById("error");
reqForm.children[1].addEventListener("change", showReqBody);
function showReqBody(event) {
  if (event.target.value === "get") {
    getShow.innerHTML = " ";
    postShow.classList.add("dis-none");
    getShow.classList.remove("dis-none");
  } else {
    while (postShow.children.length > 1) {
      postShow.lastElementChild.remove();
    }
    postShow.insertAdjacentHTML("afterend", "");
    getShow.classList.add("dis-none");
    postShow.classList.remove("dis-none");
  }
}

//============solution 2 with fetch & FormData
reqForm.addEventListener("submit", connectServer);
async function connectServer(event) {
  event.preventDefault();
  let formData = new FormData(reqForm);
  if (formData.get("serverUrl") === "") {
    return (error.innerText = "please enter url");
  }
  if (formData.get("method") === "post" && reqBody.value === "") {
    return (error.innerText = "please enter body");
  }
  if (
    !/^[\],:{}\s]*$/.test(
      reqBody.value
        .replace(/\\["\\\/bfnrtu]/g, "@")
        .replace(
          /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          "]"
        )
        .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
    )
  ) {
    return (error.innerText = "body is not true");
  } 
  error.innerText = "";
  let response;
  try {
    if (formData.get("method") === "post") {
      formData.append(`${reqBody.name}`, `${reqBody.value}`);
      response = await fetch(`${formData.get("serverUrl")}`, {
        method: formData.get("method"),
        body: formData.get("reqBody"),
        headers: { "Content-Type": "application/json" },
      });
      console.log(formData.get("reqBody"));
    } else {
      response = await fetch(`${formData.get("serverUrl")}`, {
        method: formData.get("method"),
      });
    }
    let body = await response.json();
    body = JSON.stringify(body, null, 2);
    let status = response.status;
    let contentType = response.headers.get("content-type");
    render(body, status, contentType, formData.get("method"));
  } catch (error) {
    render(error)
  }
}

function render(body, status = "", contentType = "", method = "") {
  let html = "";
 if (contentType !== "") {
  contentType = contentType.split("/")[1];
  contentType = contentType.split(";")[0];
 }
  let width = method === "get" ? "width-md-50pe" : "";
  html += `<div class="${width} " id="resBody">
  <p>Response Body :</p><div class="body overflowY-auto max-h" id="body">
    ${body}
   </div>
</div>
<div class="status grid-md-cols-12 grid-md-start-1 grid-md-end-3">Plain Text : ${contentType.toUpperCase()} , Status: 
   ${status}
   </div>`;
  if (method === "get") {
    getShow.innerHTML = html;
  } else {
    postShow.innerHTML += html;
  }
}
