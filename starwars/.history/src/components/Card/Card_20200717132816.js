import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Article, Header, Caption, CaptionParagraph, Name, Image } from './CardStyle'
export function Card({ pokemon, url }) {
  const [abilities, setAbilities] = useState([])

  useEffect(() => {
    axios.get(`${url}`)
      .then(res => {
        setAbilities(res.data)
        console.log(abilities)
      })
      .catch(err => console.log(err))
  }, [abilities])
  return (
    <Article className='Post'>
      <Header>
        <span>{pokemon}</span>
      </Header>
      <div className='Post-image'>
        <Image alt={caption} src={pictureUrl} />
      </div>
      <Caption className='Post-caption'>
        <CaptionStrong>{pictureName}</CaptionStrong>
        <CaptionParagraph>{caption}</CaptionParagraph>
      </Caption>
    </Article>
  )
}