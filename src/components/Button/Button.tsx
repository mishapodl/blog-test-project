import React from 'react'

export const Button = ({ name, onClick }: any) => {
  return (
    <>
      <button onClick={onClick}>{name}</button>
    </>
  )
}
