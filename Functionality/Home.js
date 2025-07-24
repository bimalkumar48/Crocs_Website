const usrData = JSON.parse(sessionStorage.getItem("user"));

const greet = document.getElementById("greet");
const logout = document.getElementById("logout");

if (usrData) {
  const username = usrData.name || "USER";
  greet.innerText = `HI ${username.toUpperCase()}`;
  greet.style.color = "black";
  greet.style.fontWeight = "bold";
  logout.innerText = "LOGOUT";
}
if (logout) {
  logout.addEventListener("click", () => {
    sessionStorage.removeItem("user");
    window.location.reload();
  });
}
