import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Article, Header, Caption, CaptionParagraph, Name, Image } from './CardStyle'

export function Card({ pokemon, url }) {
  const [abilities, setAbilities] = useState(true)
  const [image, setImage] = useState([])

  useEffect(() => {
    axios.get(`${url}`)
      .then(res => {
        setImage(res.data.sprites.front_default)
      })
      .catch(err => console.log(err))
  }, {image})
  return (
    <Article className='Card'>
      <Header>
        <span>{pokemon}</span>
      </Header>
      <div className='Card-image'>
        <Image src={image}/>
      </div>
      <Caption className='Card-caption'>
        <Name>{pokemon}</Name>
        <CaptionParagraph>abil</CaptionParagraph>
      </Caption>
    </Article>
  )
}