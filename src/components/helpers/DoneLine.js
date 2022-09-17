import React, { Component } from "react";
import { InitializeContext } from "../../contexts/InitializeContext";
import Delayed from "../effects/Delayed";
import CommandInput from "../GUI/CommandInput";
import CommandLine from "../GUI/CommandLine";
import Guide from "../GUI/Guide";

class DoneLine extends Component {
  static contextType = InitializeContext;

  render() {
    return (
      <Delayed wait={500}>
        <Guide />
        <CommandLine dataPrefix={">"} classes={"text-success"}>
          Done!
        </CommandLine>
        <CommandLine dataPrefix={"~"}>
          <CommandInput />
        </CommandLine>
      </Delayed>
    );
  }
}

export default DoneLine;
