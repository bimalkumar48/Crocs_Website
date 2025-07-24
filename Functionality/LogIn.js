let login_form = document.getElementById("login-form");
let Login_status = document.getElementById("status");
login_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userEmail = document.getElementById("email").value.trim().toLowerCase();
  let userPassword = document.getElementById("password").value;

  let userData = JSON.parse(localStorage.getItem(userEmail));
  console.log(userData);
  if (!userData) {
    Login_status.style.color = "red";
    Login_status.innerText = "User not found!";
    return;
  } else if (
    userEmail === userData.email &&
    userPassword === userData.password
  ) {
    Login_status.style.color = "green";
    Login_status.innerText = "Success!";
    setTimeout(() => {
      sessionStorage.setItem("user", JSON.stringify(userData));
      window.location.href = "../Structure/Home.html";
    }, 2000);
  } else {
    Login_status.style.color = "red";
    Login_status.innerText = "Incorrect. Try again!";
  }
});
