/* eslint-disable no-undef */
import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Prueba en 02-template-string', () => {
  test('get saludo debe retornar hola santiago ', () => {
    const name = 'Santiago';
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`)
  })
  
})

