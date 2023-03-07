import React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return <div className="h-full-vw min-h-screen w-full bg-blue-indigo-1000">{children}</div>
}
