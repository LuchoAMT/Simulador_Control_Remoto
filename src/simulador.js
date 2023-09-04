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
  cambiarDireccion(com){
    let posFinal = this.posIni;
    let sepPos = posFinal.split(",");
    let x = parseInt(sepPos[0]);
    let y = parseInt(sepPos[1][0]);
    console.log("final=" +posFinal);
    console.log(sepPos);
    let dir = sepPos[1].slice(-1);
    for(let i=0; i<com.length; i++){
      if(com[i] === "I"){
        switch(dir){
          case "N":
            dir = "O";
            break;
          case "O":
            dir = "S";
            break;
          case "S":
            dir = "E";
            break;
          case "E":
            dir = "N";
            break;
        }
      }
      if(com[i] === "D"){
        switch(dir){
          case "N":
            dir = "E";
            break;
          case "E":
            dir = "S";
            break;
          case "S":
            dir = "O";
            break;
          case "O":
            dir = "N";
            break;
        }
      }
      if(com[i] === "A"){
        switch(dir){
          case "N":
            y += 1;
            break;
          case "S":
            y -= 1;
            break;
          
        }
      }
    }
    posFinal = x + "," + y + dir;
    return posFinal;
  }
}

export default simular;
