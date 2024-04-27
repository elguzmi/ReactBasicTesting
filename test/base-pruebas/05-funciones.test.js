import { getUser , getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

/* eslint-disable no-undef */
describe('Pruebas en 05 funciones', () => {
  test('get user debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        console.log(user);

        // stric iqual cuando son objetos proque no son primitivos, los obejtos se comparan de acuerod a su ubicacion en memoria
        expect( testUser ).toStrictEqual( user )  // para leer un objeto toca colocar un to equal o stric equal  
        // los objetos se comparan con base en su ubicacion en memoria
        //expect( testUser ).toEqual( user ) 
  })

  test('GetUsarioActivo debe de retornar un objeto', () => {
        const name = 'Santiago';
        let obj = getUsuarioActivo( name );
        console.log( obj );
        expect( name ).toBe( obj.username )
        expect( name ).toBe( obj.username )
  })  
})
