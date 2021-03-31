import React, { FC } from 'react'
import { useTypedSelector } from './../../hooks/useTypedSelector'
import { useActions } from './../../hooks/useActions'
import { usePost } from '../../hooks/usePost'
import { Button } from './../Button/Button'
import { ShortPost } from '../ShortPost/ShortPost'
import { IPost } from '../../types/posts'
import './Post.scss'

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
            {currentPostsPage.map((p: IPost) => (
              <div key={p.id}>
                <ShortPost p={p} page={page} />
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
