function elegirOpcion() {
  var opcion1 = document.getElementById("opcion1").value;
  var opcion2 = document.getElementById("opcion2").value;

  var opciones = [opcion1, opcion2];
  var indiceAleatorio = Math.floor(Math.random() * opciones.length);
  var opcionElegida = opciones[indiceAleatorio];

  var resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = "La opción elegida es: <span>" + opcionElegida + "</span>";

  resultadoElement.style.fontSize = "24px";
  resultadoElement.style.fontWeight = "bold";
  resultadoElement.style.marginTop = "20px";

  resultadoElement.querySelector("span").style.color = "#008000";
}

function toggleModoOscuro() {
  var bodyElement = document.body;
  var resultadoElement = document.getElementById("resultado");
  var imagenHomenajeElement = document.getElementById("imagen-homenaje");

  bodyElement.classList.toggle("modo-oscuro");
  resultadoElement.classList.toggle("resultado-oscuro");
  imagenHomenajeElement.src = bodyElement.classList.contains("modo-oscuro")
    ? "https://pbs.twimg.com/media/Fx_C1h7X0AI7Wz2?format=png&name=small"
    : "https://media.discordapp.net/attachments/1096255613421490328/1115817794370539631/Fx-2HbYWYAAB9DC.png";
}
