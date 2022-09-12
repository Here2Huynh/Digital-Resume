import React, { Component } from "react";
import { InitializeContext } from "../../contexts/InitializeContext";
import TypeWriter from "../effects/TypeWriter";

const initializing = {
  line: ["Initializing..."],
  delta: 500,
};

class InitSwitcher extends Component {
  render() {
    return (
      <InitializeContext.Consumer>
        {(done, setDone) => (
          <TypeWriter
            data={initializing.line}
            deleteMode={false}
            delta={initializing.delta}
            setDone={setDone}
          />
        )}
      </InitializeContext.Consumer>
    );
  }
}

export default InitSwitcher;
