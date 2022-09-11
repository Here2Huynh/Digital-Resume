import React from "react";
import Delayed from "./effects/Delayed";
import Loader from "./GUI/Loader";
import TerminalWindow from "./GUI/TerminalWindow";

const App = () => {
  return (
    <div className="m-2">
      <Loader loadTime={1000} />

      <Delayed wait={1500}>
        <TerminalWindow />
      </Delayed>
    </div>
  );
};

export default App;
