let email = "kumarbimal2002@gmail.com";
let password = "Mynameisxyz@2";

let login_form = document.getElementById("login-form");
let Login_status = document.getElementById("status");
login_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userEmail = document.getElementById("email").value;
  let userPassword = document.getElementById("password").value;
  if (userEmail == email && userPassword == password) {
    Login_status.style.color = "green";
    Login_status.innerText = "Success";
    setTimeout(() => {
      window.location.href = "../Structure/Home.html";
    }, 2000);
  } else {
    Login_status.style.color = "red";
    Login_status.innerText = "Try Again";
  }
});
