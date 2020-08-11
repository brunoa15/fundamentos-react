import React from 'react'

const RNG = (props) => {

    const { minValue, maxValue } = props;
    const randNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    return (
        <div>
            <p>
                O número gerado entre 
                <strong> { minValue } </strong>
                e
                <strong> { maxValue } </strong>
                é:
                <strong> { randNumber }</strong>
            </p>
        </div>
    )
};

export default RNG;