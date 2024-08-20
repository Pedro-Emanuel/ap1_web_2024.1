import React, { useState, useEffect } from 'react';

const Questao1A = () => { 
    const lista = [
        {a: 10,  b:  3,  c:  7},
        {a:  5,  b: -3,  c:  9},
        {a:  1,  b:  9,  c: 40}
    ];

    return (
        <Questao1B lista={lista}/>
    );
}

function Questao1B({ lista }) {
    // Decidi colocar o maiores como string para facilitar a impressão
    const [maiores, setMaiores] = useState('')
    
    // Função que percorre a lista e atualiza os maiores valores
    const atualizar = () => {
        let maioresTemp = []
        lista.map(objeto => {
            let maior = -Infinity
            Object.entries(objeto).map(entrie => {
                if(entrie[1] >= maior) maior = entrie[1]
            })
            maioresTemp.push(maior)
        })
        setMaiores(maioresTemp.toString())
    }

    // Usando o useEffect para sempre que a lista mudar, os maiores valores serem atualizados
    // Chama a função atualizar()
    useEffect(atualizar, [lista])

    return (
        <h2>Maiores valores de cada objeto: {maiores}</h2>
    )
}

export default Questao1A;
