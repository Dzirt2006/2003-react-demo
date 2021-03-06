import React from "react";

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
      //this.state.count++ 
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
        <div>
            <h1>Counter</h1>
            <h2>{this.state.count}</h2>
            <button onClick={this.handleClick}>Increment</button>
        </div>
    )
  }
}

export default Counter;