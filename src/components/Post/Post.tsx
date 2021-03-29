import React, { FC, useEffect } from 'react'
import { useTypedSelector } from './../../hooks/useTypedSelector'
import { useActions } from './../../hooks/useActions'

import './Post.scss'

export const Post: FC = () => {
  const { posts, loading, error } = useTypedSelector((state) => state.posts)
  const { fetchPosts } = useActions()

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
      {posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  )
}
