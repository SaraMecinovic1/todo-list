import React from "react";

type CounterProps = {
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
};

const Counter = ({ totalNumberOfTodos, numberOfCompletedTodos }: CounterProps) => {
  return (
    <p>
      <b>{numberOfCompletedTodos}</b> / {totalNumberOfTodos} todos completed
    </p>
  );
};

export default Counter;
