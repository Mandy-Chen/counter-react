import React from "react";
import Counter from "../Counter";
class CounterGroup extends React.Component {
  // ?
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
    const { value, inputCount } = this.props;
    return (
      <div>
        Count :
        <input value={value} onChange={inputCount} />
        {new Array(parseInt(value)).fill(0).map((value, index) => (
          <Counter
            parent={this}
            key={index}
            getcount={value}
          ></Counter>
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
