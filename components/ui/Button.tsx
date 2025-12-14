import React from 'react'

interface ButtonProps {
  text: string,
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({ text, handleClick }) => {
  return (
    <button
      className='px-4 py-2 rounded-lg bg-primary text-foreground cursor-pointer 
             hover:bg-transparent border border-primary hover:text-primary 
             transition ease-in-out duration-300 delay-75
             hover:shadow-[0_0_8px_var(--primary)]'
      onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button