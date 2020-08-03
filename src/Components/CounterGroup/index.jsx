import React from "react";
import Counter from "../Counter";
class CounterGroup extends React.Component {
  render() {
    return new Array(6).fill(0).map((vale, index) => <Counter key={index} />);
  }
}
export default CounterGroup;
