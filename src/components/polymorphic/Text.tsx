import React from 'react'

type TextOwnProps<E extends React.ElementType> = {
  as?: E
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary'
  children: React.ReactNode
}

type TextProps<E extends React.ElementType> = TextOwnProps<E>
  &Omit<React.ElementType<E>, keyof TextOwnProps<E>>

const Text = <E extends React.ElementType = 'div'>(
  {as, size, color, children}: TextProps<E>) => {
  const Conmponent = as || 'div'
  return <Conmponent className={`class-with-${size}-${color}`}>{children}</Conmponent>
}

export default Text



