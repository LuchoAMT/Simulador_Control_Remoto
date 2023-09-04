import simular from "./simulador.js";

const pos = document.querySelector("#pos-ini");
const coms = document.querySelector("#comandos");
const form = document.querySelector("#controls-form");
const div = document.querySelector("#resultado-div");

coms.addEventListener('input',function (){
  this.value = this.value.toUpperCase();
});

let sim = new simular(pos.value,coms.value);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const p = pos.value;
  const c = coms.value;

  div.innerHTML = "<p>" +
   "Posición inicial: " + sim.mostrarPosValida(p) +
   "<br>" + "Comandos: " + sim.mostrarComandoValido(c);
   + "</p>";
});
