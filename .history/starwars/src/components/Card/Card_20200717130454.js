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
  },[])
  return (
    <h1>{pokemon}</h1>
  )
}