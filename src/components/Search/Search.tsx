import React, { useState } from 'react'
import { Input } from './../Input/Input'
import { useSearch } from '../../hooks/useSearch'
import { IPost } from './../../types/posts'
import { CardPost } from './../CardPost/CardPost'
import './Search.scss'

export const Search = () => {
  const { searchText, findedPosts } = useSearch()
  const [text, setText] = useState<string>('')
  const [findBy, setfindBy] = useState<'title' | 'body' | ''>('title')

  const onChange = (e: any) => {
    setText(e.target.value)
    searchText(e.target.value, findBy)
  }

  return (
    <>
      <Input
        name="search"
        onChange={(e: any) => onChange(e)}
        value={text}
        placeholder="Search text"
        classes="input-search"
      />
      <div className="switch-by-search">
        <div>
          <Input
            onChange={() => setfindBy('title')}
            type="radio"
            name="filter"
            checked={findBy === 'title'}
          />
          <label>Title</label>
        </div>
        <div>
          <Input
            onChange={() => setfindBy('body')}
            type="radio"
            name="filter"
            checked={findBy === 'body'}
          />
          <label>Body</label>
        </div>
      </div>

      {text && (
        <div className="container-cards search-cards">
          <h3>RESULTS</h3>
          <div>
            {findedPosts.length ? (
              findedPosts.map((p: IPost) => (
                <div className="card" key={p.id}>
                  <CardPost key={p.id} p={p} cut={true} />
                </div>
              ))
            ) : (
              <p className="not-found">Posts not found</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
