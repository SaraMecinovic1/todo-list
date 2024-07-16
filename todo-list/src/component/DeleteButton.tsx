import React from "react";

const DeleteButton = ({setTodos, id}) => {
  return (
    <button
      onClick={() => {
        setTodos((prev)=>prev.filter((todo) => todo.id !== id));
      }}
    >
      ❌
    </button>
  );
};

export default DeleteButton;
