import React from "react";
import CommandLine from "./CommandLine";
import Delayed from "../effects/Delayed";
import TypeWriter from "../effects/TypeWriter";
import Guide from "./Guide";
import CommandInput from "./CommandInput";
import Link from "../helpers/Link";

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
  </Delayed>,
  <CommandLine dataPrefix={"~"}>
    <CommandInput />
  </CommandLine>,
];

export const commandDialogue = {
  current: (
    <CommandLine dataPrefix={"$"} classes={"text-warning"}>
      Front end engineer at{" "}
      <Link
        url={"https://sanmanuel-nsn.gov"}
        linkName={"San Manuel Band of Mission Indians"}
      />
    </CommandLine>
  ),
};
