import React, { useState } from 'react'

export default () => {
    const [valor, setValor] = useState("Inicial");

    const updateValue = (e) => {
        setValor(e.target.value);
    }

    return (
        <div>
            <h2>{valor}</h2>
            <input value={valor} onChange={updateValue}/>
        </div>
    )
}