import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Header} from './components/Header/Header'
import {Cards} from './components/Cards/Cards'

const PokeCards = () => {
  const [pokemon, ]
  return (
    <header >
      <Header title='PokeCards App' description='Gotta Catch Em All!!' />
      <Cards />
    </header>
  );
}

export default PokeCards;
