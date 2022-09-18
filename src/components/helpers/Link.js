import React from "react";

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
