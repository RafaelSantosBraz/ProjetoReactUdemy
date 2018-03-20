import React from 'react';

class Busca extends React.Component {
    constructor(props) {
        super(props);
        // registro do método
        this.atualizaBusca = this.atualizaBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    // método de atualizar a busca com o mesmo nome do pai
    atualizaBusca(evento) {
        // chama o evento da lista-cartao passando o evento como parâmetro
        this.props.atualizaBusca(evento);
    }
    // evento de submissão do formulário
    onSubmit(evento) {
        this.props.onSubmit(evento);
    }
    // método de renderização do componente
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="input-field col s6">
                    <input placeholder="Digite sua busca" onChange={this.atualizaBusca} type="text" value={this.props.busca} />
                    <label>Busca</label>
                </div>                
            </form>
        );
    }
}

export default Busca;