function elementM() {
  return `    <main class="main">
      <div class="box">
        <h3>Login</h3>
        <form action="" class="form" id="form" >
          <input id="email"  type="email" name="email" placeholder="emial address" />
          <input id="password" type="password" name="password" placeholder="password" />
          <input type="button" value="Login" onclick="submitForm()" />     
          </form>
        <p id="error" class="error"></p>
      </div>
    </main>`;
}
document.body.innerHTML = elementM();
const errorText = document.getElementById("error");
const form = document.getElementById("form");
function submitForm() {
  const obj = {};
  if (validateEmail() !== "" || validatePassword() !== "") return;
  for (const elem of form.children) {
    if (form.children[2] === elem) break;
    obj[elem.name] = elem.value;
  }
  console.log(obj);
}
function validateEmail() {
  const emailInput = document.getElementById("email").value;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailRegex.test(emailInput)) {
    return (errorText.innerText = "");
  } else {
    return (errorText.innerText = "Please enter a valid email address.");
  }
}
function validatePassword() {
  const passwordInput = document.getElementById("password").value;
  if (passwordInput === "") {
    return (errorText.innerText = "your password is not true ");
  } else if (passwordInput.length < 8)
    return (errorText.innerText =
      "your password should be 8 or more characters");
  else return (errorText.innerText = "");
}
//event handler
form.children[0].addEventListener("blur",validateEmail);
form.children[1].addEventListener("blur",validatePassword);