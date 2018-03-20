import React from 'react';

import Cartao from './cartao';

class ListaCartao extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cliques: 0 };
        // registro de método com (bind)
        this.addClique = this.addClique.bind(this);
    }
    // método que adiciona mais um clique ao total
    addClique() {
        //this.setState({cliques: this.state.cliques + 1});
        // versão correta para implementar acumulador
        this.setState((prevState)=>({
            cliques: prevState.cliques + 1
        }));
    }
    // função de renderização de retorna o "html" desejado
    render() {
        // lista dos dados dos cartões
        let noticias = [
            { titulo: 'Título 1', descricao: 'Descrição 1', detalhe: 'Detalhe 1', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
            { titulo: 'Título 2', descricao: 'Descrição 2', detalhe: 'Detalhe 1', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
            { titulo: 'Título 3', descricao: 'Descrição 3', detalhe: 'Detalhe 1', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
            { titulo: 'Título 4', descricao: 'Descrição 4', detalhe: 'Detalhe 1', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
            { titulo: 'Título 5', descricao: 'Descrição 5', detalhe: 'Detalhe 1', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
            { titulo: 'Título 6', descricao: 'Descrição 6', detalhe: 'Detalhe 1', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
            { titulo: 'Título 7', descricao: 'Descrição 7', detalhe: 'Detalhe 1', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' }
        ];
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
        console.log(novaLista);

        return (
            <div>
                {/* Exibe o número de cliques sobre as imagens dos cartões */}
                <p>Quantidade de cliques: {this.state.cliques}</p>
                {linha}
            </div>
        );
    }
}

//exportação do componente
export default ListaCartao;