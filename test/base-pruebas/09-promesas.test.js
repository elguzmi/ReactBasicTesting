import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
// todas las pruebas en general son sincronas

/* eslint-disable no-undef */
describe( ' test on 09-promesas' , ()=>{  // done es una funcion que se manda a llamar cuando se termina de ejecutar el codigo
    test( 'hetHeroeByIdAsync debe retornar un heroe' , ( done )=>{
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
                console.log( hero )
                expect( hero ).toEqual( {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                }  )
                done()
            }).catch( err =>{
                console.log( 'Entra al catch' +  err )
                done()
            })
    })

    test( 'hetHeroeByIdAsync debe obtener un error si no existe' , ( done )=>{
        const id = 20;
        getHeroeByIdAsync( id )
        .then( hero => {
            expect( hero ).toBeFalsy();
            done()
        })
        .catch( err =>{
            console.log( 'Entra al catch' +  err )
            expect( err ).toBe( 'No se pudo encontrar el héroe' )
            done()
        })
    })
})