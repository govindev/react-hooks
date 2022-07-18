import React, { useEffect, useState } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    console.log(count);
    setCount(prevCount => prevCount + 1); // -> Or do this
    // setCount(count + 1); -> Either do this
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  // }, [count]); -> Either do this
}, []); // -> Or do this
  return <div>{count}</div>;
}

export default IntervalHookCounter;
