import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"


/* eslint-disable no-undef */
describe('pruebas en 07-deses-array' , ()=>{
    test('debe retornar un string y un numero',()=>{
        const [ letters , numbers  ] = retornaArreglo();
        console.log( typeof letters , typeof numbers)

        expect( letters ).toBe('ABC');
        expect( numbers ).toBe( 123 );

        expect( typeof letters ).toBe('string');
        expect( typeof numbers ).toBe('number');

        // test para que sea mas dinamico
        expect( letters ).toEqual( expect.any(String) ) // espera cualquier tipo de string
    })
})