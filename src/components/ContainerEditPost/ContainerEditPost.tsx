import React, { ReactEventHandler, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { TextArea } from '../TextArea/TextArea'

export const ContainerEditPost = ({ id, onEdit }: any) => {
  const { updatePost } = useActions()
  const [editPost, setEditPost] = useState(
    JSON.parse(localStorage.getItem(`post-${id}`) || '')
  )

  const saveUpdatesPost = () => {
    localStorage.setItem(
      `post-${editPost.key}`,
      JSON.stringify({
        key: editPost.key,
        value: editPost.value,
      })
    )
    setEditPost('')
    updatePost(editPost.value, editPost.key)
    onEdit(false)
  }

  const onChange = (e: any) => {
    setEditPost({
      ...editPost,
      value: {
        ...editPost.value,
        [e.target.name]: e.target.value,
      },
    })
  }

  return (
    <div>
      <Input
        name="title"
        value={editPost.value.title}
        onChange={(e: any) => onChange(e)}
      />
      <TextArea
        name="body"
        value={editPost.value.body}
        onChange={(e: any) => onChange(e)}
      />
      <Button name="Save" onClick={() => saveUpdatesPost()} />
    </div>
  )
}
