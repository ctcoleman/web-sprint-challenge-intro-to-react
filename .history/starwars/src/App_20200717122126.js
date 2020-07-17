import React from 'react';
import Header from './components/Header/Header'
import Cards from './components/Car'
const PokeCards = () => {

  return (
    <header >
      <Header title='PokeCards App' description='Gotta Catch Em All!!' />
      <Cards />
    </header>
  );
}

export default PokeCards;
