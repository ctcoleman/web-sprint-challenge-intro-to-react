import React from 'react'

export function Card({pokemon, url}) {
  useEffect(() => {
    axios.get(`${url}`)
    .then(res => {
      
    })
  },[pokemon])
  return (
    <h1>{pokemon}</h1>
  )
}