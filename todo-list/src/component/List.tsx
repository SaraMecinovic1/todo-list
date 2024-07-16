import React from "react";
import DeleteButton from "./DeleteButton";

const initialTodos = ["buy bananas", "write letter", "walk ice"];
const List = () => {
  return (
    <ul>
      {initialTodos.map((todo, index) => (
        <li
          key={index}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
        >
          <span className="line-through text-[#ccc]">{todo}</span> <DeleteButton />
        </li>
      ))}
    </ul>
  );
};

export default List;
