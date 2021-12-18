import React from "react"

type InputProps = {
  value: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Iuput = ({value, handleChange}: InputProps) => {
  return <input type="text" value={value} onChange={handleChange}/>
}

export default Iuput