import React, {useState, useEffect} from 'react'
import axios from 'axios'

export function Card({pokemon, url}) {
  const [abilities, setAbilities] = useState([])

  useEffect(() => {
    axios.get(`${url}\`)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  },[pokemon])
  return (
    <h1>{pokemon}</h1>
  )
}