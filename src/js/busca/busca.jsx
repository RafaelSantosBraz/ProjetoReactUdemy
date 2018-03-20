import React from 'react';

class Busca extends React.Component {
    constructor(props) {
        super(props);
        // registro do método
        this.atualizaBusca = this.atualizaBusca.bind(this);
    }
    // método de atualizar a busca com o mesmo nome do pai
    atualizaBusca(evento) {
        // chama o evento da lista-cartao passando o evento como parâmetro
        this.props.atualizaBusca(evento);
    }
    render() {
        return (
            <form>
                <div className="input-field col s6">
                    <input placeholder="Digite sua busca" onChange={this.atualizaBusca} type="text" value={this.props.busca} />
                    <label>Busca</label>
                </div>
                <p>{this.props.busca}</p>
            </form>
        );
    }
}

export default Busca;