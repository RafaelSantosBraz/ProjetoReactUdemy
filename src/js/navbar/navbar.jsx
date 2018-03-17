import React from 'react';

class Navbar extends React.Component {
    // função de renderização de retorna o "html" desejado
    render() {
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
                        <ul id="nav-mobile" className="right">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

//exportação do componente
export default Navbar;