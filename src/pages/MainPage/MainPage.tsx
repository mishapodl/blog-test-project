import React, { FC } from 'react'
import './MainPage.scss'
import Post from '../../components/Post'

export const MainPage: FC = () => {
  return (
    <div>
      <h1>MainPage</h1>
      <Post />
    </div>
  )
}
