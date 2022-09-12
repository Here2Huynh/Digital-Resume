import React, { Component } from "react";
import { InitializeContext } from "../../contexts/InitializeContext";
import Delayed from "../effects/Delayed";
import CommandLine from "../GUI/CommandLine";

class DoneLine extends Component {
  static contextType = InitializeContext;

  render() {
    return this.context.done ? (
      <Delayed wait={1000}>
        <CommandLine dataPrefix={">"} classes={"text-success"}>
          Done!
        </CommandLine>
      </Delayed>
    ) : null;
  }
}

export default DoneLine;
