import React from "react";
import Container from "../Container";
import Image from "next/image";
import { navData } from "@/public/data/data";
import { iNav } from "@/public/interfaces";
import Link from "next/link";
import Button from "../re-usables/Button";

const Header = () => {
  return (
    <header className="w-full flex items-center h-[90px] justify-center">
      <Container>
        <div className="w-full flex items-center justify-between">
          <Image
            src={"/assets/logo.jpg"}
            height={100}
            className="w-[70px]"
            width={100}
            alt="logo"
          />

          <nav className="font-black text-[21px] capitalize flex items-center gap-6">
            {navData.map((el: iNav, i: number) => (
              <ul key={i}>
                <li>
                  <Link href={el.link!}>{el.name}</Link>
                </li>
              </ul>
            ))}

            <Button>Get Started</Button>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
