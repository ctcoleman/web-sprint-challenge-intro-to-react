import React, {useEffect} from 'react'
import axios from 'axios'

export function Card({pokemon, url}) {
  useEffect(() => {
    axios.get(`${url}`)
    .then(res => {
      console.log(res)
    })
    .cath(err => consolelog(err))
  },[pokemon])
  return (
    <h1>{pokemon}</h1>
  )
}