import React, { useRef } from "react";

export default function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    console.log(inputRef)
    inputRef.current.style.color = 'red';
    inputRef.current.value = 1;
    
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}