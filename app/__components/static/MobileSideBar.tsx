import { navData } from "@/public/data/data";
import { iNav } from "@/public/interfaces";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FcCancel } from "react-icons/fc";
import Button from "../re-usables/Button";
import { GiCancel } from "react-icons/gi";
import { TbX } from "react-icons/tb";

const MobileSideBar: FC<{ toggle: boolean; onToggle: () => void }> = ({
  toggle,
  onToggle,
}) => {
  return (
    <aside
      className={`w-full p-10 bg-white duration-300 inset-full h-screen z-[9999] fixed md:hidden top-0  ${
        !toggle ? " right-[700px]" : "left-0"
      }`}
    >
      <div className="flex justify-between items-center">
        <Image
          src={"/assets/logo.jpg"}
          height={100}
          className="w-[70px]"
          width={100}
          alt="logo"
        />

        <TbX size={34} onClick={onToggle} />
      </div>

      <nav className="my-10">
        <ul className="text-[30px] font-bold space-y-3">
          {navData.map((el: iNav, i: number) => (
            <li key={i}>
              <Link href={el.link!}>{el.name}</Link>
            </li>
          ))}
        </ul>

        <Button className="mt-10">Get Started</Button>
      </nav>
    </aside>
  );
};

export default MobileSideBar;
