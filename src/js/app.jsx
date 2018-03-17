import ReactDOM from 'react-dom';
import React from 'react';

import Titulo from './titulo/titulo';
import Navbar from './navbar/navbar';
import Cartao from './cartao/cartao';

let App = (
    // sempre utilizar uma única estrutura
    <div>
        {/* Passagem de parâmetros para o componente*/}
        <Navbar titulo="React" cor="red" />
        <div className="container">
            <Titulo />
            {/* trabalhando com grids do Materialize */}
            <div className="row ">
                <div className="col m4">
                    <Cartao />
                </div>
            </div>
        </div>
    </div>
);

// componente para rendenizar o component 
ReactDOM.render(App, document.getElementById("app"));