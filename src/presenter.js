import simular from "./simulador.js";

const pos = document.querySelector("#pos-ini");
const form = document.querySelector("#controls-form");
const div = document.querySelector("#resultado-div");

let sim = new simular(pos,"ADADADA");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const p = pos.value;

  div.innerHTML = "<p>" +
   "Posición inicial: " + sim.mostrarPosValida(p) 
   + "</p>";
});
