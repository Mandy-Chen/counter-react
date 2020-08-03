import React, { Component } from 'react';
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state={
            number:0,
        };
    }
     increase=()=> {
        this.setState({
            number:this.state.number+1
        }
        )
        this.props.getNumber.getSum(1)
    }
    reduce=()=> {
        this.setState({
            number:this.state.number-1
        }
        )
        this.props.getNumber.getSum(-1)
    }
  render() {
    return (
      <div>
        <button onClick={this.increase}>+</button>
        <mark>{this.state.number}</mark>
        <button onClick={this.reduce}>-</button>
      </div>
    );
  }
}
export default Counter