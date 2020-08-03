import React, { Component } from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      getcount:0
    };
  }

  increase = () => {
    this.setState({
      number: this.state.number + 1,
    });
    this.props.parent.getSum(1);
  };
  reduce = () => {
    this.setState({
      number: this.state.number - 1,
    });
    this.props.parent.getSum(-1);
  };

  static getDerivedStateFromProps(props,state) {
    if(props.getcount !== state.getcount) {
        return {
          number : 0,
          getcount : props.getcount
        }
    }
    return null;
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
export default Counter;
