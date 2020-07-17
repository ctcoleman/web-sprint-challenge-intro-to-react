import React, {useState, useEffect} from 'react'
import axios from 'axios'

export function Card({pokemon, url}) {
  const [abilities, setAbilities] = useState([])

  useEffect(() => {
    axios.get(`${url}`)
    .then(res => {
      setAbilities(res.data)
      console.log(abilities)
    })
    .catch(err => console.log(err))
  },[url])
  return (
    <h1>{pokemon}</h1>
    <button onClick={setAbilit}></button>
  )
}