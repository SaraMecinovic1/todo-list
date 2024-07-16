import React from "react";
import Button from "./Button";

const AddTodoForm = () => {
  return (
    <>
      <h2 className="font-medium text-[#231d15 ]">Add a todo</h2>
      <input
        className="h-[45px] px-[16px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full"
        type="text"
      />
      <Button>Add to list</Button>
    </>
  );
};

export default AddTodoForm;
