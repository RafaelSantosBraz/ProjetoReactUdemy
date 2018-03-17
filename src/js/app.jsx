import ReactDOM from 'react-dom';
import React from 'react';

import Titulo from './titulo/titulo';

let App = (
    // sempre utilizar uma única estrutura
    <div className="container">
        <Titulo />
    </div>
);

// componente para rendenizar o component 
ReactDOM.render(App, document.getElementById("app"));