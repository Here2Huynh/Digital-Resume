import React, { Component } from "react";
import { InitializeContext } from "../../contexts/InitializeContext";
import Delayed from "../effects/Delayed";
import CommandLine from "../GUI/CommandLine";
import Guide from "../GUI/Guide";

class DoneLine extends Component {
  static contextType = InitializeContext;

  render() {
    return this.context.done ? (
      <Delayed wait={1000}>
        <Guide />
        <CommandLine dataPrefix={">"} classes={"text-success"}>
          Done!
        </CommandLine>
        <CommandLine dataPrefix={"~"}>
          <input
            autoFocus
            type="text"
            placeholder="type a command & hit enter"
            className="w-full max-w-xs bg-transparent focus:outline-none"
          />
        </CommandLine>
      </Delayed>
    ) : null;
  }
}

export default DoneLine;
