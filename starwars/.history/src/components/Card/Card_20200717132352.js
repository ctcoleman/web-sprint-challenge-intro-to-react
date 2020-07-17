import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Article, Header, Caption, CaptionParagraph, CaptionStrong}
export function Card({pokemon, url}) {
  const [abilities, setAbilities] = useState([])

  useEffect(() => {
    axios.get(`${url}`)
    .then(res => {
      setAbilities(res.data)
      console.log(abilities)
    })
    .catch(err => console.log(err))
  },[pokemon])
  return (
    <h1>{pokemon}</h1>

  )
}