// Extracting a Components Prop Types
import React from 'react'
import Greet from '../Greet'

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>
}
