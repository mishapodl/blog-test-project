import React, { FC, useEffect } from 'react'
import { useTypedSelector } from './../../hooks/useTypedSelector'
import { useActions } from './../../hooks/useActions'
import { getCountPages } from '../../helpers'

import './Post.scss'

export const Post: FC = () => {
  const { posts, loading, error, currentPostsPage } = useTypedSelector(
    (state) => state.posts
  )
  const { fetchPosts, setPostsPage } = useActions()
  const pages = getCountPages(posts)

  useEffect(() => {
    fetchPosts()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <h1>Post</h1>
      {currentPostsPage.map((p) => (
        <p key={p.id}>
          ID: {p.id} - {p.title}
        </p>
      ))}
      <div style={{ display: 'flex' }}>
        {pages.map((p, i) => (
          <p
            key={i}
            onClick={() => setPostsPage(p)}
            style={{
              display: 'flex',
              padding: '2px 5px',
              margin: '0 3px',
              backgroundColor: 'red',
              cursor: 'pointer',
            }}
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  )
}
