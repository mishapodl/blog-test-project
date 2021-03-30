import React, { FC } from 'react'
import './MainPage.scss'
import { Post } from '../../components/Post/Post'
import { Pagination } from '../../components/Pagination/Pagination'

export const MainPage: FC = () => {
  return (
    <div>
      <h1>MainPage</h1>
      <Post />
      <Pagination />
    </div>
  )
}
