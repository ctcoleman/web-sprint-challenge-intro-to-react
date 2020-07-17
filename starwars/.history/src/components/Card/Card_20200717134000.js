import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Article, Header, Caption, CaptionParagraph, Name, Image } from './CardStyle'

export function Card({ pokemon, url }) {
  const [abilities, setAbilities] = useState(true)

  useEffect(() => {
    axios.get(`${url}`)
      .then(res => {
        console.log(res.data.abilities)
      })
      .catch(err => console.log(err))
  }, [abilities])
  return (
    <Article className='Card'>
      <Header>
        <span>{pokemon}</span>
      </Header>
      <div className='Card-image'>
        <Image />
      </div>
      <Caption className='Card-caption'>
        <Name>{pokemon}</Name>
        <CaptionParagraph></CaptionParagraph>
      </Caption>
    </Article>
  )
}