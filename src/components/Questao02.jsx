import React, { useState, useEffect } from 'react';

const Questao02 = () => {
    const frente = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
    const costa  = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png"

    // Começando com o pokemon virado pra frente
    const [imagem, setImagem] = useState(frente)

    // Atualizando a imagem com o set do hook para renderizar corretamente
    const virar = () => {
        if (imagem == frente) {
            setImagem(costa)
        } else {
            setImagem(frente)
        }
    }

    // Sempre que o botão for clicado, a função virar() é chamada para atualizar a imagem
    return (
        <div>
            <img src={imagem}/>
            <button onClick={virar}>
                Virar 
            </button>
        </div>
    )
} 

export default Questao02