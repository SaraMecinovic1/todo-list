import React from "react";
import Counter from "./Counter";

const Header = ({ todos, setTodos }) => {
  return (
    <header className="flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.10]">
      <img src="https://bytegrad.com/course-assets/react-nextjs/dots.png" />
      <Counter todos={todos} />
    </header>
  );
};

export default Header;
