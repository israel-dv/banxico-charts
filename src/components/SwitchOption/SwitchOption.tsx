import React, { useState } from 'react'

type SwitchOptionProps = {
  optionA: string
  optionB: string
  className?: string
}

export const SwitchOption: React.FC<SwitchOptionProps> = ({ optionA, optionB, className }) => {
  const [value, setValue] = useState<string>(optionA)

  return (
    <div
      className={`h-11 border border-1 px-1 py-1 rounded-lg bg-slate-200 flex items-center justify-center ${className}`}
    >
      <button
        type="button"
        className={`text-black px-5 w-full h-full rounded-lg ${
          value === optionA ? 'bg-white shadow-md' : 'bg-slate-200'
        }`}
        onClick={() => setValue(optionA)}
      >
        {optionA}
      </button>
      <button
        type="button"
        className={`text-black px-5 w-full h-full rounded-lg ${
          value === optionB ? 'bg-white shadow-md' : 'bg-slate-200'
        }`}
        onClick={() => setValue(optionB)}
      >
        {optionB}
      </button>
    </div>
  )
}
