import { useState } from 'react'
import { IPost } from './../types/posts'

export const useEdit = () => {
  const [editActive, setEditActive] = useState<boolean>(false)

  const toEditPost = (p: IPost) => {
    localStorage.setItem(
      `post-${p.id}`,
      JSON.stringify({ key: p.id, value: p })
    )
    setEditActive(true)
  }

  return { toEditPost, editActive, setEditActive }
}
