import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className="bg-linear-to-b from-[var(--gradient-start)] to-[var(--accent-pink)] px-4 py-1 rounded-md text-[var(--text)] cursor-pointer active:scale-75">{props.text}</button>
    </div>
  )
}

export default Button
