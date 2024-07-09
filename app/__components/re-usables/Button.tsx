import { iButton } from "@/public/interfaces";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

const Button: FC<iButton> = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge(
        "px-7 py-[10px] text-white font-semibold rounded-[40px] bg-[#a71b31]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
