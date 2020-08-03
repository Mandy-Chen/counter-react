import React from "react";
import Counter from "../Counter";
class CounterGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
       sum:0,
    };
  }
  inputCount = (event) => {
    if (event.target.value == "") {
      this.setState({
        count: 0,
      });
    } else {
      this.setState({
        count: event.target.value,
      });
    }
  };

  getSum = (number) => {
    this.setState({
        sum: this.state.sum+number,
      });
    
  };

  render() {
    return (
      <div>
        Count :<input value={this.state.count} onChange={this.inputCount} />
         {new Array(parseInt(this.state.count)).fill(0).map((value, index) => (
          <Counter  getNumber={this} key={index} ></Counter>
        ))}
        <div>{this.state.sum}</div>
      </div>
    );
  }
}
export default CounterGroup;
