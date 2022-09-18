import React, { Component } from "react";
import { welcomeDialogue, commandDialogue } from "./Welcome";
import { CommandContext } from "../../contexts/CommandContext";

// TODO: add tab auto complete functionality

class TerminalWindow extends Component {
  setCommand = (command) => {
    this.setState({ currentCommand: command }, () => {
      console.log(this.state.currentCommand);

      switch (this.state.currentCommand.toLowerCase().trim()) {
        case "current":
          const updatedHistory = this.state.history;
          updatedHistory.splice(
            this.state.history.length - 1,
            0,
            commandDialogue["current"]
          );
          this.setState({
            history: [...updatedHistory],
          });
          break;
        default:
          break;
      }
    });
  };

  state = {
    history: [],
    currentCommand: "",
    setCurrentCommand: this.setCommand,
  };

  componentDidMount() {
    this.setState({
      history: [...this.state.history, ...welcomeDialogue],
    });
  }

  render() {
    return (
      <CommandContext.Provider value={this.state}>
        <div className="mockup-code">{this.state.history}</div>
      </CommandContext.Provider>
    );
  }
}

export default TerminalWindow;
