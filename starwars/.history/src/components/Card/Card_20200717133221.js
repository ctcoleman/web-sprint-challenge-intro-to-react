import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Article, Header, Caption, CaptionParagraph, Name, Image } from './CardStyle'
export function Card({ pokemon, url }) {
  const [abilities, setAbilities] = useState(true)

  
  return (
    <Article className='Post'>
      <Header>
        <span>{pokemon}</span>
      </Header>
      <div className='Post-image'>
        <Image />
      </div>
      <Caption className='Post-caption'>
        <Name>{pokemon}</Name>
        <CaptionParagraph></CaptionParagraph>
      </Caption>
    </Article>
  )
}