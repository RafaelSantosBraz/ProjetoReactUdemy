import React from 'react';
// importação da biblioteca externa Axios
import axios from 'axios';

import Cartao from './cartao';
import Busca from '../busca/busca'

class ListaCartao extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cliques: 0, busca: '', dados: [], servidor: [] };
        // registro de método com (bind)
        this.addClique = this.addClique.bind(this);
        this.atualizaBusca = this.atualizaBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    // método que adiciona mais um clique ao total
    addClique() {
        //this.setState({cliques: this.state.cliques + 1});
        // versão correta para implementar acumulador
        this.setState((prevState) => ({
            cliques: prevState.cliques + 1
        }));
    }
    // método para realizar a busca
    onSubmit(evento) {
        //console.log(this.state.busca);
        let busca = this.state.busca;
        // servidor é a lista completa dos dados, sem perder a referência
        let dados = this.state.servidor;
        // pesquisa na lista, nos títulos|descrição|detalhe, se existe a busca
        let novaLista = dados.filter(function (item) {
            if (item.titulo.toUpperCase().indexOf(busca.toUpperCase()) > -1
                || item.descricao.toUpperCase().indexOf(busca.toUpperCase()) > -1
                || item.detalhe.toUpperCase().indexOf(busca.toUpperCase()) > -1) {
                return item;
            }
        });
        this.setState({ dados: novaLista });
        // não atualiza a tela após o envio
        evento.preventDefault();
    }
    // método para atulizar a busca
    atualizaBusca(evento) {
        // capturar o valor digitado no campo de busca
        this.setState({ busca: evento.target.value });
        // se o valor pesquisado for nulo, a lista toda é exibida
        if (evento.target.value == "") {
            this.setState({ dados: this.state.servidor });
        }
    }
    // executa quando o componente é criado
    componentDidMount() {
        let self = this;
        // faz a requisição ao servidor especificado, utilizando-se o Axios
        axios.get('http://localhost:8000/servidor.php?dados=1').then(function (response) {
            self.setState({
                dados: response.data,
                servidor: response.data
            });
        });
    }
    // função de renderização de retorna o "html" desejado
    render() {
        // lista dos dados dos cartões por meio do estado do componente
        let noticias = this.state.dados;
        // lista auxiliar para divisão dos cartões por linha
        let aux = [];
        // lista agrupada dos cartões
        let novaLista = [];
        // percorrer todos os objetos de noticias
        for (let k = 0; k < noticias.length; k++) {
            aux.push(noticias[k]);
            // verificação do número máximo de cartões por linha
            if (aux.length == this.props.qtdLinha) {
                // colocando a lista auxiliar em uma posição
                novaLista.push(aux);
                // zerando a lista auxiliar
                aux = [];
            }
            // verifica se terminou o laço, mas sem atingir o máximo por linha
            else if (k == noticias.length - 1) {
                novaLista.push(aux);
            }
        }
        // variável local para definir o tamanho da coluna dinamicamente
        let tamanhoCol = "col m" + this.props.tamanhoCol;

        let listaCartoes = function (grupo, self) {
            return grupo.map(function (item, index) {
                return (
                    <div key={index} className={tamanhoCol}>
                        <Cartao dados={item} addClique={self.addClique} />
                    </div>
                );
            });
        };
        // variável local de referência ao componente
        let self = this;
        // linha de cartões
        let linha = novaLista.map(function (grupo, index) {
            return (
                <div key={index} className="row">
                    {listaCartoes(grupo, self)}
                </div>
            );
        });
        // teste
        //console.log(novaLista);

        return (
            <div>
                {/* chamada do componente de busca */}
                <div className="row">
                    <Busca atualizaBusca={this.atualizaBusca} onSubmit={this.onSubmit} busca={this.state.busca} />
                </div>
                {/* Exibe o número de cliques sobre as imagens dos cartões */}
                <p>Quantidade de cliques: {this.state.cliques}</p>
                {linha}
            </div>
        );
    }
}

//exportação do componente
export default ListaCartao;