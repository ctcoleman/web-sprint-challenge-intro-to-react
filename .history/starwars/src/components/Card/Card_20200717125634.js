import React from 'react'

export function Card({pokemon, url}) {
  useEffect(() => {
    axios.get(`${url}`)

  },[pokemon])
  return (
    <h1>{pokemon}</h1>
  )
}