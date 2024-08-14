const root = document.getElementById("root");
const main = document.createElement("main");
main.style.width = "1100px";
main.style.margin= "0 auto"
document.body.style.cssText =
  "  margin: 0; padding: 0; box-sizing: border-box;";
//==============================================header
function header() {
  const header = document.createElement("header");
  const p = document.createElement("p");
  p.setAttribute("style", "margin :0;");
  p.innerText = "Responsive Web";
  header.style.cssText =
    "color: rgb(223, 223, 223); background-color: #4c4ff8;text-align: center;height: 100px;line-height: 90px;font-size: 30px; ";
  header.appendChild(p);
  main.appendChild(header);
}

//================================================================= sectionOne one div
function sectionOne() {
  const section = document.createElement("section");
  section.style.cssText =
    "   display: flex; margin-top: 20px; column-gap: 20px; ";
  section.className = "sectionOne";
  const oneTitle = document.createElement("div");
  oneTitle.className = "oneTitle";
  section.appendChild(oneTitle);
  const h4 = document.createElement("h4");
  h4.innerText = "title";
  oneTitle.appendChild(h4);
  const pSectionOne = document.createElement("p");
  pSectionOne.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta," +
    "  possimus sed temporibus voluptate rerum hic culpa quis quasi unde " +
    "commodi doloremque nemo repellat beatae magnam inventore odit" +
    "  incidunt laboriosam impedit!";
  oneTitle.appendChild(pSectionOne);
  //================================sectionOne two div
  const twoTitle = document.createElement("div");
  section.appendChild(twoTitle);
  const h4twoTitle = document.createElement("h4");
  h4twoTitle.innerText = "title";
  twoTitle.appendChild(h4twoTitle);
  const pSectiontwo = document.createElement("p");
  pSectiontwo.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta," +
    "  possimus sed temporibus voluptate rerum hic culpa quis quasi unde " +
    "commodi doloremque nemo repellat beatae magnam inventore odit" +
    "  incidunt laboriosam impedit!";
  twoTitle.appendChild(pSectiontwo);
  //=================================sectionOne three div
  const threeTitle = document.createElement("div");
  threeTitle.className = "endTitle";
  section.appendChild(threeTitle);
  const sectionOneDiv = section.querySelectorAll("div");
  for (const iterator of sectionOneDiv) {
    iterator.style.cssText =
      "  background-color: gainsboro; text-align: center; padding: 20px 0; width: 100%;";
  }
  const h4threeTitle = document.createElement("h4");
  h4threeTitle.innerText = "title";
  threeTitle.appendChild(h4threeTitle);
  const sectionOneH4 = section.querySelectorAll(" div h4");
  for (const iterator of sectionOneH4) {
    iterator.style.cssText = " padding-bottom: 10px;";
  }
  const pSectionthree = document.createElement("p");
  pSectionthree.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta," +
    "  possimus sed temporibus voluptate rerum hic culpa quis quasi unde " +
    "commodi doloremque nemo repellat beatae magnam inventore odit" +
    "  incidunt laboriosam impedit!";
  threeTitle.appendChild(pSectionthree);
  main.appendChild(section);
  //=====================================================================end sectionOne
}

//===================================================sectionTwo one div
function sectionTwo() {
  const sectionTwo = document.createElement("section");
  sectionTwo.style.cssText =
    "  display: flex; height: 200px; column-gap: 20px; width: 100%;";
  sectionTwo.className = "sectionTwo";
  const divOne = document.createElement("div");
  divOne.id = "one";
  sectionTwo.appendChild(divOne);
  const pOne = document.createElement("p");
  pOne.innerText = "color code \n rgb(60,138,228)";
  divOne.appendChild(pOne);

  //======================sectionTwo two div
  const divTwo = document.createElement("div");

  divTwo.id = "two";
  sectionTwo.appendChild(divTwo);
  const pTwo = document.createElement("p");
  pTwo.innerText = "color code \n rgb(60,138,228)";
  divTwo.appendChild(pTwo);

  //======================sectionTwo three div
  const divThree = document.createElement("div");
  divThree.id = "tree";
  sectionTwo.appendChild(divThree);
  const pThree = document.createElement("p");
  pThree.innerText = "color code \n rgb(60,138,228)";
  divThree.appendChild(pThree);

  //======================sectionTwo end div
  const divEnd = document.createElement("div");
  divEnd.id = "endDiv";
  sectionTwo.appendChild(divEnd);
  //======================sectionTwo style for divs
  const sectionTwoDiv = sectionTwo.querySelectorAll("div");
  for (let i = 0; i < sectionTwoDiv.length; i++) {
    sectionTwoDiv[i].style.cssText =
      "  width: 100%; text-align: center;  padding-top: 25px; font-size: 25px; color: rgb(223, 223, 223);  margin-top: 20px;";
    switch (i) {
      case 0:
        sectionTwoDiv[i].style.cssText +=
          "  background-color: rgb(60, 138, 228); margin-left: 0;";
        break;
      case 1:
        sectionTwoDiv[i].style.cssText +=
          "  background-color: rgb(231, 187, 93);";
        break;
      case 2:
        sectionTwoDiv[i].style.cssText +=
          "  background-color: rgb(93, 231, 190)";
        break;
      case 3:
        sectionTwoDiv[i].style.cssText +=
          "  margin-right: 0; background-color: rgb(231, 93, 127);";
        break;
    }
  }
  const pEnd = document.createElement("p");
  pEnd.innerText = "color code \n rgb(60,138,228)";
  divEnd.appendChild(pEnd);

  main.appendChild(sectionTwo);

  //=====================================================end sectionTwo
}
root.append(main);
header();
sectionOne();
sectionTwo();
//===================
