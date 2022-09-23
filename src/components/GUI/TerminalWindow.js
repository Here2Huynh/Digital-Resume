import React, { Component } from "react";
import { welcomeDialogue, commandDialogue, allCommands } from "./Welcome";
import { CommandContext } from "../../contexts/CommandContext";
import ErrorLine from "./ErrorLine";
import Delayed from "../effects/Delayed";

// TODO: add tab auto complete functionality
// TODO: add up button  for previous command
// TODO: add live preview for links
// TODO: add auto scroll downwards
// TODO: add text wrap / over flow to gist line

// TODO: add responsiveness to whole app, probably add warnings that it isn't really optimal for mobile
// TODO: add interactive keyboard to the right side, maybe...

class TerminalWindow extends Component {
  insertHistory = (cmp) => {
    const updatedHistory = this.state.history;
    updatedHistory.splice(this.state.history.length - 1, 0, cmp);

    return updatedHistory;
  };

  renderCommands = () => {
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
          history: [...this.insertHistory(commandDialogue.empty)],
        });
        break;
      case "contacts":
        this.setState({
          history: [...this.insertHistory(commandDialogue.contacts)],
        });
        break;
      case "help":
        this.setState({
          history: [...this.insertHistory(commandDialogue.help)],
        });
        break;
      case "git":
        this.setState({
          history: [...this.insertHistory(commandDialogue.git)],
        });
        break;
      case "linkedin":
        this.setState({
          history: [...this.insertHistory(commandDialogue.linkedin)],
        });
        break;
      case "gist":
        this.setState({
          history: [...this.insertHistory(commandDialogue.gist)],
        });
        break;
      case "skills":
        this.setState({
          history: [...this.insertHistory(commandDialogue.skills)],
        });
        break;
      case "all":
        this.setState({
          history: [
            ...this.insertHistory(<Delayed wait={0}>{allCommands}</Delayed>),
          ],
        });
        break;
      default:
        this.setState({
          history: [
            ...this.insertHistory(
              <ErrorLine wrongCommand={this.state.currentCommand} />
            ),
          ],
        });
        break;
    }
  };

  setCommand = (command) => {
    this.setState({ currentCommand: command }, () => {
      console.log(this.state.currentCommand);

      this.renderCommands();
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
