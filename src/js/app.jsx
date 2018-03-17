import ReactDOM from 'react-dom';
import React from 'react';

import Titulo from './titulo/titulo';
import Navbar from './navbar/navbar';
import ListaCartao from './cartao/lista-cartao';

let App = (
    // sempre utilizar uma única estrutura
    <div>
        {/* Passagem de parâmetros para o componente*/}
        <Navbar titulo="React" cor="red" />
        <div className="container">
            <Titulo />
            <ListaCartao />
        </div>
    </div>
);

// componente para rendenizar o component 
ReactDOM.render(App, document.getElementById("app"));