import React from 'react';
import { useSession } from 'next-auth/react'

const AuthWrapper = ({children}: {children: React.ReactNode}) => {

  const { status } = useSession()

  if (status === 'loading') {
      return "Loading...";
  }

  return (
    <div>AuthWrapper</div>
  )
}

export default AuthWrapper;