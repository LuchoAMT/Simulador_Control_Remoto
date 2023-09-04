import simular from "./simulador.js";

describe("Simular movimiento", () => {
  it("Debería validar una posición inicial", () => {
    let sim = new simular("1,2S","ADADADA");
    const pos = sim.validarPos("1,2S")
    expect(pos).toEqual(true);
  });

  it("Debería devolver una posición inicial válida", () => {
    let sim = new simular("1,2S","ADADADA");
    const pos = sim.mostrarPosValida("1,2S")
    expect(pos).toEqual("1,2S es válida");
  });

  it("Debería validar un comando", () => {
    let sim = new simular("1,2S","ADADADA");
    const com = sim.validarComando("ADADADA")
    expect(com).toEqual(true);
  });

  it("Debería mostrar un comando válido", () => {
    let sim = new simular("1,2S","ADADADA");
    const com = sim.mostrarComandoValido("ADADADA")
    expect(com).toEqual("ADADADA");
  });

  it("Debería cambiar la dirección con un comando I", () => {
    let sim = new simular("1,2N","IIAI");
    const posFinal = sim.cambiarDireccion("IIAI")
    expect(posFinal).toEqual("1,2E");
  });
});
