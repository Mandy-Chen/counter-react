import React from "react";
class GetSum extends React.Component {
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
    return <div>

    
    </div>;
  }
}
export default GetSum;
