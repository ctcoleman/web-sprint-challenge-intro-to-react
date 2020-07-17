import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Header} from './components/Header/Header'
import {Cards} from './components/Cards/Cards'
import {API_URL, POKEMON} from './constants/constants'
import { createGlobalStyle } from 'styled-components'



const PokeCards = () => {
  const [pokemon, setPokemon] = useState([])
  const [isClick, setIsClick] = useState(false)
  
  function changeState() {
    if (isClick) {
      setIsClick(false)
    } else {
    setIsClick(true)
  }
}
  useEffect(() => {
    axios.get(`${API_URL}${POKEMON}`)
    .then(res => {
      setPokemon(res.data.results)
      console.log(pokemon)
    })
    .catch(err => console.log(err))
  },[isClick])
  return (
    <header >
      <Header title='PokeCards App' description='Gotta Catch Em All!!' />
      <button onClick={() => changeState()}>Click here</button>
      <Cards pokemon={pokemon}/>
    </header>
  );
}

export default PokeCards;
