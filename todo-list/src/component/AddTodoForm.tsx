import { useState } from "react";
import Button from "./Button";

const AddTodoForm = ({ todos, setTodos }) => {
  const [todoText, setTodoText] = useState("");

  return (
    <>
      <h2 className="font-medium text-[#231d15 ]">Add a todo</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setTodos((prev) => [
            ...prev,
            {
              id: prev.length + 1,
              text: todoText,
              isCompleted: false,
            },
          ]);
          setTodoText("");
        }}
      >
        <input
          className="h-[45px] px-[16px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full"
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <Button type="submit">Add to list</Button>
      </form>
    </>
  );
};

export default AddTodoForm;
