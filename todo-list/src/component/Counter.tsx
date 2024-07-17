import React from "react";

const Counter = ({ todos }) => {
  const completedCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <p>
      <b>{completedCount}</b> / {todos.length} todos completed
    </p>
  );
};

export default Counter;
