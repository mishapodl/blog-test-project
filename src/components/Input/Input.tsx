import React, { FC } from 'react'
import './Input.scss'

interface IInptut {
  value?: string
  name: string
  type?: 'text' | 'radio'
  placeholder?: string
  onChange?: (e: any) => void
  classes?: string
  checked?: boolean
}

export const Input: FC<IInptut> = ({
  value = '',
  onChange,
  name,
  type = 'text',
  placeholder = '',
  classes = '',
  checked,
}: IInptut) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classes}
        checked={checked && checked}
      />
    </>
  )
}
