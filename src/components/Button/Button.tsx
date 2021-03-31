import React from 'react'
import './Button.scss'

export const Button = ({ name, onClick }: any) => {
  return (
    <>
      <button onClick={onClick}>{name}</button>
    </>
  )
}
