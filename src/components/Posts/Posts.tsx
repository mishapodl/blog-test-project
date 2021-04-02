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
    <>
      <div className="container-search">
        <Search />
      </div>
      <div>
        <h1>POSTS</h1>
      </div>
      <div className="filter">
        <Filter setFilter={setFilter} />
      </div>
      {!loading ? (
        <div className="container-cards">
          {!user
            ? currentPostsPage.map((p: IPost) => (
                <div className="card" key={p.id}>
                  <CardPost p={p} page={page} />
                </div>
              ))
            : posts.map(
                (p) =>
                  user.id == p.userId && (
                    <div className="card" key={p.id}>
                      <CardPost p={p} page={page} />
                    </div>
                  )
              )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
