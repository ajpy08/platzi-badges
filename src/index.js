// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

import Badge from "./components/Badge";

// const jsx = <h1>Hello, Platzi Badges!</h1>;
// const element = React.createElement('a',
// {href: 'https://platzi.com'}, 'Ir a Platzi');

// cconst name = "Draki";
// const sum = () => 3 + 3;
// const element = React.createElement('h1', {}, `Hola soy ${name}`);
// const jsx = <h1>Hola soy {name}</h1>
// const jsx = <h1>Hola soy, {sum()}</h1>

//////////////////ES LO MISMO///////////////////

// const element = (
//   <div>
//     <h1>Hola soy Javi</h1>
//     <p>Soy ISC</p>
//   </div>
// );

// const element = React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, "Hola soy Javi"),
//   React.createElement("p", {}, "Soy ISC")
// );

////////////////////////////////////////////////

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge/>, container);
