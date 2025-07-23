let SignIn_form = document.getElementById("SignIn_form");
let SignIn_status = document.getElementById("status");

SignIn_form.addEventListener("submit", (e) => {
  console.log("submit");
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  let password = document.getElementById("password").value;
  let number = document.getElementById("number").value;
  let age = document.getElementById("age").value;
  let city = document.getElementById("city").value;
  if (age <= 0) {
    SignIn_status.innerText = "invalid age";
    SignIn_status.style.color = "red";
  } else {
    let user = {
      name: name,
      email: email,
      password: password,
      number: number,
      age: age,
      city: city,
    };
    sessionStorage.setItem(user.email, JSON.stringify(user));
    SignIn_status.innerText = "Success";
    SignIn_status.style.color = "green";
    setTimeout(() => {
      window.location.href = "../Structure/LogIn.html";
    }, 1000);
  }
});
