import React, { FC, useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { usePost } from '../../hooks/usePost'
import { CardPost } from '../CardPost/CardPost'
import { IPost } from '../../types/posts'
import { useUsers } from '../../hooks/useUsers'
import { IUser } from '../../types/users'
import { Filter } from '../Filter/Filter'
import { Search } from '../Search/Search'
import './Posts.scss'

export const Posts: FC = () => {
  const { loading, error, page } = useTypedSelector((state) => state.posts)
  const { currentPostsPage, posts } = usePost()
  const { getUser } = useUsers()
  const [user, setUser] = useState<IUser | null>(null)

  const setFilter = (id: number | null) => {
    id ? setUser(getUser(id)) : setUser(null)
  }

  loading && error && <h1>{error}</h1>

  return (
    <div>
      <Search />
      <div style={{ borderBottom: '2px solid red', margin: '20px 0' }}></div>
      <Filter setFilter={setFilter} />
      {!loading ? (
        <>
          <div>
            {!user
              ? currentPostsPage.map((p: IPost) => (
                  <div key={p.id}>
                    <CardPost p={p} page={page} />
                  </div>
                ))
              : posts.map((p) => (
                  <div key={p.id}>
                    {user.id == p.userId && <CardPost p={p} page={page} />}
                  </div>
                ))}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
