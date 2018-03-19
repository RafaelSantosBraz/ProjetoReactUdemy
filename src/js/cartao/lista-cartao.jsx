import React from 'react';

import Cartao from './cartao';

class ListaCartao extends React.Component {
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

        let listaCartoes = function (grupo) {
            return grupo.map(function (item, index) {
                return (
                    <div key={index} className={tamanhoCol}>
                        <Cartao dados={item} />
                    </div>
                );
            });
        };
        // linha de cartões
        let linha = novaLista.map(function (grupo, index) {
            return (
                <div key={index} className="row">
                    {listaCartoes(grupo)}
                </div>
            );
        });
        // teste
        console.log(novaLista);

        return (
            <div>
                {linha}
            </div>
        );
    }
}

//exportação do componente
export default ListaCartao;