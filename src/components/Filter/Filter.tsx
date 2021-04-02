import React, { FC } from 'react'
import { useTypedSelector } from './../../hooks/useTypedSelector'
import { Button } from './../Button/Button'
import { IUser } from './../../types/users'
import './Filter.scss'
import { cutString } from '../../helpers'

interface IFilter {
  setFilter: (id: number | null) => void
}

export const Filter: FC<IFilter> = ({ setFilter }: IFilter) => {
  const { users } = useTypedSelector((state) => state.users)

  return (
    <>
      {users.map(({ id, name }: IUser) => (
        <div key={id} onClick={() => setFilter(id)} className="filter-item">
          {cutString(name, 1)}
        </div>
      ))}
      <Button
        name="All posts"
        onClick={() => setFilter(null)}
        classes="btn-filter-all"
      />
    </>
  )
}
