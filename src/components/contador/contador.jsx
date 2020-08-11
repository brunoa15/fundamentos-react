import React, {Component} from 'react';

export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: 10
    }

    incrementarNumero = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    decrementarNumero = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }
    
    alterarPasso = (event) => {
        this.setState({
            passo: +event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <p>Valor Inicial: {this.state.numero}</p>
                <label htmlFor="inputPasso">Passo: </label>
                <input id="inputPasso" type="number" value={this.state.passo} onChange={this.alterarPasso}/>
                <button onClick={this.decrementarNumero}>-</button>
                <button onClick={this.incrementarNumero}>+</button>
            </div>
        )
    }
}