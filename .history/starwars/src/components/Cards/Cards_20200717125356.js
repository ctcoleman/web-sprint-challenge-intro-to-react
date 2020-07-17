// Write your Character component here
import React from 'react'
import {Card} from '../Card/Card'

export function Cards({pokemon}) {
  return (
    <div className='card-container'>
      <div className='card'>
      {pokemon.map((item, index) => {
        return (
          <Card pokemon={item.name}/>
        )
      })}
        <Card />
      </div>
    </div>
  )
}