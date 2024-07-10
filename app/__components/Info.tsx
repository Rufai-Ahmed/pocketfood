"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Container from "./Container";
import Button from "./re-usables/Button";
import Image from "next/image";
import { images, infoData } from "@/public/data/data";
import { iInfo } from "@/public/interfaces";

const Info = () => {
  const [state, setState] = useState<string | null>(images[0]);

  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight;

    sectionsRef.current.forEach((section, index: number) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        if (
          (sectionTop >= 0 && sectionTop < windowHeight / 2) ||
          (sectionBottom > windowHeight / 2 && sectionBottom <= windowHeight)
        ) {
          setState(images[index]);
        }
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="w-full flex justify-center mt-[600px] -z-[9999999] lg:z-auto md:mt-[650px] lg:mt-[830px] min-h-[100px] pt-[50px] lg:pt-[100px] md:max-h-[5500px]">
      <Container className="bg-food md:max-h-[5000px] relative bg-cover bg-no-repeat">
        {infoData.map((el: iInfo, i: number) => (
          <div
            key={i}
            ref={(el: HTMLDivElement | null) => {
              sectionsRef.current[i] = el;
            }}
            className="w-full min-h-[500px] md:min-h-[450px] lg:h-[600px] flex items-center lg:items-start flex-col justify-between mt-10 lg:mt-0"
          >
            <div className="lg:pl-[80px] w-full lg:w-[45%] xl:w-[35%] space-y-5">
              <h3 className="text-[#241a43] font-bold leading-[1] 2xl:leading-[60px] text-[40px] xl:text-[60px] 2xl:text-[70px]">
                {el.b}
              </h3>
              <p className="text-[28px] leading-tight font-semibold">{el.p}</p>

              <Button className="text-[20px]">{el.button}</Button>
            </div>
            <Image
              src={el.img!}
              alt="phone"
              width={100}
              height={100}
              unoptimized
              className="w-[100%] md:w-[50%] lg:hidden h-full object-contain"
            />
          </div>
        ))}
        <div
          className={`${
            state === infoData[infoData.length - 1].img ? "absolute" : "sticky"
          } bottom-0 hidden  w-full lg:flex justify-center lg:pl-20 xl:pl-0`}
        >
          <Image
            src={state!}
            alt="phone"
            width={100}
            height={100}
            unoptimized
            className="w-[20%] h-full object-contain"
          />
        </div>
      </Container>
    </div>
  );
};

export default Info;
