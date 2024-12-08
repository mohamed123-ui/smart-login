 var InputLogEmail = document.querySelector("#InputLogEmail");
 var InputLogPassword = document.querySelector("#InputLogPassword");
var SignIn = document.querySelector("#signIn");
var checkCorrect = document.querySelector(".check-correct");
var inputMSg=document.querySelector(".input-requir")

var arr = [];
getLOcalStorage();
function login() {
  if (!(InputLogEmail.value && InputLogPassword.value)) {
    inputMSg.classList.replace('d-none', 'd-flex');
}
  if (Validation(InputLogEmail) && Validation(InputLogPassword)) {
  
    var inputLog = {
      emailLog: InputLogEmail.value,
      passwordLog: InputLogPassword.value,
    };
    var storedUsers = JSON.parse(localStorage.getItem("list")) || [];
    var userFound = storedUsers.find(
      (user) =>
        user.email === inputLog.emailLog &&
        user.password === inputLog.passwordLog
    );
    if (userFound) {
      window.location.href = "home.html";
    } else {
      checkCorrect.classList.replace("d-none", "d-block");
    }
    arr.push(inputLog);
    console.log(arr);
    clearForm();
  }
}
SignIn.addEventListener("click", login);

function getLOcalStorage() {
  if (localStorage.getItem("list") != null) {
    arr = JSON.parse(localStorage.getItem("list"));
  }
}
function clearForm() {
  InputLogEmail.value = "";
  InputLogPassword.value = "";
}
function Validation(input) {
  var regax = {
    InputLogEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    InputLogPassword: /^.{8,}$/,
  };

  console.log(input.id);
  if (regax[input.id].test(input.value)) {
    //true
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }
}
