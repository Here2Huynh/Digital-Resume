import React from "react";
import CommandLine from "./CommandLine";

const ErrorLine = ({ wrongCommand }) => {
  return (
    <CommandLine dataPrefix={">"} classes={"text-warning"}>
      {`${wrongCommand}: command not found. Please refer to the commands under`}{" "}
      <kbd className="kbd kbd-xs">help</kbd>
    </CommandLine>
  );
};

export default ErrorLine;
