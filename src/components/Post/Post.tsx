import React, { FC } from 'react'
import { useTypedSelector } from './../../hooks/useTypedSelector'
import { useActions } from './../../hooks/useActions'
import { usePost } from '../../hooks/usePost'

import './Post.scss'
import { Button } from './../Button/Button'
import { ShortPost } from '../ShortPost/ShortPost'
import { Link } from 'react-router-dom'

export const Post: FC = () => {
  const { loading, error, page } = useTypedSelector((state) => state.posts)
  const { currentPostsPage } = usePost()
  const { addPost } = useActions()

  loading && error && <h1>{error}</h1>

  return (
    <div>
      <h1>Posts</h1>
      {!loading ? (
        <>
          <div>
            {currentPostsPage.map((p: any) => (
              <div key={p.id}>
                <Link to={`/post/${p.id}`}>
                  <ShortPost p={p} page={page} />
                </Link>
              </div>
            ))}
          </div>
          <div>
            <Button name="Add post" onClick={() => addPost({})} />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
