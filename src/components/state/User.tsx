import { useState } from "react"

type AuthUser = {
  name: string
  email: string
}
export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null)
  // const [user, setUser] = useState<AuthUser>({} as AuthUser)

  const handleLogIn = () => {
    setUser({
      name: 'claire',
      email: 'claire@email.com'
    })
  }
  const handleLogOut = () => {
    setUser(null)
  }

  return(
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  )
}