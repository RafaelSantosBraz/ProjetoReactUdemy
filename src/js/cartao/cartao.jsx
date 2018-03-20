import React from 'react';

class Cartao extends React.Component {
    constructor(props) {
        super(props);
        // registro do método
        this.contaCliques = this.contaCliques.bind(this);
    }
    // método para cliques no cartão
    contaCliques() {
        // executa o método recebido por parâmetro do componente pai
        this.props.addClique();
    }
    // função de renderização de retorna o "html" desejado
    render() {
        return (
            <div className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <img onClick={this.contaCliques} className="activator" src={this.props.dados.imagem} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{this.props.dados.titulo}<i className="material-icons right">more_vert</i></span>
                    <p>{this.props.dados.descricao}</p>
                </div>
                <div className="card-action">
                    <a href={this.props.dados.link}>Ver mais..</a>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{this.props.dados.titulo}<i className="material-icons right">close</i></span>
                    <p>{this.props.dados.detalhe}</p>
                </div>
            </div>
        );
    }
}

//exportação do componente
export default Cartao;