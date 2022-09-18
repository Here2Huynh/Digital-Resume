import React, { useState } from "react";
import { CommandContext } from "../../contexts/CommandContext";

const CommandInput = () => {
  const [text, setText] = useState("");

  return (
    <CommandContext.Consumer>
      {({ currentCommand, setCurrentCommand }) => (
        <input
          autoFocus
          type="text"
          value={text}
          placeholder="type a command & hit enter"
          className="w-full max-w-xs bg-transparent focus:outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log("enter key pressed, executing command");
              setCurrentCommand(text);
              // setHistory(currentCommand);
              // console.log(currentCommand, history);
            }
          }}
          onChange={(e) => setText(e.target.value)}
        />
      )}
    </CommandContext.Consumer>
  );
};

export default CommandInput;
