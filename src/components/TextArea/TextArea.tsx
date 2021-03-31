import React from 'react'
import './TextArea.scss'

export const TextArea = ({ value, onChange, name }: any) => {
  return (
    <>
      <textarea name={name} value={value} onChange={onChange}></textarea>
    </>
  )
}
