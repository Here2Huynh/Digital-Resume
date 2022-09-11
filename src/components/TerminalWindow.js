import React from "react";
import CommandLine from "./CommandLine";

class TerminalWindow extends React.Component {
  render() {
    return (
      <div className="mockup-code">
        <CommandLine dataPrefix={"$"} classes={"text-success"}>
          Hello there, Welcome to
          <span className="text-info"> John Huynh's </span>
          digital resume!
        </CommandLine>
        <CommandLine dataPrefix={">"} classes={"text-warning"}>
          Initializing...
        </CommandLine>
        <CommandLine dataPrefix={">"} classes={"text-success"}>
          Done!
        </CommandLine>
        <CommandLine dataPrefix={"~"}>
          <input
            autoFocus
            type="text"
            placeholder="type help"
            className="w-full max-w-xs bg-transparent focus:outline-none"
          />
        </CommandLine>
      </div>
    );
  }
}

export default TerminalWindow;
