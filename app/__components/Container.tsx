import { iContainer } from "@/public/interfaces";
import React, { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const Container: FC<iContainer> = ({
  children,
  className,
  style,
  ...props
}) => {
  return (
    <main
      {...props}
      className={twMerge(
        "container px-4 text-wrap mx-auto md:max-w-[760px] lg:max-w-[950px] xl:max-w-[1280px] 2xl:max-w-[1500px]",
        className
      )}
    >
      {children}
    </main>
  );
};

export default Container;
