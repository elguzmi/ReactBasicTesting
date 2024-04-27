// rafc   = crear un functional component rapidamente
import { useState } from 'react'  // use significa hook , es una funcion especial
import PropTypes from 'prop-types'
 

// Los hooks son funciones
// eslint-disable-next-line react/prop-types
const CounterApp =({ counter })=>{  // la property no se cambia como tal
    const [ count  , setCount ] = useState( counter ); // desestructuracion   -> 0 es el valor del estado
    // fucniones flecha son mas rapidas y no cambian el valor del this
    const handleAdd = (event , message)=> {
        // cambio en el componenten y tiene que redibujar esos cambios, toca decirle a react que redibuje el functional component
        //setCount( count + 1); // decirle a react que el estado cambio y va a renderizar el componente
        setCount((c)=> c+ 1)
    }
    const handleSustract = ()=> setCount( count -1 );
    const handleReset = ()=> setCount(counter);
    return (
        <>
            <h1>Counter App</h1>
            <p>{ count }</p>
            <button  aria-label='btnSuma' onClick={ (event)=> handleAdd(event, 'Hola') }> +1 </button>
            <button onClick={ handleSustract }> -1 </button>
            <button aria-label='btn-reset' onClick={ handleReset }> reset </button>
        </>
    )
}


CounterApp.proptypes ={
    counter : PropTypes.number.isRequired
}
CounterApp.defaultProps={
    counter : 0
}

export default CounterApp