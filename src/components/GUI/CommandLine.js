import React, { useState } from "react";

const CommandLine = ({ dataPrefix, classes, children }) => {
  // TODO: add type writer effect option
  // TODO: render delays effect

  return (
    <div>
      <pre data-prefix={dataPrefix} className={classes}>
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default CommandLine;
