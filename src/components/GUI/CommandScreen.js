import React from "react";
import { CommandContext } from "../../contexts/CommandContext";
import CommandInput from "../GUI/CommandInput";
import CommandLine from "./CommandLine";

const CommandScreen = ({ command }) => {
  const renderScreen = (currentCommand) => {
    console.log(currentCommand);

    // switch (currentCommand.toLower().trim()) {
    //   case "current":
    //     return (
    //       <>
    //         <CommandLine dataPrefix={"$"} classes={"text-success"}>
    //           Front end engineer for San Manuel Band of Mission Indians
    //         </CommandLine>
    //         <CommandLine dataPrefix={"~"}>
    //           <CommandInput />
    //         </CommandLine>
    //       </>
    //     );
    //   case "contacts":
    //     break;
    //   case "gist":
    //     break;
    //   case "skills":
    //     break;
    //   case "projects":
    //     break;
    //   case "help":
    //     break;
    //   case "clear":
    //     break;
    //   default:
    //     break;
    // }
  };

  return (
    <CommandContext.Consumer>
      {({ currentCommand }) => renderScreen(currentCommand)}
    </CommandContext.Consumer>
  );
};

export default CommandScreen;
