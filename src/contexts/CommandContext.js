import React from "react";

export const CommandContext = React.createContext({
  currentCommand: "",
  setCurrentCommand: () => {},
  history: [],
  setHistory: () => {},
});
