import React from 'react';

class NavMenu extends React.Component {
    // construtor do componentes (props são o padrão)
    constructor(props) {
        super(props);
        // criação de atributos de estado
        this.state = { menuAtivo: 'Home' };
        // registro de um método para passar os parâmetros
        this.alteraActive = this.alteraActive.bind(this);
    }
    // método para alterar o estado dinamicamente
    alteraActive(titulo, self) {
        self.setState({ menuAtivo: titulo });
    }
    // função de renderização de retorna o "html" desejado
    render() {
        // variável de referência ao componente, pois dentro da função não se acessa o (this)
        let self = this;
        // alteração do estado do componente
        //this.setState({ menuAtivo: 'Contato' });
        // lista dos links recebidos por parâmetro
        let lista = this.props.menu.map(function (value) {
            return (
                // utiliza-se o (bind) para passar os parâmetros. O primeiro é o evento (para formulários)
                <li key={value.titulo} onClick={self.alteraActive.bind(null, value.titulo, self)} className={self.state.menuAtivo == value.titulo ? 'active' : ''}><a href={value.link}>{value.titulo}</a></li>
            );
        });
        return (
            <ul id="nav-mobile" className="right">
                {/* utilização da lista */}
                {lista}
            </ul>
        );
    }
}

//exportação do componente
export default NavMenu;