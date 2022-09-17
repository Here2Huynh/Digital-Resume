import React from "react";
import CommandLine from "./CommandLine";
import Delayed from "../effects/Delayed";
import TypeWriter from "../effects/TypeWriter";
import Guide from "../GUI/Guide";
import CommandInput from "../GUI/CommandInput";

const initializing = {
  line: ["Initializing..."],
  delta: 500,
};

export const welcomeDialogue = [
  <CommandLine dataPrefix={"$"} classes={"text-success"}>
    Hello there, I am <span className="text-info">John Huynh</span>. Welcome to
    my digital resume!
  </CommandLine>,
  <Delayed wait={500}>
    <CommandLine dataPrefix={">"} classes={"text-warning"}>
      <TypeWriter
        data={initializing.line}
        deleteMode={false}
        delta={initializing.delta}
      />
    </CommandLine>
  </Delayed>,
  <Delayed wait={3500}>
    <CommandLine dataPrefix={">"} classes={"text-warning"}>
      <Guide />
    </CommandLine>
    <CommandLine dataPrefix={">"} classes={"text-success"}>
      Done!
    </CommandLine>
    <CommandLine dataPrefix={"~"}>
      <CommandInput />
    </CommandLine>
  </Delayed>,
];
