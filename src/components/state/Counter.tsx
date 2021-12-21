// useReducer Hook
import { useReducer } from 'react'

const initialState = { count: 0 }

type CounterState = {
  count: number
}
type UpdateAction = {
  type: 'add' | 'minus'
  payload: number
}
type ResetAction = {
  type: 'reset'
}
type CounterAction = UpdateAction | ResetAction

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'add':
      return { count: state.count + action.payload }
      break;
    case 'minus':
      return { count: state.count - action.payload }
      break;
    case 'reset':
      return initialState
      break;
    default:
      return state
      break;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'add', payload: 10})}>+10</button>
      <button onClick={() => dispatch({ type: 'minus', payload: 10})}>-10</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </>
  )
}