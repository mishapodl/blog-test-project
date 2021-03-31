import React from 'react'
import './Input.scss'

export const Input = ({ value, onChange, name, type = 'text' }: any) => {
  return (
    <>
      <input type={type} name={name} value={value} onChange={onChange} />
    </>
  )
}
