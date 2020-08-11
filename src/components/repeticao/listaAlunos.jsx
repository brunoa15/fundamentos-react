import React, {Component} from 'react'

export default class ListaAlunos extends Component {
    render() {
        const lista = [
            {id: 1, nome: 'Bruno'},
            {id: 2, nome: 'Antônio'},
            {id: 3, nome: 'Vieira'}
        ];

        return(
            <div>
                <ul>
                    {lista.map(item => (
                        <li key={item.id}>{item.nome}</li>
                    ))}
                </ul>
            </div>
        )
    }
}