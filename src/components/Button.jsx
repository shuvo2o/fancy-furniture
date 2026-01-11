import React from 'react'
import btnIcon from "../assets/button-icon.png"

const Button = ({text}) => {
  return (
    <button className='flex items-center gap-1 text-sm text-primary'>
        {text}
        <img src={btnIcon} alt="" />
    </button>
  )
}

export default Button