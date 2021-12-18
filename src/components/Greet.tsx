import { GreetProps } from './Greet.type'

const Greet = ({name, msgCount = 0}: GreetProps) => {
  return (
    <h2>Hello {name}, you have {msgCount} unread message!</h2>
  )
}

export default Greet