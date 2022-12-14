import React from "react";
import Delayed from "./effects/Delayed";
import Loader from "./GUI/Loader";
import TerminalWindow from "./GUI/TerminalWindow";

const App = () => {
  return (
    <div className="m-6">
      <Loader loadTime={1000} />
      <Delayed wait={1200}>
        <TerminalWindow />
      </Delayed>
    </div>
  );
};

export default App;
