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
  const { addPost, removeComments } = useActions()
  const [newPost, setNewPost] = useState<IPost>({
    id: usePost().getLastId('post') + 1,
    userId: 0,
    title: '',
    body: '',
  })

  const savePost = () => {
    addPost(newPost)
    removeComments()
    history.push(`/post/${newPost.id}`)
  }

  const onChange = (e: React.FormEvent<any>) => {
    setNewPost({
      ...newPost,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  return (
    <div>
      <Input
        name="userId"
        value={newPost.userId + ''}
        onChange={(e: React.FormEvent<any>) => onChange(e)}
      />
      <Input
        name="title"
        value={newPost.title}
        onChange={(e: React.FormEvent<any>) => onChange(e)}
      />
      <TextArea
        name="body"
        value={newPost.body}
        onChange={(e: React.FormEvent<any>) => onChange(e)}
      />
      <Button name="Save" onClick={() => savePost()} />
    </div>
  )
}
