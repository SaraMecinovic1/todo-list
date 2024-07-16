import React from "react";

const Button = (props) => {
  const { buttonType, children } = props;
  // isto kada bi pisali props.children/props.buttonType
  return (
    <button
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
