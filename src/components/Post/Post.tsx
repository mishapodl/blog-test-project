import React, { FC, useEffect } from 'react'
import { useTypedSelector } from './../../hooks/useTypedSelector'
import { useActions } from './../../hooks/useActions'
import { usePost } from '../../hooks/usePost'

import './Post.scss'
import { Button } from './../Button/Button'
import { ShortPost } from '../ShortPost/ShortPost'

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
              <ShortPost key={p.id} p={p} page={page} />
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
