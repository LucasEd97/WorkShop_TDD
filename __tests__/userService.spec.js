const userService = require('../userService');
const db = require ('../model');

describe('userService', () => {
  it("userCreate deve retornar array contendo informações da pessoa adicionada", () => {
    const response = [
      {
        name: "Camila",
        email: "camila@bossabox.com"
      },
      {
        name: "Eduardo",
        email: "eduardo@bossabox.com"
      }
    ]

    db.insertUser = jest.fn((user) => response);

    const userService = userService.createUser({name: "Eduardo", email: "eduardo@bossabox.com";

    expect(userService).toEqual(response);
  })
})