import React from "react"

type ContainerProps = {
  children: React.ReactNode
  styles: React.CSSProperties
}

const Container = ({children, styles}: ContainerProps) => {
  return (
    <div style={styles}>{children}</div>
  )
}

export default Container