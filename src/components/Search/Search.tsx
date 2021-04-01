import React, { useState } from 'react'
import { Input } from './../Input/Input'
import { Button } from './../Button/Button'
import { useSearch } from '../../hooks/useSearch'
import { IPost } from './../../types/posts'
import { CardPost } from './../CardPost/CardPost'

export const Search = () => {
  const { searchText, findedPosts } = useSearch()
  const [text, setText] = useState<string>('')
  const [findBy, setfindBy] = useState<'title' | 'body'>('title')

  const onChange = (e: any) => {
    setText(e.target.value)
    searchText(e.target.value, findBy)
  }

  return (
    <div>
      <Button onClick={() => setfindBy('title')} name="Title" />
      <Button onClick={() => setfindBy('body')} name="Body" />
      <Input
        name="search"
        onChange={(e: any) => onChange(e)}
        value={text}
        placeholder="Search text"
      />
      {findedPosts.map((p: IPost) => (
        <CardPost key={p.id} p={p} />
      ))}
    </div>
  )
}
