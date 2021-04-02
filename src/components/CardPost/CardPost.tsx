import React, { FC } from 'react'
import { useActions } from '../../hooks/useActions'
import { Button } from '../Button/Button'
import { EditPost } from '../EditPost/EditPost'
import { IPost } from '../../types/posts'
import { useEdit } from '../../hooks/useEdit'
import { Link } from 'react-router-dom'
import './CardPost.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { cutString } from '../../helpers'

interface ICardPost {
  p: IPost
  page?: number
  cut?: boolean
}

export const CardPost: FC<ICardPost> = ({
  p,
  page = 1,
  cut = false,
}: ICardPost) => {
  const { deletePost } = useActions()
  const { users } = useTypedSelector((state) => state.users)
  const { toEditPost, editActive, setEditActive } = useEdit()

  return (
    <>
      <div className="content">
        <h2 className="title">{cutString(p.title, 6)}</h2>
        <p className="copy">
          {cut ? `${cutString(p.body, 5)} ...` : cutString(p.body, 15)}
        </p>
        <span className="author-post">
          {users.length && users[p.userId - 1].name}
        </span>
        <div className="more">
          <Link to={`/post/${p.id}`}>
            <Button name="Read more" classes="btn-read-more" />
          </Link>
          {!cut && (
            <div className="edit-post">
              <Button name="✏" onClick={() => toEditPost(p)} classes="btn-edit" />
              <Button
                name="🗑"
                onClick={() => deletePost(p.id, page)}
                classes="btn-remove"
              />
            </div>
          )}
        </div>
      </div>
      {editActive && (
        <div className="container-edit-post">
          <EditPost id={p.id} onEdit={setEditActive} />
        </div>
      )}
    </>
  )
}
