import React from "react";
import ReactDOM from "react-dom/client"; //herramienta para renderizar
import { CounterApp } from "./CounterApp";
//import { FirstApp } from "./FirstApp";
import './styles.css'
//import {HelloWorldApp}  from "./HelloWorldApp"


//forma de renderizar
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={12}/>
    </React.StrictMode>
);