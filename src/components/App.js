import React from "react";
import Delayed from "./effects/Delayed";
import Loader from "./GUI/Loader";
import TerminalWindow from "./GUI/TerminalWindow";

// TODO: add responsiveness to whole app

const App = () => {
  return (
    <div className="m-2">
      <Loader loadTime={1000} />
      <Delayed wait={1200}>
        <TerminalWindow />
      </Delayed>
    </div>
  );
};

export default App;
