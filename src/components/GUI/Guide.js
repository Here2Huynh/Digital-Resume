import React from "react";

const guideContent = [
  {
    tick: ">",
    command: "current",
    description: "current gig that pay the bills",
  },
  {
    tick: ">",
    command: "contacts",
    description: "my desired points of contact",
  },
  {
    tick: ">",
    command: "git",
    description: "link to my GitHub",
  },
  {
    tick: ">",
    command: "linkedIn",
    description: "link to my LinkedIn",
  },
  {
    tick: ">",
    command: "gist",
    description: "quick about me",
  },
  {
    tick: ">",
    command: "skills",
    description: "list my skills",
  },
  {
    tick: ">",
    command: "projects",
    description: "list my projects",
  },
  {
    tick: ">",
    command: "all",
    description: "execute all commands above",
  },
  {
    tick: ">",
    command: "help",
    description: "show this guide menu",
  },
  {
    tick: ">",
    command: "clear",
    description: "reset terminal",
  },
];

const Guide = () => {
  const renderGuideContext = guideContent.map((content) => (
    <tr key={content.command}>
      <th>{content.tick}</th>
      <th>{content.command}</th>
      <th>{content.description}</th>
    </tr>
  ));

  return (
    <div className="ml-12 my-2">
      <div className="card w-fit bg-info-content">
        <div className="card-body p-6">
          <h2 className="card-title mx-auto">Command Guide</h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <tbody>{renderGuideContext}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
