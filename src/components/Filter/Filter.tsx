import React, { FC } from 'react'
import { useTypedSelector } from './../../hooks/useTypedSelector'
import { Button } from './../Button/Button'
import { usePost } from '../../hooks/usePost'
import { IUser } from './../../types/users'
import './Filter.scss'

interface IFilter {
  setFilter: (id: number | null) => void
}

export const Filter: FC<IFilter> = ({ setFilter }: IFilter) => {
  const { users } = useTypedSelector((state) => state.users)
  const lastUser = usePost().getLastId('user')

  return (
    <>
      <Button name="All posts" onClick={() => setFilter(null)} />
      {users.map(
        ({ id, name }: IUser, i) =>
          lastUser &&
          lastUser > i && (
            <div key={id}>
              <p onClick={() => setFilter(id)}>{name}</p>
            </div>
          )
      )}
    </>
  )
}
