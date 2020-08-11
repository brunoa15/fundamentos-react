import React from 'react';
import './styles.css'

export default () => {
    const lista = [
        {id: 1, nome: 'Galinha Brubru', especie: 'Galinha'},
        {id: 2, nome: 'Pato Brubru', especie: 'Pato'},
        {id: 3, nome: 'Pato Brubru de Argila', especie: 'Argila'},
        {id: 4, nome: 'Marreco Brubru', especie: 'Marreco'},

    ];

    const linhaTabela = (
        lista.map(linha => (
            <tr key={linha.id}>
                <td>{linha.id}</td>
                <td>{linha.nome}</td>
                <td>{linha.especie}</td>
            </tr>
        ))
    );

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Espécie</th>
                    </tr>
                </thead>
                <tbody>
                    {linhaTabela}
                </tbody>
            </table>
        </div>
    )
}