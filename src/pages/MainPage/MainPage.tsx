import React, { FC } from 'react'
import { Posts } from '../../components/Posts/Posts'
import { Pagination } from '../../components/Pagination/Pagination'
import './MainPage.scss'

export const MainPage: FC = () => {
  return (
    <div>
      <h1>MainPage</h1>
      <Posts />
      <Pagination />
    </div>
  )
}
