import React from "react";
class GetCount extends React.Component() {
    inputChange(){
        this.setState({
            count:this.name.count.value
        })
    }
    getInputValue(){
        console.log(this.state.count)
    }
  render() {
    <div>
      <input name="count" onChange={() => this.inputChange()} />
      <button onClick={() => this.getInputValue()}>确定</button>
    </div>;
  }
}
export default GetCount;
