import React, { useState, useCallback } from "react";
import Child from "./Child";

// //  Child component memoized
// const Child = React.memo(({ onClick }) => {
//   console.log("Child rendered");
//   return <button onClick={onClick}>Click Me</button>;
// });

function Parent() {
  const [count, setCount] = useState(0);

  //  Function memoized
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <Child onClick={handleClick} />
    </>
  );
}

export default Parent;
