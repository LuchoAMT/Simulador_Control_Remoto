import simular from "./simulador.js";

describe("Simular movimiento", () => {
  it("Debería validar una posición inicial", () => {
    let sim = new simular("1,2S","ADADADA");
    const pos = sim.validarPos("1,2S")
    expect(pos).toEqual(true);
  });

  it("Debería devolver una posición inicial válida", () => {
    let sim = new simular("6,6","1,2S","ADADADA");
    const pos = sim.mostrarPosValida("1,2S")
    expect(pos).toEqual("1,2S es válida");
  });

  it("Debería validar un comando", () => {
    let sim = new simular("6,6","1,2S","ADADADA");
    const com = sim.validarComando("ADADADA")
    expect(com).toEqual(true);
  });

  it("Debería mostrar un comando válido", () => {
    let sim = new simular("6,6","1,2S","ADADADA");
    const com = sim.mostrarComandoValido("ADADADA")
    expect(com).toEqual("ADADADA");
  });

  it("Debería cambiar la dirección con un comando I", () => {
    let sim = new simular("6,6","1,2N","III");
    const posFinal = sim.cambiarDireccion("III")
    expect(posFinal).toEqual("1,2E");
  });

  it("Debería cambiar la dirección con un comando D", () => {
    let sim = new simular("6,6","1,2N","DDD");
    const posFinal = sim.cambiarDireccion("DDD")
    expect(posFinal).toEqual("1,2O");
  });

  it("Debería incrementar la posición Y con un comando A", () => {
    let sim = new simular("6,6","1,2N","AAA");
    const posFinal = sim.cambiarDireccion("AAA")
    expect(posFinal).toEqual("1,5N");
  });

  it("Debería reducir la posición Y con un comando A", () => {
    let sim = new simular("6,6","1,5S","AAA");
    const posFinal = sim.cambiarDireccion("AAA")
    expect(posFinal).toEqual("1,2S");
  });

  it("Debería incrementar la posición X con un comando A", () => {
    let sim = new simular("6,6","1,2E","AAA");
    const posFinal = sim.cambiarDireccion("AAA")
    expect(posFinal).toEqual("4,2E");
  });

  it("Debería reducir la posición X con un comando A", () => {
    let sim = new simular("6,6","4,2O","AAA");
    const posFinal = sim.cambiarDireccion("AAA")
    expect(posFinal).toEqual("1,2O");
  });

  it("Debería validar un area de trabajo", () => {
    let sim = new simular("6,6","4,2O","AAA");
    const posFinal = sim.validarArea()
    expect(posFinal).toEqual(true);
  });

  it("Debería mostrar fuera de limites al salirse del area", () => {
    let sim = new simular("6,6","5,5E","AAA");
    const posFinal = sim.cambiarDireccion("AAA")
    expect(posFinal).toEqual("Fuera de los límites!");
  });
});
