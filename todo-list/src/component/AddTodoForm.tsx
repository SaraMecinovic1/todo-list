import React, { useState } from "react";
import Button from "./Button";

const AddTodoForm = (props: { handleAddTodo: (todoText: string) => void }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleAddTodo(todoText);
    setTodoText("");
  };

  return (
    <>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="h-[45px] px-[16px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full"
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <Button>Add to list</Button>
      </form>
    </>
  );
};

export default AddTodoForm;
