"use client";
import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import { faqData } from "@/public/data/data";
import { iFAQ } from "@/public/interfaces";
import { BsTriangle } from "react-icons/bs";
import { PiTriangleFill } from "react-icons/pi";

const FAQ = () => {
  const [state, setState] = useState<iFAQ | null>(null);

  const handleClick = (el: iFAQ) => {
    setState((prev) => (prev === null ? el : el === prev ? null : el));
  };

  return (
    <div className="flex justify-center w-full">
      <Container className="bg-[#fffbf7] lg:p-20 pb-20 md:pb-0 flex items-center min-h-[800px] gap-5 flex-wrap md:flex-nowrap">
        <div className="md:w-1/2 w-full h-fit">
          <Image
            src={"/assets/lilgirl.webp"}
            alt="girl holding a phone"
            width={100}
            height={100}
            unoptimized
            className="md:w-[600px] w-full h-full md:h-[650px] object-cover rounded-[40px]"
          />
        </div>
        <div className="md:w-[600px] w-full h-[650px] md:h-[650px] overflow-y-auto rounded-[40px] text-secondary p-12 bg-[#ffc9d1] ">
          <h1 className="font-bold leading-[1] text-[40px] md:text-[56px]">
            Frequently Asked Qestions
          </h1>

          <ul className="space-y-3 mt-10">
            {faqData.map((el: iFAQ, i: number) => (
              <li key={i} onClick={() => handleClick(el)}>
                <p className="font-bold text-[20px] pl-5 cursor-pointer flex relative items-center gap-3">
                  {el.q === state?.q! ? (
                    <PiTriangleFill
                      size={16}
                      className="rotate-180 absolute -left-5 "
                    />
                  ) : (
                    <PiTriangleFill className="  -left-5 absolute" size={16} />
                  )}
                  {el.q}
                </p>

                {el.q === state?.q! && el.ans}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
