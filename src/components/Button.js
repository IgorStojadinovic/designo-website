import React from "react";

const Button = ({ type, text }) => {
  const buttonVariations = {
    light:
      "transition-color duration-300 h-14 w-[152px] bg-white uppercase font-medium text-black tracking-wide rounded-lg hover:bg-light-peach hover:text-white z-20 drop-shadow-lg",

    dark: " transition-color duration-300 h-14 w-[152px] bg-peach   font-medium text-white uppercase tracking-wide rounded-lg hover:bg-light-peach z-20 drop-shadow-lg",
  };

  return <button className={`${buttonVariations[type]}`}>{text}</button>;
};

export default Button;
