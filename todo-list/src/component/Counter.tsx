import React from "react";

const Counter = ({ todos }) => {
  return (
    <p>
      <b>{todos.filter((todo) => todo.isCompleted).length}</b> / {todos.length} todos completed
    </p>
  );
};

export default Counter;
