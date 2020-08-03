import React, { Component } from "react";
import PropTypes from 'prop-types'
class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       number: 0,
//       getcount:0
//     };
//   }

//   increase = () => {
//     this.setState({
//       number: this.state.number + 1,
//     });
//     this.props.parent.getSum(1);
//   };
//   reduce = () => {
//     this.setState({
//       number: this.state.number - 1,
//     });
//     this.props.parent.getSum(-1);
//   };

//   static getDerivedStateFromProps(props,state) {
//     if(props.getcount !== state.getcount) {
//         return {
//           number : 0,
//           getcount : props.getcount
//         }
//     }
//     return null;
// }

  render() {
    const{value,increase,reduce}=this.props;
    return (
      <div>
        <button onClick={increase}>+</button>
        <mark>{value}</mark>
        <button onClick={reduce}>-</button>
      </div>
    );
  }
}
export default Counter;
