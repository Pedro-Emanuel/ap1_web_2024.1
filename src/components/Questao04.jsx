import React, { useState, useEffect } from 'react';


const Questao04 = () => {
    const [maior, setMaior] = useState({capital: '', population: -Infinity})
    const [menor, setMenor] = useState({capital: '', population:  Infinity})
    
    // Usando o useEffect com segundo parâmetro vazio ([])
    // Fazendo isso, esse código só será executado uma vez, quando o componente for montado
    // Isso evita que o código faça as operações assíncronas sempre que o componente for renderizado
    // Como o retorno sempre será o mesmo, seria desnecessário
    useEffect(() => {
        const getData = async () => {
            // Retornando uma promessa que sempre será resolvida, não tem reject.
            // A resolução é uma lista de objetos json
            return new Promise((resolve) => {
                resolve([
                    {"capital":["Dublin"], "population":4994724},
                    {"capital":["Nicosia"], "population":1207361},
                    {"capital":["Madrid"], "population":47351567}
                ])
            })
        }

        // Chamando a função assíncrona getData e criando uma função de callback
        // Essa função recebe a lista de objetos json e percorre eles procurando pelo maior e menor
        getData().then(resultado => {
            let maior = {capital: '', population: -Infinity}
            let menor = {capital: '', population:  Infinity}

            resultado.map(objeto => {
                if(objeto.population >= maior.population)
                    maior = objeto
                if(objeto.population <= menor.population)
                    menor = objeto
            })

            // Depois da busca terminar, seto os valores
            setMaior(maior)
            setMenor(menor)
        })
    }, [])

        return (
            <div>
                <h2>Maior capital: {maior.capital}, {maior.population}</h2>
                <h2>Menor capital: {menor.capital}, {menor.population}</h2>
            </div>
        )
}

export default Questao04