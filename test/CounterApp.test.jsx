import { fireEvent, render , screen  } from "@testing-library/react"  // screen el objeto que estamos renderizando
import CounterApp from "../src/CounterApp"

/* eslint-disable no-undef */
describe( 'Pruebas en <CounterApp>', ()=>{    
    const initialNumber = 100;
    test('debe tomar un snaptshot y compararlo', () => {
        const { container } =  render( <CounterApp counter={initialNumber}></CounterApp>)
        expect( container).toMatchSnapshot();
    })

    test('Debe de mostrar el valor inicial de 100', () => {
        render( <CounterApp counter={initialNumber}></CounterApp>)
        //expect(parseInt(screen.getByText(initialNumber).innerHTML)).toBe(100)
        expect( screen.getByText(100)).toBeTruthy();
    })
    test('debe de incrementar con el boton +1', () => {
        render( <CounterApp counter={ initialNumber }></CounterApp>)
        fireEvent.click( screen.getByText('+1') )  // disparar un evento
        //fireEvent.click( screen.getByText('+1') )  // disparar un evento
        expect( screen.getByText('101')).toBeTruthy();
        
    })
    test('debe de decrementar con el boton -1', () => {
        render( <CounterApp counter={ initialNumber }></CounterApp>)
        fireEvent.click( screen.getByText('-1') )  // disparar un evento
        //fireEvent.click( screen.getByText('+1') )  // disparar un evento
        // screen.debug()  // el estado del dom lo podemos ver en consola
        expect( screen.getByText('99')).toBeTruthy();
    })
    test('Debe de funcionar el boton de reset', () => {
        render( <CounterApp counter={ initialNumber }></CounterApp>)
        fireEvent.click( screen.getByText('+1') )  // disparar un evento
        fireEvent.click( screen.getByText('+1') )  // disparar un evento
        fireEvent.click( screen.getByRole('button', {name: 'btn-reset'}) )  // disparar un evento
        // por name (area-label ) o por Id
        screen.debug()
        expect( screen.getByText( '100' ) ).toBeTruthy()
        // 103
    })
    
    
    
    
})