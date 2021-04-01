import React, { FC } from 'react'
import { useActions } from '../../hooks/useActions'
import { Button } from '../Button/Button'
import { ContainerEditPost } from '../ContainerEditPost/ContainerEditPost'
import { IPost } from '../../types/posts'
import { useEdit } from '../../hooks/useEdit'
import { Link } from 'react-router-dom'
import './CardPost.scss'

interface ICardPost {
  p: IPost
  page: number
}

export const CardPost: FC<ICardPost> = ({ p, page }: ICardPost) => {
  const { deletePost } = useActions()
  const { toEditPost, editActive, setEditActive } = useEdit()

  return (
    <>
      <div key={p.id}>
        <h3>Title: {p.title}</h3>
        <Link to={`/post/${p.id}`}>
          <p>Body: {p.body}</p>
        </Link>
        <hr />
        <Button name="Edit" onClick={() => toEditPost(p)} />
        <Button name="Remove" onClick={() => deletePost(p.id, page)} />
      </div>
      {editActive && <ContainerEditPost id={p.id} onEdit={setEditActive} />}
    </>
  )
}