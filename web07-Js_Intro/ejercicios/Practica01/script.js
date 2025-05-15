document.getElementById("boton-cambiar").addEventListener("click", function () {
  const nombre = prompt("¿Cuál es tu nombre?");
  if (nombre) {
    document.getElementById("saludo").textContent = `Hola ${nombre}`;
  }
});