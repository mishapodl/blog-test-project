import React from 'react'
import './Button.scss'

export const Button = ({ name, onClick, classes }: any) => {
  return (
    <>
      <button onClick={onClick} className={classes}>
        {name}
      </button>
    </>
  )
}
