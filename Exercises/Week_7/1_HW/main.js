let myPromise = new Promise((resolve, reject) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const responseBody = JSON.parse(this.responseText);
      resolve(responseBody);
    } else if (this.readyState === 4) {
      reject("Something went wrong");
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
  xhttp.send();
});
let main = document.getElementById("all");
myPromise
  .then((body) => {
    render(body);
  })
  .catch((error) => {
    main.innerText = error ;
    main.classList.add("error");
  });
function render(album) {
  let html = "";
  for (const pic of album) {
    html += createHtml(pic);
  }
  main.innerHTML = html;
}

function createHtml(pic) {
  return ` <div class="main">
        <p>${pic.id}</p>
        <p>${pic.title}</p>
        <img src="${pic.thumbnailUrl}" alt="">
        <div><a href="${pic.url}">link</a></div> </div>`;
}
