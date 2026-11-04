const auth = sessionStorage.getItem("auth");
if (auth === "true") {
  window.location = "../index.html";
}

function iniciarSesion() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    document.getElementById("error").innerText =
      "Por favor, ingresa todos los campos";
    return;
  }
  if (email === "boyager@email.com" && password === "boyager123") {
    sessionStorage.setItem("auth", "true");
    window.location = "./eventos.html";
  } else {
    document.getElementById("error").innerText = "revisa las credenciales";
  }
}
