import React, { useEffect, useState } from "react";

const Loader = ({ loadTime = 0 }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), loadTime);
  }, []);

  return loading ? (
    <div className="flex justify-center items-center h-screen">
      <button className="btn btn-square loading bg-transparent border-transparent"></button>
    </div>
  ) : null;
};

export default Loader;
