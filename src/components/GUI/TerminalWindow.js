import React, { Component } from "react";
import { welcomeDialogue, commandDialogue } from "./Welcome";
import { CommandContext } from "../../contexts/CommandContext";
import ErrorLine from "./ErrorLine";

// TODO: add tab auto complete functionality

class TerminalWindow extends Component {
  insertHistory = (cmp) => {
    const updatedHistory = this.state.history;
    updatedHistory.splice(this.state.history.length - 1, 0, cmp);
    return updatedHistory;
  };

  setCommand = (command) => {
    this.setState({ currentCommand: command }, () => {
      console.log(this.state.currentCommand);

      switch (this.state.currentCommand.toLowerCase().trim()) {
        case "current":
          this.setState({
            history: [...this.insertHistory(commandDialogue.current)],
          });
          break;
        case "clear":
          this.setState({
            history: [commandDialogue.clear],
          });
          break;
        case "":
          this.setState({
            history: [...this.insertHistory(commandDialogue.clear)],
          });
          break;
        default: {
          const updatedHistory = this.state.history;
          updatedHistory.splice(
            this.state.history.length - 1,
            0,
            <ErrorLine wrongCommand={this.state.currentCommand} />
          );
          this.setState({
            history: [...updatedHistory],
          });

          break;
        }
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
