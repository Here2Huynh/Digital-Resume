import React from "react";

// TODO: implement drawer as minipreview? https://daisyui.com/components/drawer/

const Link = ({ url, linkName }) => {
  return (
    <a
      className="underline underline-offset-4"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {linkName}
    </a>
  );
};

export default Link;
