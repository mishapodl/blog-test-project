import React, { FC } from 'react'
import { useActions } from '../../hooks/useActions'
import { Button } from '../Button/Button'
import { EditPost } from '../EditPost/EditPost'
import { IPost } from '../../types/posts'
import { useEdit } from '../../hooks/useEdit'
import { Link } from 'react-router-dom'
import './CardPost.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector'

interface ICardPost {
  p: IPost
  page?: number
}

export const CardPost: FC<ICardPost> = ({ p, page = 1 }: ICardPost) => {
  const { deletePost } = useActions()
  const { users } = useTypedSelector((state) => state.users)
  const { toEditPost, editActive, setEditActive } = useEdit()

  return (
    <>
      <div key={p.id}>
        <h3>Title: {p.title}</h3>
        <Link to={`/post/${p.id}`}>
          <p>Body: {p.body}</p>
        </Link>
        <span>{users.length && users[p.userId - 1].name}</span>
        <hr />
        <Button name="Edit" onClick={() => toEditPost(p)} />
        <Button name="Remove" onClick={() => deletePost(p.id, page)} />
      </div>
      {editActive && <EditPost id={p.id} onEdit={setEditActive} />}
    </>
  )
}
