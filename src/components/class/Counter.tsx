import { Component } from 'react'

type CounterProps = {
  msg: string
}

type CounterState = {
  count: number
}

export class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add</button>
        { this.props.msg } { this.state.count }
      </div>
    )
  }
}