import { usContext } from '../../src/base-pruebas/06-deses-obj';

/* eslint-disable no-undef */
describe('Se prueba la desestructuracion de objetos' , ()=>{
    test('desestructuring test function', ()=>{
        const answer = usContext({ clave : '123' , nombre : 'Capitan Jack' , edad : 45 , rango : 'Comandante'})
        console.log(answer);
        expect( {
            nombreClave: '123',
            anios: 45,
            latlng: { lat: 14.1232, lng: -12.3232 }
          } ).toEqual(answer)
    })
} )
