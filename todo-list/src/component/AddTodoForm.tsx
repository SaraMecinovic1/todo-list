import { useState } from "react";
import Button from "./Button";
import { useTodosContext } from "../lib/hooks";

export default function AddTodoForm() {
  const [todoContent, setTodoContent] = useState("");
  const { handleAddTodo } = useTodosContext();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(todoContent);
        setTodoContent("");
      }}
    >
      <h2 className="text-[#231d15] text-[16px] font-medium">Add a todo</h2>
      <input
        type="text"
        autoFocus
        className="h-[45px] w-full border-[1px] border-[rgba(0,0,0,0.12)] rounded-[5px] ml-[0] mr-[0] my-[9px] px-[16px] py-[0] text-[14px]"
        value={todoContent}
        onChange={(e) => {
          setTodoContent(e.target.value);
        }}
      />
      <Button onClick={() => handleAddTodo(todoContent)}>Add to list</Button>
    </form>
  );
}
