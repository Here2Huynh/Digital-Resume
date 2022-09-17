import React, { useState } from "react";

const CommandLine = ({ dataPrefix, classes, children }) => {
  return (
    <div>
      <pre data-prefix={dataPrefix} className={classes}>
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default CommandLine;
