import React, { useContext } from "react";
import { TodosContext } from "../contexts/TodosContextProvider";

const Counter = () => {
  const { totalNumberOfTodos, numberOfCompletedTodos } =
    useContext(TodosContext);
  return (
    <p>
      <b>{numberOfCompletedTodos}</b> / {totalNumberOfTodos} todos completed
    </p>
  );
};

export default Counter;
