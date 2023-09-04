import simular from "./simulador.js";

const pos = document.querySelector("#pos-ini");
const coms = document.querySelector("#comandos");
const form = document.querySelector("#controls-form");
const div = document.querySelector("#resultado-div");

coms.addEventListener('input',function (){
  this.value = this.value.toUpperCase();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const p = pos.value;
  const c = coms.value;

  let sim = new simular(p,c);

  if(!sim.validarPos(p)){div.innerHTML = "<p>Error: La posición no es válida</p>";}
  if(!sim.validarComando(c)){div.innerHTML = "<p>Error: El comando no es válido</p>";}

  if(sim.validarPos(p) && sim.validarComando(c)){
    div.innerHTML = "<p>" +
   "Posición inicial: " + sim.mostrarPosValida(p) +
   "<br>" + "Comandos: " + sim.mostrarComandoValido(c) +
   "<br>" + "Posición Final: " + sim.cambiarDireccion(c) 
   + "</p>";
  }
});
