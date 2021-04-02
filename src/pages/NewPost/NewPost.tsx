import React, { FC, useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { TextArea } from '../../components/TextArea/TextArea'
import { IPost } from './../../types/posts'
import { useHistory } from 'react-router-dom'
import { usePost } from '../../hooks/usePost'
import './NewPost.scss'
import { useActions } from '../../hooks/useActions'

export const NewPost: FC = () => {
  const history = useHistory()
  const { addPost } = useActions()
  const [newPost, setNewPost] = useState<IPost>({
    id: usePost().getLastId('post') + 1,
    userId: 1,
    title: 'Title',
    body: 'Body',
  })

  const savePost = () => {
    addPost(newPost)
    history.push(`/post/${newPost.id}`)
  }

  const onChange = (e: React.FormEvent<any>) => {
    setNewPost({
      ...newPost,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  return (
    <div className="container-new-post">
      <label>User ID - (name)</label>
      <Input
        name="userId"
        value={newPost.userId + ''}
        onChange={(e: React.FormEvent<any>) => onChange(e)}
        classes="edit-title"
      />
      <label>Title</label>
      <Input
        name="title"
        value={newPost.title}
        onChange={(e: React.FormEvent<any>) => onChange(e)}
        classes="edit-title"
      />
      <label>Text</label>
      <TextArea
        name="body"
        value={newPost.body}
        onChange={(e: React.FormEvent<any>) => onChange(e)}
        classes="edit-body"
      />
      <Button name="Add and save" onClick={() => savePost()} classes="btn-save" />
    </div>
  )
}
