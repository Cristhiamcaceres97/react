import React, { useEffect, useState } from "react";

const CounterComponent = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <p className="contador-num">{count}</p>;
};

export default CounterComponent;
