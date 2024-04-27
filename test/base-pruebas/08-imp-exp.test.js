import { getHeroeById , getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from "../../src/data/heroes"


/* eslint-disable no-undef */
describe( 'test on 08-imp-exp.js' , ()=>{
    test('make test to get a hero by id , should return a hero by id' , ()=>{
        const id = 2
        const heroById =  getHeroeById(id);
        console.log(heroById)
        expect( heroById ).toEqual({ id: 2, name: 'Spiderman', owner: 'Marvel' })
    })

    test('make test to get a hero by id , should return undefined if no finded' , ()=>{
        const id = 100
        const heroById =  getHeroeById( id );
        expect( heroById ).toBeFalsy(); //toBeFalsy : tiene que tener un valor nulo o negativo o undefined
    })

    // TAREA :  get hero by owner   
    // debe retornar un arrreglo de los heroes de DC 
    // length === 3 elementos
    // to equal al arreglo filtrado

    test( 'test about get heros of DC and the result shoub be 3 length' , ()=>{
        const owner = 'DC'
        const arrayDCHeros = getHeroesByOwner( owner );

        // length === 3 elementos
        expect( arrayDCHeros.length ).toBe( 3 )

        // to equal al arreglo filtrado    expect( arrayDCHeros ).toEqual( arrayDCHeros.filter(e=> e.owner == owner ) )
        expect( arrayDCHeros ).toEqual([   
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            }, {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ])
        expect( arrayDCHeros ).toEqual( heroes.filter(e=> e.owner === owner ) )
    
    })


    test( 'test about marvel heroes , should be reuturn 2 element of heros' , ()=>{
        const arrayDCHeroes = getHeroesByOwner( 'Marvel' );
        expect( arrayDCHeroes.length ).toBe( 2 )  // la longitud tiene que ser 2
    })


    // debe retornar un arrreglo de los heroes de marvel
    // length === 2 elementos
})