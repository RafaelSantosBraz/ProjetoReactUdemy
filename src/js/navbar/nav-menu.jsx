import React from 'react';

class NavMenu extends React.Component {
    // função de renderização de retorna o "html" desejado
    render() {
        // lista dos links recebidos por parâmetro
        let lista = this.props.menu.map(function (value) {
            return (
                <li key={value.titulo}><a href={value.link}>{value.titulo}</a></li>
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