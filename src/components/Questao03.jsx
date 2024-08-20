import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Questao05 = () => {
    const [maior, setMaior] = useState({capital: '', population: -Infinity})
    const [menor, setMenor] = useState({capital: '', population:  Infinity})
    
    useEffect(() => {
        // misturo muito then-catch com async-await

        // função assíncrona que retorna uma promessa do axios
        const getData = async () => {
            return axios.get("https://restcountries.com/v3.1/region/europe?fields=capital,population")
        }
        
        // tratando a promessa com then
        getData().then(resposta => {
            // funcao anonima de callback que busca na resposta a maior e menor capital
            let maior = {capital: '', population: -Infinity}
            let menor = {capital: '', population:  Infinity}

            // transformo o json data em um array e percorro
            Array.from(resposta.data).map((registro) => {
                if(registro.population <= menor.population)
                    menor = registro
                if(registro.population >= maior.population)
                    maior = registro
            })

            setMenor({
                capital: menor.capital[0],
                population: menor.population
            })
            setMaior({
                capital: maior.capital[0],
                population: maior.population
            })
        })
    }, [])

    return (
        <div>
            <h2>Maior capital: {maior.capital}, {maior.population}</h2>
            <h2>Menor capital: {menor.capital}, {menor.population}</h2>
        </div>
    )
}

export default Questao05