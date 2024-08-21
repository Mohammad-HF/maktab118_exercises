let input = document.getElementById("input");
let submit = document.getElementById("submit");
let clock = document.getElementById("clock");
let button = document.getElementById("button");
let error = document.getElementById("error");
let menu = document.getElementById("menu");
let minValue = document.getElementById("minValue");
let audio = document.getElementById("audio");
let volum = document.getElementById("volum");
let set;
let mainSecond = 0;
//create template clock
function createClock() {
  let second = mainSecond;
  let min = 0;
  let sec = 0;
  let hour = 0;
  while (second) {
    if (second >= 3600) {
      hour = Math.floor(second / 3600);
      second %= 3600;
    } else if (second >= 60) {
      min = Math.floor(second / 60);
      second %= 60;
    } else {
      sec = second;
      second -= second;
    }
  }
  clock.innerText = `${hour.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}
//======================event handler
button.children[1].addEventListener("click", count);
button.children[0].addEventListener("click", reset);
//event for click audio
volum.addEventListener("click", () => {
  if (!audio.paused) {
    audio.pause();
    volum.children[0].className = "fa fa-volume-off fa-2x";
    volum.classList.remove("play");
  }
});
//event for submit button
submit.addEventListener("click", () => {
  if (input.value <= 0) return error.classList.remove("dis-none");
  error.classList.add("dis-none");
  reset();
  mainSecond = Number(input.value);
  mainSecond *= 60;
  mainSecond = Math.floor(mainSecond);
  createClock();
});

//event for start and stop button
function count() {
  if (mainSecond <= 0) return error.classList.remove("dis-none");
  error.classList.add("dis-none");
  if (button.children[1].innerText === "Start") {
    button.children[1].innerText = "Stop";
    button.children[1].classList.add("red");
    let myPromise = new Promise((resolve, reject) => {
      set = setInterval(() => {
        mainSecond--;
        createClock();
        if (mainSecond === 0) {
          reset();
          audio.play();
          volum.children[0].className = "fa fa-volume-up fa-2x";
          setTimeout(resolve, 16.5 * 1000);
          volum.classList.add("play");
        }
      }, 1000);
    });
    myPromise.then(() => {
      volum.classList.remove("play");
      volum.children[0].className = "fa fa-volume-off fa-2x";
    });
  } else {
    clearInterval(set);
    button.children[1].innerText = "Start";
    button.children[1].classList.remove("red");
  }
}
//reset timer
function reset() {
  clearInterval(set);
  button.children[1].innerText = "Start";
  button.children[1].classList.remove("red");
  clock.innerText = "00:00:00";
  mainSecond = 0;
}
//default values
menu.addEventListener("change", () => {
  switch (menu.value) {
    case "0":
      reset();
      minValue.classList.add("dis-none");
      error.classList.add("dis-none");
      mainSecond = 0;
      createClock();
      break;
    case "1":
      reset();
      mainSecond = 60;
      minValue.classList.add("dis-none");
      error.classList.add("dis-none");
      createClock();
      break;
    case "2":
      reset();
      mainSecond = 300;
      minValue.classList.add("dis-none");
      error.classList.add("dis-none");
      createClock();
      break;
    case "3":
      reset();
      mainSecond = 600;
      minValue.classList.add("dis-none");
      error.classList.add("dis-none");
      createClock();
      break;
    case "4":
      reset();
      mainSecond = 900;
      minValue.classList.add("dis-none");
      error.classList.add("dis-none");
      createClock();
      break;
    case "5":
      reset();
      mainSecond = 1200;
      minValue.classList.add("dis-none");
      error.classList.add("dis-none");
      createClock();
      break;
    case "6":
      reset();
      minValue.classList.remove("dis-none");
      error.classList.add("dis-none");
      break;
  }
});
