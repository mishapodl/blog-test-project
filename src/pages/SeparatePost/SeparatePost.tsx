import React from 'react'
import { useParams } from 'react-router-dom'

export const SeparatePost = () => {
  const { id }: any = useParams()

  return (
    <div>
      <h1>Post ID: {id}</h1>
    </div>
  )
}
