import React, { useEffect, useState } from "react";

const Delayed = ({ wait = 500, children }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsShown(true);
    }, wait);

    return () => clearTimeout(timerId);
  }, [wait]);

  return isShown ? children : null;
};

export default Delayed;
