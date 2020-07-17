// Write your Character component here
import React from 'react'
import {Card} from '../Card/Card'

export function Cards({pokemon}) {
  friends.map((item, index) => {
    console.log(item)
  })
  return (
    <div className='card-container'>
      <div className='card'>
        <Card />
      </div>
    </div>
  )
}