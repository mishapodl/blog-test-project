import React, { FC } from 'react'
import { getCountPages } from '../../helpers'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import './Pagination.scss'

export const Pagination: FC = () => {
  const { setPostsPage } = useActions()
  const { posts } = useTypedSelector((state) => state.posts)
  const pages = getCountPages(posts)

  return (
    <div className="pagination">
      {pages.map((p, i) => (
        <div key={i} onClick={() => setPostsPage(p)} className="page">
          {p}
        </div>
      ))}
    </div>
  )
}
