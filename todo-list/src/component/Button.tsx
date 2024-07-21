import React from "react";

type ButtonProps = {
  onClick: () => void;
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
};

const Button = ({ onClick, buttonType, children }: ButtonProps) => {
  // isto kada bi pisali props.children/props.buttonType
  return (
    <button
      onClick={onClick}
      className={`h-[45px]  bg-[#473a2b] w-full text-white
     hover:bg-[#322618] rounded-[5px] cursor-pointer ${
       buttonType === "secondary" ? "opacity-[85%]" : " "
     }`}
    >
      {children}
    </button>
  );
};

export default Button;
