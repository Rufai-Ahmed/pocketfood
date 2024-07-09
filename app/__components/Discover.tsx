"use client";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { carouselData } from "@/public/data/data";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";
import { iCarousel } from "@/public/interfaces";
import Container from "./Container";
import Button from "./re-usables/Button";

const Discover = () => {
  return (
    <section className="w-full relative flex justify-center">
      <div className="bg-primary absolute w-full max-w-full -z-10 -top-[380px] md:-top-[370px] lg:-top-[300px] xl:-top-[200px] min-h-[1000px] pb-[50px]">
        <center>
          <h1 className="mt-[200px] text-white font-bold capitalize text-[50px] md:text-[70px] leading-[60px]">
            discover personalized <br /> nutrition
          </h1>
          <Button className="bg-white text-primary mt-3 text-[24px]">
            Create Meal Plan
          </Button>
        </center>

        <div className="ml-16">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },

              1280: {
                slidesPerView: 4,
              },
            }}
            className="mt-16 ml-16 cursor-pointer"
          >
            {carouselData.map((el: iCarousel, i: number) => (
              <SwiperSlide
                key={i}
                className="cursor-pointer w-[400px] h-[500px] bg-white rounded-[40px]"
              >
                <div className="h-1/2 w-full">
                  <Image
                    src={el.img!}
                    alt="food"
                    height={100}
                    width={100}
                    unoptimized
                    className="h-[250px] w-full rounded-t-[40px] object-cover"
                  />
                </div>
                <div className="h-1/2 p-5 -space-y-2">
                  <p>
                    <em className="text-[30px]">{el.em}</em>
                  </p>
                  <p>
                    <b className="text-[34px] text-[#241a43] font-bold">
                      Champion
                    </b>
                  </p>
                  <ul>
                    {el.list?.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-center relative">
                        <BiCheckCircle className="absolute" size={26} />
                        <li className="flex items-center text-[25px]">
                          <p className="ml-8 leading-tight capitalize">
                            {item}
                          </p>
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Discover;
