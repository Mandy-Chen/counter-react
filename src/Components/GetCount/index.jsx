import React from "react";
import CounterGroup from "../CounterGroup";
class GetCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  inputCount = (e) => {
    this.setState({
      count: e.target.value,
    });
  };
  getInputValue = () => {
    alert(this.state.count);
  };

  render() {
    return (
      <div>
        Count :<input value={this.state.count} onChange={this.inputCount} />
        <button onClick={this.getInputValue}>确定</button>
        <CounterGroup></CounterGroup>
      </div>
    );
  }
}
export default GetCount;
