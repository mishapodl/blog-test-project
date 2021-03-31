import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { usePost } from '../../hooks/usePost'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IPost } from '../../types/posts'
import { IComment } from './../../types/comments'

export const SeparatePost: FC = () => {
  const { id }: any = useParams()
  const { fetchComments } = useActions()
  const { specificPost } = usePost()
  const { comments } = useTypedSelector((state) => state.comments)
  const post: IPost = specificPost(id)

  useEffect(() => {
    fetchComments(id)
  }, [])

  return (
    <div>
      {post && (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <span>{post.userId}</span>
        </div>
      )}
      <h1>Post ID: {id}</h1>
      {comments.map(({ id, name, body }: IComment) => (
        <div key={id}>
          <h3>Name: {name}</h3>
          <p>{body}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}
