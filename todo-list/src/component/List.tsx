// import React, { useState } from "react";
import { useContext } from "react";
import { Todo } from "../lib/types";
import DeleteButton from "./DeleteButton";
import { TodosContext } from "../contexts/TodosContextProvider";

const List = () => {
  const { todos, deleteTodo, toggleTodo } = useContext(TodosContext);
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
            toggleTodo(todo.id);
          }}
          key={index}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
          >
            {todo.text}
          </span>{" "}
          <DeleteButton id={todo.id} onDeleteTodo={deleteTodo} />
        </li>
      ))}
    </ul>
  );
};

export default List;
