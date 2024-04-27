/*import { Fragment } from "react"  // se utiliza para evitar crear div padres
 <></>  significa sinonimo de fragmento
 {} expresion de javascript
 Un obj javascript no se puede colocar en una expresion
*/
import PropTypes from 'prop-types'  // definir el tipo a las properties

const getMessage = (a, b)=>{
    return a + b
}
//const name = 'Santiago Guzman'  // no va a re-renderizarlo cuando cambie de estado si esta afuera del functinal component
//const test = [1,2,3,4,5,6,7,8,9]
const textObj = {
    message: 'Hola Mundo',
    title : 'Fernando'
}
// eslint-disable-next-line react/prop-types
export const FirstApp = ({ title , subTitle = 'subtitulo', nombre})=> {
    const newMessage = getMessage(1,5)  
    //if(!title)throw new Error('No existe la propiedad title')

    return (
        <>  
            <h1 data-testid="test-title" > { title }  </h1>
            {/* <h1>{ title }</h1> */}
            <h3>{ subTitle }</h3>
            <p>{JSON.stringify(textObj)}</p>
            <p>{ getMessage(1,4)}</p>
            <p>{ newMessage }</p>
            <p>tu nombre es {nombre}</p>
        </>
    )
}


//**   Configuraciones de nuestro componentes **//
FirstApp.propTypes = {
    title : PropTypes.string.isRequired,
    subTitle: PropTypes.number
}

// los default propr entran antes que los proptypes
FirstApp.defaultProps = {
    subTitle: 2,
    nombre:'Fernando Herrera'

}