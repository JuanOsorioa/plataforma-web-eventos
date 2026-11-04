const auth = sessionStorage.getItem("auth");
if (auth != "true") {
  window.location = "./sesion.html";
}

function salir() {
  sessionStorage.removeItem("auth");
  window.location = "../index.html";
}
