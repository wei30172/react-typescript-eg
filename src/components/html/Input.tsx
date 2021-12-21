import React from "react"

type CustomButtonProps = React.ComponentProps<'input'>

const CustomInput = (props: CustomButtonProps) => {
  return <input {...props}/>
}

export default CustomInput