import React, { useContext, Component } from "react";
import CommandLine from "./CommandLine";
import TypeWriter from "../effects/TypeWriter";
import Delayed from "../effects/Delayed";
import {
  LanguageContextProvider,
  InitializeContext,
} from "../../contexts/InitializeContext";
import InitSwitcher from "../helpers/InitSwitcher";
import DoneLine from "../helpers/DoneLine";

const initializing = {
  line: ["Initializing..."],
  delta: 500,
};
class TerminalWindow extends Component {
  setDone = (done) => {
    this.setState({ done: done });
  };

  state = {
    done: false,
    setDone: this.setDone,
  };

  render() {
    return (
      <div className="mockup-code">
        <CommandLine dataPrefix={"$"} classes={"text-success"}>
          Hello there, Welcome to
          <span className="text-info"> John Huynh's </span>
          digital resume!
        </CommandLine>
        <Delayed wait={1000}>
          <CommandLine dataPrefix={">"} classes={"text-warning"}>
            {/* <TypeWriter
              data={initializing.line}
              deleteMode={false}
              delta={initializing.delta}
            /> */}
            <InitializeContext.Provider value={this.state}>
              <InitSwitcher />
              <DoneLine />
            </InitializeContext.Provider>
          </CommandLine>
        </Delayed>
        {/* <Delayed wait={2000}>
          <CommandLine dataPrefix={">"} classes={"text-success"}>
            Done!
          </CommandLine>
        </Delayed> */}
        {/* <Delayed wait={2000}>
          <CommandLine dataPrefix={"~"}>
            <input
              autoFocus
              type="text"
              placeholder="type help"
              className="w-full max-w-xs bg-transparent focus:outline-none"
            />
          </CommandLine>
        </Delayed> */}
      </div>
    );
  }
}

export default TerminalWindow;
