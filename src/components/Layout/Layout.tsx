import React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return <div className="h-full-vh w-full bg-blue-indigo-1000 px-52">{children}</div>
}
