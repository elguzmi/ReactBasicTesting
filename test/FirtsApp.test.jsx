import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirtsApp"

/* eslint-disable no-undef */
describe( 'Purebas en <FirtsApp>', ()=>{
    // test('debe hacer match con el snapshot', () => {
    //     // decirle a babel y a jest como poder derenderizar este jsx  // babel config
        
        
    //     const { container } =  render( <FirstApp title='Hola soy goku'></FirstApp> )  // montar nuestro componente de firts app
        
    //     // ayuda a segurarse de que el componente se quede asi por un periodo de tiempo
    //     expect( container ).toMatchSnapshot();  // evalua todo , guarda una captura del nodo y el estado del componente
    //     // snapshots = toma como una captura del nodo del react
        
    // })

    test('debe mostrar el titulo de un H1 ', () => {
        const title = 'Vegeta'
        // nos ayuda a dominar el dom a tener control del DOM
        const { container , getByText, getByTestId } =  render( <FirstApp title={ title }></FirstApp> )  // extarer del render , hay varios metodos
        // getByText obteiene un nodo por un texto
        expect( getByText('Vegeta') ).toBeTruthy();  // toBeTruthy() que se encuentre el titulo que colocamos
    
        expect( getByTestId('test-title').innerHTML ).toContain( title ) 
        // Obtener algun elemento  y evaluar 
        // const h1 = container.querySelector( 'h1' ); // buscar una etiqueta H1 en el DOM
        // console.log(h1.innerHTML)
        // expect( h1.innerHTML ).toBe( title )  // asegurandome que este dentro del h1u
        // expect( h1.innerHTML ).toContain( title )  // asegurandome que contiene ese titulo
    })

    test('debe mostrar el subtitulo enviado pro props', () => {
        const title = 'Vegeta'
        const subtitle = 'Soy un subtitulo'
        const {  getByText , getAllByText } =  render( <FirstApp title={ title } subTitle={subtitle} ></FirstApp> )  // extarer del render , hay varios metodos
        // getByText obteiene un nodo por un texto
        // getByText = puede dar error porque hay varios elementos con ese titulo 
        // getAllByText = regresa un arreglo de elementos HTML 
        expect( getAllByText(subtitle) ).toBeTruthy();  // toBeTruthy() que se encuentre el titulo que colocamos
        // getAllByText(subtitle).length
    })
    
    
})