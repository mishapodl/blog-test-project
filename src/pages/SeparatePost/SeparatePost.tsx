import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const SeparatePost = () => {
  const { id }: any = useParams()
  const { fetchComments } = useActions()
  const { comments } = useTypedSelector((state) => state.comments)

  useEffect(() => {
    fetchComments(id)
  }, [])

  return (
    <div>
      <h1>Post ID: {id}</h1>
      {comments.map(({ id, name, body }) => (
        <div key={id}>
          <h3>Name: {name}</h3>
          <p>{body}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}
