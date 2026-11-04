const auth = sessionStorage.getItem("auth");
const logout = document.getElementById("logout");
const login = document.getElementById("login");
const events = document.getElementById("events");

if (auth != "true") {
  logout.classList.add("hiden");
  events.classList.add("hiden");
  login.classList.remove("hiden");
} else {
  logout.classList.remove("hiden");
  events.classList.remove("hiden");
  login.classList.add("hiden");
}

function salir() {
  sessionStorage.removeItem("auth");
  window.location = "./index.html";
}
