import React from 'react'

type RoundedButtonProps = {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
}

export const RoundedButton: React.FC<RoundedButtonProps> = ({
  children,
  disabled = true,
  className,
  onClick
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`h-10 bg-slate-50 flex items-center px-2 rounded-md text-black cursor-pointer ${className} ${
        disabled && 'opacity-20 cursor-default'
      } `}
    >
      {children}
    </button>
  )
}
