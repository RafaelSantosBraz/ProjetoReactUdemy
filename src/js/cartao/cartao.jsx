import React from 'react';

class Cartao extends React.Component {
    // função de renderização de retorna o "html" desejado
    render() {
        return (
            <div className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="http://materializecss.com/images/office.jpg" />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Titulo<i className="material-icons right">more_vert</i></span>
                    <p>Descrição</p>
                </div>
                <div className="card-action">
                    <a href="#">Ver mais..</a>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Titulo<i className="material-icons right">close</i></span>
                    <p>Detalhe com um texto</p>
                </div>
            </div>
        );
    }
}

//exportação do componente
export default Cartao;