const functions = require("../functions");

describe('funções', () => {
  it('soma de 2 + 8 deve ser igual a 10', () => {
    expect(functions.soma(2, 8)).toBe(10);
  }),
  it('divisao de 10 por 2 deve ser igual a 5', () => {
    expect(functions.divisao(10, 2)).toBe(5);
  }),
  it('divisao por 0 retorne um erro', () => {
    try {
      expect(functions.divisao(10, 0));
      fail();
    } catch (error) {
      expect(error.message).toBe("divisao por 0 não é válida");
    }
  })
})