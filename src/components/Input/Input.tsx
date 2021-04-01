import React, { FC } from 'react'
import './Input.scss'

interface IInptut {
  value: string
  name: string
  type?: string
  placeholder?: string
  onChange: (e: any) => void
}

export const Input: FC<IInptut> = ({
  value,
  onChange,
  name,
  type = 'text',
  placeholder = '',
}: IInptut) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  )
}
