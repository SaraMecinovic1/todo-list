import React from "react";

const DeleteButton = ({ id, deleteTodo }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        deleteTodo(id);
      }}
    >
      ❌
    </button>
  );
};

export default DeleteButton;
