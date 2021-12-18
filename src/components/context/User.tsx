import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext)
  const handleLogIn = () => {
    userContext.setUser({
      name: 'User',
      email: 'User@email.com'
    })
  }
  const handleLogOut = () => {
    userContext.setUser(null)
  }

  return(
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      {userContext.user?.name && <div>User name is {userContext.user?.name}</div>}
      {userContext.user?.email && <div>User email is {userContext.user?.email}</div>}
    </div>
  )
}

export default User