import React from 'react';
// importação da biblioteca externa Axios
import axios from 'axios';

// importação no mesmo diretório
import NavMenu from './nav-menu'
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { menu: [] };
    }
    // executa quando o componente é criado
    componentDidMount() {
        let self = this;
        // faz a requisição ao servidor especificado, utilizando-se o Axios
        axios.get('http://localhost:8000/servidor.php?menu=1').then(function (response) {
            self.setState({
                menu: response.data,
            });
        });
    }
    // função de renderização de retorna o "html" desejado
    render() {
        // menu de links para o navbar
        let menu = this.state.menu;
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
                        <NavMenu menu={menu} />
                    </div>
                </div>
            </nav>
        );
    }
}

//exportação do componente
export default Navbar;