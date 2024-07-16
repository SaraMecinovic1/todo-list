import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import Button from "./Button";

const List = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          onClick={() => {
            setTodos(
              todos.map((t) => {
                if (t.id === todo.id) {
                  // t - originalni niz , todo.id - to sto je kliknuto
                  return { ...todo, isComplited: !t.isComplited };
                }
                return t;
              })
            );
          }}
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
