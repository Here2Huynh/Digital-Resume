import React, { Component } from "react";
import { welcomeDialogue } from "./Welcome";

// TODO: some sort of queue to store the command lines
// TODO: add tab auto complete functionality
class TerminalWindow extends Component {
  state = {
    history: [],
  };

  componentDidMount() {
    this.setState({
      history: [...this.state.history, ...welcomeDialogue],
    });
  }

  render() {
    return <div className="mockup-code">{this.state.history}</div>;
  }
}

export default TerminalWindow;
