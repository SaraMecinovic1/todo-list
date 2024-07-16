import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import Button from "./Button";

const List = () => {
  const [todos, setTodos] = useState([
    { text: "buy bananas", isComplited: false, id: 1 },
    { text: "write letter", isComplited: true, id: 2 },
    { text: "make dinner", isComplited: false, id: 3 },
  ]);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
        >
          <span
            className={`${todo.isComplited ? "line-through text-[#ccc]" : ""}`}
          >
            {todo.text}
          </span>{" "}
          <DeleteButton id={todo.id} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
};

export default List;
