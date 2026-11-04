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

function salir() {
  sessionStorage.removeItem("auth");
  window.location = "../index.html";
}
