/* eslint-disable no-undef */
describe('Pruebas en <DemoComponent />', () => {
    // titulo de la prueba
    test('Esta prueba no debe de fallar', ()=>{
        // si aca no se lanza un error entonces la prueba pasa
        
        // 1. Inicializacion
        const message1 = 'Hola Mundo';
    
        //2. Estimulo
        const message2 = message1.trim();
    
        //3. Observar el comportamiento ... esperado
        //expect(message1).toBe(message2)  // condicion para que pase la prueba
        // eslint-disable-next-line no-undef
        expect( message1 ).toBe( message2 )
    })
})
