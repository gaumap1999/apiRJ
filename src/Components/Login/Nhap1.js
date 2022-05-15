import React, { Component } from "react";

class Nhap1 extends Component {
  render() {
    return (
      <div className="col">
        <label>
          {" "}
          <input className="radio_answer_1" type="checkbox" value = {this.props.value.name} />{" "}
          {this.props.value.item}{" "}
        </label>
      </div>
    );
  }
}

export default Nhap1;
