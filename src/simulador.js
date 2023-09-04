class simular {
  constructor(area, posIni, command){
    this.area = area;
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
  validarArea(){
    const [x, y] = this.area.split(",")
    if(isNaN(parseInt(x)) || parseInt(x) < 0 || isNaN(parseInt(y)) || parseInt(y) < 0){
      return false
    };
    return true;
  }
  validarPos(pos){
    const c1 = pos.split(",");
    let xPos = c1[0];
    let yPos = c1[1][0];
    let [x,y] = this.area.split(",");
    if(!isNaN(parseFloat(xPos)) && xPos <= x && !isNaN(parseFloat(yPos)) && yPos <= y && this.esDireccion(c1[1].slice(-1))){
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
    let [aX, aY] = this.area.split(",");
    let posFinal = this.posIni;
    let sepPos = posFinal.split(",");
    let x = parseInt(sepPos[0]);
    let y = parseInt(sepPos[1][0]);
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
          case "E": 
            x += 1;
            break;
          case "O":
            x -= 1;
            break;
        }
      }
      if(x > aX || x < 0 || y > aY || y < 0){
        return "Fuera de los límites!";
      }
    }
    posFinal = x + "," + y + dir;
    return posFinal;
  }
}

export default simular;
