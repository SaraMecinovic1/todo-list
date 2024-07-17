import React, { useState } from "react";
import DeleteButton from "./DeleteButton";

const List = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos.length === 0 ? (
        <li className=" h-full flex justify-center items-center font-semibold">
          Start by adding new todo
        </li>
      ) : null}
      {todos.map((todo, index) => (
        <li
          onClick={() => {
            setTodos(
              todos.map((t) => {
                if (t.id === todo.id) {
                  // t - originalni niz , todo.id - to sto je kliknuto
                  return { ...todo, isCompleted: !t.isCompleted }; // Ovde je ispravka
                }
                return t;
              })
            );
          }}
          key={index}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
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
