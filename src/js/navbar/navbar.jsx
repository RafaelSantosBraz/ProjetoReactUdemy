import React from 'react';

// importação no mesmo diretório
import NavMenu from './nav-menu'
class Navbar extends React.Component {
    // função de renderização de retorna o "html" desejado
    render() {
        // menu de links para o navbar
        let menu = [
            // cada um dos objetos do array
            { titulo: "Home", link: "#home" },
            { titulo: "Sobre", link: "#sobre" },
            { titulo: "Contato", link: "#contato" }
        ];
        // classe atribuída dinamicamente
        let corNav = "nav-wrapper " + this.props.cor;
        return (
            // troca-se o "class" do html para "className" sempre
            <nav>
                {/* Utilização de classe dinâmica*/}
                <div className={corNav}>
                    <div className="container">
                        {/* Utilização do parâmetro recebido */}
                        <a href="#" className="brand-logo">{this.props.titulo}</a>
                        <NavMenu menu={menu}/>                    
                    </div>
                </div>
            </nav>
        );
    }
}

//exportação do componente
export default Navbar;