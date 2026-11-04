function mandarMensaje() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  if (nombre === "" || email === "" || mensaje === "") {
    document.getElementById("error").innerText =
      "Por favor diligenciar todos los datos!";
    return;
  }
  console.log({
    nombre,
    email,
    mensaje,
  });
  document.getElementById("error").innerText = "";
  alert("mensaje enviado!");
}

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
  window.location = "../index.html";
}
