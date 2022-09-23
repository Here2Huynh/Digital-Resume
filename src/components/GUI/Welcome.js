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
  clear: (
    <CommandLine dataPrefix={"~"}>
      <CommandInput />
    </CommandLine>
  ),
  contacts: (
    <Delayed wait={0}>
      <CommandLine dataPrefix={"$"} classes={"text-warning"}>
        📧 jhnhynh9@gmail.com
      </CommandLine>
      <CommandLine dataPrefix={"$"} classes={"text-warning"}>
        📱 949-689-9343
      </CommandLine>
    </Delayed>
  ),
  empty: <CommandLine dataPrefix={"~"}></CommandLine>,
  help: (
    <CommandLine dataPrefix={">"} classes={"text-warning"}>
      <Guide />
    </CommandLine>
  ),
  git: (
    <CommandLine dataPrefix={">"} classes={"text-warning"}>
      <Link url={"github.com/Here2Huynh"} linkName={"github.com/Here2Huynh"} />
    </CommandLine>
  ),
  linkedin: (
    <CommandLine dataPrefix={">"} classes={"text-warning"}>
      <Link
        url={"linkedin.com/in/im-john-huynh/"}
        linkName={"linkedin.com/in/im-john-huynh/"}
      />
    </CommandLine>
  ),
  gist: (
    <CommandLine dataPrefix={">"} classes={"text-warning"}>
      I am self taught coder who enjoys building rich web UIs. My current
      obsessions are stock trading 🚀, body building 🏋🏽, & muay thai 🔪.
    </CommandLine>
  ),
  skills: (
    <CommandLine dataPrefix={">"} classes={"text-warning"}>
      ReactJs, TypeScript, NodeJs, Tailwindcss, HTML + CSS + Javascript
      {/* <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div> */}
    </CommandLine>
  ),
  projects: (
    <Delayed wait={0}>
      <CommandLine dataPrefix={">"} classes={"text-warning"}>
        <Link
          url={"github.com/Here2Huynh/Smoke-or-Fire-App"}
          linkName={"github.com/Here2Huynh/Smoke-or-Fire-App"}
        />
      </CommandLine>
      <CommandLine dataPrefix={">"} classes={"text-warning"}>
        <Link
          url={"github.com/Here2Huynh/Bad-Captcha-Game"}
          linkName={"github.com/Here2Huynh/Bad-Captcha-Game"}
        />
      </CommandLine>
      <CommandLine dataPrefix={">"} classes={"text-warning"}>
        morty NFT &nbsp;
        <Link url={"hyde.to"} linkName={"hyde.to"} />
      </CommandLine>
    </Delayed>
  ),
};

const toExclude = ["clear", "help", "empty"];
const commandKeys = Object.keys(commandDialogue).filter(
  (c) => !toExclude.includes(c)
);
export const allCommands = commandKeys.reduce((acc, key) => {
  const header = (
    <CommandLine dataPrefix={">"} classes={"text-warning"}>
      {key.toUpperCase()}
    </CommandLine>
  );

  return [...acc, header, commandDialogue[key], commandDialogue.empty];
}, []);

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
  commandDialogue.clear,
];
