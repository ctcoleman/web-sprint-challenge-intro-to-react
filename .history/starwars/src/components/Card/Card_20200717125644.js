import React from 'react'

export function Card({pokemon, url}) {
  useEffect(() => {
    axios.get(`${url}`)
    .then
  },[pokemon])
  return (
    <h1>{pokemon}</h1>
  )
}