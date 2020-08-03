import React from "react";
import Counter from "../Counter";
class CounterGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
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

  render() {
    return (
      <div>
        Count :<input value={this.state.count} onInput={this.inputCount} />
        {new Array(parseInt(this.state.count)).fill(0).map((value, index) => (
          <Counter key={index}></Counter>
        ))}
      </div>
    );
  }
}
export default CounterGroup;
