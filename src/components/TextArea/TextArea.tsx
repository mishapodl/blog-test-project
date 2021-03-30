import React from 'react'

export const TextArea = ({ value, onChange, name }: any) => {
  return (
    <>
      <textarea name={name} value={value} onChange={onChange}></textarea>
    </>
  )
}
