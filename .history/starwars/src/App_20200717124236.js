import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Header} from './components/Header/Header'
import {Cards} from './components/Cards/Cards'
import {API_URL, POKEMON} from './constants/constants'
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
      setPokemon(res)
      
    })
    .catch(err => console.log(err))
  },[isClick])
  return (
    <header >
      <Header title='PokeCards App' description='Gotta Catch Em All!!' />
      <button onClick={() => changeState()}>Click here</button>
      <Cards />
    </header>
  );
}

export default PokeCards;
