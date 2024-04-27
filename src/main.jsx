//jsx significa que hay codigo xml = JS

import React from 'react'
import ReactDom from 'react-dom/client' // para renderizarlo
// import HelloWordApp from './HelloWordApp'
// import { FirstApp } from './FirtsApp'
import  CounterApp  from './CounterApp'
import './styles.css'
// import {App} from './HelloWordApp'



// la comilla sencilla '' es mas ligera que la dobel comilla ""
ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp counter={12}></CounterApp>
        {/* <HelloWordApp/> */}
        {/* <FirstApp title="Hola Soy Vegeta" subTitle={123}></FirstApp>  */}
    </React.StrictMode>
)

