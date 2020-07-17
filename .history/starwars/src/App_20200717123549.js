import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Header} from './components/Header/Header'
import {Cards} from './components/Cards/Cards'
import {API_URL, POKEMON} from './constants/constants'
const PokeCards = () => {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}${POKEMON}`)
    .then(res => {
      setPokemon(res)
      console.log(pokemon)
    })
  })
  return (
    <header >
      <Header title='PokeCards App' description='Gotta Catch Em All!!' />
      <Cards />
    </header>
  );
}

export default PokeCards;
