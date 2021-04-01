import React, { FC, useState } from 'react'
import { useTypedSelector } from './../../hooks/useTypedSelector'
import './Filter.scss'
import { Button } from './../Button/Button'

interface IFilter {
  setFilter: (id: number | null) => void
}

export const Filter: FC<IFilter> = ({ setFilter }: IFilter) => {
  const { users } = useTypedSelector((state) => state.users)

  return (
    <>
      <Button name="All posts" onClick={() => setFilter(null)} />
      {users.map(({ id, name }) => (
        <div key={id}>
          <p onClick={() => setFilter(id)} style={{ backgroundColor: 'red' }}>
            {name}
          </p>
        </div>
      ))}
    </>
  )
}
