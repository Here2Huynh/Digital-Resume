// https://codesandbox.io/s/react-typewriter-effect-rdis2?file=/components/Typewriter.js
import React, { useState } from "react";

const TypeWriter = () => {
  const [text, setText] = useState("");

  return <span>{text}</span>;
};

export default TypeWriter;
