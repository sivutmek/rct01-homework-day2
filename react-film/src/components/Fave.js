import React, { Component } from "react";
import "../index.css";

class Fave extends Component {
  state = {
    isFave: false
  };
  handleClick = () => {
    console.log("handling Fave click!");
    this.setState({ isFave: !this.state.isFave });
  };
  render() {
    const isFave = this.state.isFave ? "remove_from_queue" : "add_to_queue";
    return (
      <div
        className={`film-row-fave ${
          this.state.isFave ? "active" : ""
        }`}
      >
        <p className="material-icons " onClick={this.handleClick}>
          {isFave}
        </p>
      </div>
    );
  }
}

export default Fave;