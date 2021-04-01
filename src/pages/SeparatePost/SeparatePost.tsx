import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { EditPost } from '../../components/EditPost/EditPost'
import { getLocal } from '../../helpers'
import { useActions } from '../../hooks/useActions'
import { useEdit } from '../../hooks/useEdit'
import { usePost } from '../../hooks/usePost'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IPost } from '../../types/posts'
import { IComment } from './../../types/comments'
import './SeparatePost.scss'

export const SeparatePost: FC = () => {
  const { id }: any = useParams()
  const { fetchComments } = useActions()
  const { toEditPost, setEditActive, editActive } = useEdit()
  const { comments } = useTypedSelector((state) => state.comments)
  const users = getLocal('users')
  const post: IPost = usePost().specificPost(id)

  useEffect(() => {
    fetchComments(id)
  }, [])

  return (
    <div>
      {post && (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          {console.log(users)}
          <span>{users[post.userId - 1].name}</span>
        </div>
      )}
      <Button name="Edit" onClick={() => toEditPost(post)} />
      <h1>Post ID: {id}</h1>
      {editActive && (
        <EditPost id={id} onEdit={setEditActive} separatePost={true} />
      )}
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
