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
    expect(pos).toEqual("1,2S");
  });
});
