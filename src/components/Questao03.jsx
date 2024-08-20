import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Questao05 = () => {
    const [maior, setMaior] = useState({capital: '', population: -Infinity})
    const [menor, setMenor] = useState({capital: '', population:  Infinity})
    
    useEffect(() => {
        const getData = async () => {
            return await axios.get("https://restcountries.com/v3.1/region/europe?fields=capital,population")
        }
        
        getData().then(resposta => {
            let maior = {capital: '', population: -Infinity}
            let menor = {capital: '', population:  Infinity}

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