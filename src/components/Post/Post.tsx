import React, { FC, useEffect, useState } from 'react'
import { useTypedSelector } from './../../hooks/useTypedSelector'
import { useActions } from './../../hooks/useActions'
import { getCountPages } from '../../helpers'

import './Post.scss'

export const Post: FC = () => {
  const { posts, loading, error, currentPostsPage, page } = useTypedSelector(
    (state) => state.posts
  )
  const {
    fetchPosts,
    setPostsPage,
    updatePost,
    deletePost,
    addPost,
  } = useActions()
  const pages = getCountPages(posts)
  const [editPost, setEditPost] = useState<any>(null)
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
      {currentPostsPage.map((p: any) => (
        <p key={p.id}>
          ID: {p.id} - {p.title}
          <button
            onClick={() => {
              if (!localStorage.getItem(`post-${p.id}`)) {
                localStorage.setItem(
                  `post-${p.id}`,
                  JSON.stringify({ key: p.id, value: p })
                )
              }
              const post: any = localStorage.getItem(`post-${p.id}`)
              setEditPost(JSON.parse(post))
            }}
          >
            edit
          </button>
          <button
            onClick={() => {
              deletePost(p.id, page)
            }}
          >
            remove
          </button>
        </p>
      ))}
      <div style={{ display: 'flex' }}>
        {pages.map((p, i) => (
          <p key={i} onClick={() => setPostsPage(p)} className="pagination">
            {p}
          </p>
        ))}
      </div>
      <div>
        {editPost && (
          <>
            <textarea
              name="post"
              value={editPost.value.title}
              onChange={(e) =>
                setEditPost({
                  ...editPost,
                  value: {
                    ...editPost.value,
                    title: e.target.value,
                  },
                })
              }
            ></textarea>
          </>
        )}
        <button
          onClick={() => {
            localStorage.setItem(
              `post-${editPost.key}`,
              JSON.stringify({
                key: editPost.key,
                value: editPost.value,
              })
            )
            updatePost(editPost.value, editPost.key)
            setEditPost('')
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            localStorage.clear()
          }}
        >
          clear
        </button>
        <button
          onClick={() => {
            localStorage.clear()
            fetchPosts()
          }}
        >
          reset posts
        </button>
        <button
          onClick={() => {
            addPost({
              userId: 2,
              title: 'doloribus',
              body: 'qui ffdfdfo',
              id: posts[posts.length - 1].id + 1,
            })
          }}
        >
          add post
        </button>
      </div>
    </div>
  )
}
