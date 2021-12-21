import React from "react"
import { Login } from "./Login"
import { ProfileProps } from'./Profile'

type PrivateProps = {
  isLoggedIn: boolean
  componemt: React.ComponentType<ProfileProps>
}

const Private = ({ isLoggedIn, componemt: Componemt }: PrivateProps) => {
  if (isLoggedIn) {
    return <Componemt name='claire'/>
  } else {
    return <Login />
  }
}

export default Private
