import React, { useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { Button } from './../Button/Button'
import { ContainerEditPost } from './../ContainerEditPost/ContainerEditPost'

export const ShortPost = ({ p, page }: any) => {
  const { deletePost } = useActions()
  const [editActive, setEditActive] = useState(false)
  
  const toEditPost = (p: any) => {
    localStorage.setItem(
      `post-${p.id}`,
      JSON.stringify({ key: p.id, value: p })
    )
  }

  return (
    <>
      <div key={p.id}>
        <h3>Title: {p.title}</h3>
        <p>Body: {p.body}</p>
        <Button
          name="Edit"
          onClick={() => {
            toEditPost(p)
            setEditActive(true)
          }}
        />
        <Button name="Remove" onClick={() => deletePost(p.id, page)} />
      </div>
      {editActive && <ContainerEditPost id={p.id} onEdit={setEditActive} />}
    </>
  )
}
