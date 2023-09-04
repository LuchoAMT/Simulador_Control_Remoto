const _ = require('lodash');
class simular {
  constructor(posIni, command){
    this.posIni = posIni;
    this.command = command;
  }
  esDireccion(dir){
    if(dir == "N" || dir == "S" || dir == "E" || dir == "O"){
      return true;
    }
    else{
      return false;
    }
  }
  validarPos(pos){
    const c1 = pos.split(",");
    if(!isNaN(parseFloat(c1[0])) && !isNaN(parseFloat(c1[1])) && this.esDireccion(c1[1].slice(-1))){
      return true;
    }
    return false;
  }
  mostrarPosValida(pos){
    if(this.validarPos(pos) == true){
      return pos + " es válida";
    }
    return pos + " es una posición no válida";
  }
  validarComando(com){
    for(let i=0; i<com.length; i++){
      if(com[i] !== "A" && com[i] !== "D" && com[i] !== "I"){
        return false;
      }
      return true;
    }
  }
  mostrarComandoValido(com){
    if(this.validarComando(com) == true){
      return com;
    }
    return "Comando inválido";
  }
}

export default simular;
