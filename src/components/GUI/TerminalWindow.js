import React, { Component } from "react";
import CommandLine from "./CommandLine";
import Delayed from "../effects/Delayed";
import { InitializeContext } from "../../contexts/InitializeContext";
import InitSwitcher from "../helpers/InitSwitcher";
import DoneLine from "../helpers/DoneLine";

class TerminalWindow extends Component {
  setDone = (done) => {
    this.setState({ done: done });
  };

  state = {
    done: false,
    setDone: this.setDone,
  };

  // TODO: add guide menu

  render() {
    return (
      <div className="mockup-code">
        <CommandLine dataPrefix={"$"} classes={"text-success"}>
          Hello there, I am <span className="text-info">John Huynh</span>.
          Welcome to my digital resume!
        </CommandLine>
        <Delayed wait={1000}>
          <CommandLine dataPrefix={">"} classes={"text-warning"}>
            <InitializeContext.Provider value={this.state}>
              <InitSwitcher />
              <DoneLine />
            </InitializeContext.Provider>
          </CommandLine>
        </Delayed>
      </div>
    );
  }
}

export default TerminalWindow;
