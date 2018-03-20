import React from 'react';

class Titulo extends React.Component {
    constructor(props) {
        super(props);
        // captura da hora para ver o ciclo de vida do componente
        this.state = { hora: new Date() };
    }
    // executado quando o componente é renderizado na tela
    componentDidMount() {
        this.horaID = setInterval(
            () => this.atualizarSegundos(),
            1000
        );
    }
    // método para atulizar o valor da hora
    atualizarSegundos() {
        this.setState({ hora: new Date() });
    }
    // método executado quando o componente é destruido 
    componentWillUnmount(){
        clearInterval(this.horaID);
        console.log('Eita!');
    }
    // função de renderização de retorna o "html" desejado
    render() {
        return <h1>Curso de React com Gulp {this.state.hora.toLocaleTimeString()}</h1>;
    }
}

//exportação do componente
export default Titulo;