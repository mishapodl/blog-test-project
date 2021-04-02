import React, { FC } from 'react'
import './TextArea.scss'

interface ITextArea {
  value: string
  name: string
  type?: string
  placeholder?: string
  onChange: (e: any) => void
  classes?: string
}

export const TextArea: FC<ITextArea> = ({
  value,
  onChange,
  name,
  classes = '',
}: ITextArea) => {
  return (
    <>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className={classes}
      ></textarea>
    </>
  )
}
