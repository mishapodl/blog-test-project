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
    <div>
      <div style={{ display: 'flex' }}>
        {pages.map((p, i) => (
          <p key={i} onClick={() => setPostsPage(p)} className="pagination">
            {p}
          </p>
        ))}
      </div>
    </div>
  )
}
