import { render , screen } from "@testing-library/react"  // screen el objeto que estamos renderizando
import { FirstApp } from "../src/FirtsApp"

/* eslint-disable no-undef */
describe( 'Purebas en <FirtsApp>', ()=>{
    const title = 'Hola, Soy Goku' 
    const subtitle = '3' 
    test('debe de hacer math con el snaptshot ', () => {
      const { container } = render(<FirstApp title={title}></FirstApp>)
      expect( container ).toMatchSnapshot()
    })
    
    test('debe mostrar le mensaje "Hola soy goku" ', () => {
        render(<FirstApp title={title}></FirstApp>)
        //screen.debug() // muesta el componente que se renderiza
        expect(screen.getByText(title)).toBeTruthy()
    })

    test('debe de mostrar le titulo en un h1', () => {
       render(<FirstApp title={title}></FirstApp>)
       expect(screen.getByRole('heading' , {level : 1}).innerHTML ).toContain(title)
    })
    test('debe mostrar el subtitulo enviado por props', () => {
        render(<FirstApp title={title} subTitle={3}></FirstApp>);
        expect(screen.getAllByText(subtitle).length).toBe(1) 


    })
    
    
    
    
})