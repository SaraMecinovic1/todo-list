import React from "react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

const SideBar = () => {
  return (
    <section className="col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.10] px-[25px] pt-[18px] pb-[28px] flex flex-col h-full">
      <AddTodoForm />

      <div className="mt-auto space-y-2">
        <Button />
        <Button />
      </div>
    </section>
  );
};

export default SideBar;
