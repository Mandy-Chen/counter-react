import React from "react";
import Counter from "../Counter";
class CounterGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      sum: 0,
    };
  }
  inputCount = (event) => {
    if (event.target.value == "") {
      this.setState({
        count: 0,
        sum: 0,
      });
    } else {
      this.setState({
        count: 0,
        sum: 0,
      });
      this.setState({
        count: event.target.value,
        sum: 0,
      });
    }
  };

  getSum = (number) => {
    this.setState({
      sum: this.state.sum + number,
    });
  };

  setUpdateStatus = (status) => {
    this.setState({
      update: false,
    });
  };

  // render() {
  //   return (
  //     <div>
  //       Count :
  //       <input value={this.state.count} onChange={this.inputCount.bind(this)} />
  //       {new Array(parseInt(this.state.count)).fill(0).map((value, index) => (
  //         <Counter parent={this} key={index} getcount={this.state.count}></Counter>
  //       ))}
  //       <div>
  //         {this.state.sum}
  //         {this.state.update}
  //       </div>
  //     </div>
  //   );
  // }
  // }
  // export default CounterGroup;

  render() {
    const { value, increase, reduce } = this.props;
    return (
      <div>
        Count :
        <input value={value} onChange={inputCount} />
        {new Array(parseInt(value)).fill(0).map((value, index) => (
          <CountApp
            parent={this}
            key={index}
            getcount={value}
          ></CountApp>
        ))}
      </div>
      //   <button onClick={increase}>+</button>
      //   <mark>{value}</mark>
      //   <button onClick={reduce}>-</button>
      // </div>
    );
  }
}
export default CounterGroup;
