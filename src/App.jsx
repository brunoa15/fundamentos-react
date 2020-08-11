import React from 'react';
import './styles.css';

import AppHeader from './components/header';
import RNG from './components/RNG';
import Card from './components/card';
import ListaAlunos from './components/repeticao/listaAlunos';
import Tabela from './components/repeticao/familia';
import Input from './components/formulario/input';
import Contador from './components/contador/contador';
import Mega from './components/megasena/mega';

const App = () => (
    <>
        <AppHeader />
        <div className="content">
            <Card titulo="Desafio - Mega Sena">
                <Mega />
            </Card>
            <Card titulo="Contador">
                <Contador numeroInicial={25} />
            </Card>
            <Card titulo="Formulario">
                <Input />
            </Card>
            <Card titulo="Desafio Repetição">
                <Tabela />
            </Card>
            <Card titulo="Gerador de números">
                <RNG minValue={1} maxValue={15} />
            </Card>
            <Card titulo="Gerador de números">
                <RNG minValue={1} maxValue={15} />
            </Card>
            <Card titulo="Gerador de números">
                <RNG minValue={1} maxValue={15} />
            </Card>
            <Card titulo="Gerador de números">
                <RNG minValue={1} maxValue={15} />
            </Card>
            <Card titulo="Repetição">
                <ListaAlunos />
            </Card>
        </div>
    </>
)

export default App;