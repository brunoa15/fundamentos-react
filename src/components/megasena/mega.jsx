import React, {Component} from 'react'
import './mega.css'

export default class Mega extends Component {
    state = {
        quantidadeNumeros: 1,
        numerosGerados: []
    }
    
    alterarQuantidadeNumeros = (event) => {
        this.setState({
            quantidadeNumeros: +event.target.value
        })
    }

    gerarNumero = () => {
        return Math.floor(Math.random() * 60) + 1;
    }

    gerarMega = () => {
        const mega = [];

        for (let i = 0; i < this.state.quantidadeNumeros; i++) {
            let novoNumero = this.gerarNumero();
            while (mega.includes(novoNumero)) {
                novoNumero = ((novoNumero + 1) % 60) + 1;
            }
            
            mega.push(novoNumero);
        }

        this.setState({
            numerosGerados: mega
        });
    }

    
    render() {
        const imprimirNumeros = (
            this.state.numerosGerados.map(numero => (
                <td key={numero}>{numero}</td>
            ))
        )

        return (
            <div>
                <h2>Gerador de números</h2>
                <input min={1} max={12} value={this.state.quantidadeNumeros} onChange={this.alterarQuantidadeNumeros} type="number"/>
                <button onClick={this.gerarMega}>Gerar!</button>
                <table>
                    <tbody>
                        <tr>
                            {imprimirNumeros}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}