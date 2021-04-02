import React, { FC } from 'react'
import { Posts } from '../../components/Posts/Posts'
import { Pagination } from '../../components/Pagination/Pagination'
import './MainPage.scss'

export const MainPage: FC = () => {
  return (
    <>
      <section className="container">
        <Posts />
      </section>
      <Pagination />
    </>
  )
}
