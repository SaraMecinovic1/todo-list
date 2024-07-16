import React from "react";
import DeleteButton from "./DeleteButton";

const initialTodos = [
  { text: "buy bananas", isComplited: false },
  { text: "write letter", isComplited: true },
  { text: "make dinner", isComplited: false },
];
const List = () => {
  return (
    <ul>
      {initialTodos.map((todo, index) => (
        <li
          key={index}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
        >
          <span
            className={`${todo.isComplited ? "line-through text-[#ccc]" : ""}`}
          >
            {todo.text}
          </span>{" "}
          <DeleteButton />
        </li>
      ))}
    </ul>
  );
};

export default List;
