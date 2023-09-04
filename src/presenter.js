import simular from "./simulador.js";

const coms = document.querySelector("#comandos");
const form = document.querySelector("#controls-form");
const div = document.querySelector("#resultado-div");

coms.addEventListener('input',function (){
  this.value = this.value.toUpperCase();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const [area, posInicial, comandos] = coms.value.split("/");

  let sim = new simular(area, posInicial,comandos);

  if(!sim.validarArea()){div.innerHTML = "<p>Error: El área no es válida</p>";}
  if(!sim.validarPos(posInicial)){div.innerHTML = "<p>Error: La posición no es válida</p>";}
  if(!sim.validarComando(comandos)){div.innerHTML = "<p>Error: El comando no es válido</p>";}

  if(sim.validarPos(posInicial) && sim.validarComando(comandos)){
    div.innerHTML = "<p>" +
   "Posición inicial: " + sim.mostrarPosValida(posInicial) +
   "<br>" + "Comandos: " + sim.mostrarComandoValido(comandos) +
   "<br>" + "Posición Final: " + sim.cambiarDireccion(comandos) 
   + "</p>";
  }
});
