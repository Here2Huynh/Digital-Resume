import React, { Component } from "react";
import { InitializeContext } from "../../contexts/InitializeContext";
import Delayed from "../effects/Delayed";
import CommandLine from "../GUI/CommandLine";

class DoneLine extends Component {
  static contextType = InitializeContext;

  render() {
    return this.context.done ? (
      <Delayed wait={1000}>
        <div className="ml-12 my-2">
          <div className="card w-fit bg-info-content">
            <div className="card-body p-6">
              <h2 className="card-title mx-auto">Command Guide</h2>
              <h1>Main Menu</h1>
              <p>
                {`>`}&emsp;&emsp;&emsp;
                {`current`}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                {`current gig that pay the bills`}
              </p>
            </div>
          </div>
        </div>

        <CommandLine dataPrefix={">"} classes={"text-success"}>
          Done!
        </CommandLine>
        <CommandLine dataPrefix={"~"}>
          <input
            autoFocus
            type="text"
            placeholder="type a command shown above"
            className="w-full max-w-xs bg-transparent focus:outline-none"
          />
        </CommandLine>
      </Delayed>
    ) : null;
  }
}

export default DoneLine;
