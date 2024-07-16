import React, { useState } from "react";

const Counter = ({ todos }) => {
  const [count, setCount] = useState(0);
  return (
    <p
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      <b>{count}</b>/0 todos completed
    </p>
  );
};
export default Counter;
