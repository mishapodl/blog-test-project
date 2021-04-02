import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { EditPost } from '../../components/EditPost/EditPost'
import { cutString, getLocal } from '../../helpers'
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
    <div className="article">
      {post && (
        <div className="article-content">
          <h3 className="article-title">{post.title}</h3>
          <p className="article-body">{post.body}</p>
          <span className="article-author">
            {users && users[post.userId - 1].name}
          </span>
        </div>
      )}

      {!editActive && (
        <Button name="✏" onClick={() => toEditPost(post)} classes="btn-edit" />
      )}
      {editActive && (
        <div className="container-edit-post inner-container-edit">
          <EditPost id={id} onEdit={setEditActive} separatePost={true} />
        </div>
      )}

      <div className="comments">
        <h3>Comments</h3>
        {comments.map(({ id, email, body }: IComment) => (
          <div className="comment" key={id}>
            <span className="comment-email">{cutString(email, 1, '@')}</span>
            <p className="comment-body">{body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
