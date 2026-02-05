import { useState, useCallback } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // memoized function

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>

      <Child onClick={handleClick} />
    </>
  );
}

export default Parent;
