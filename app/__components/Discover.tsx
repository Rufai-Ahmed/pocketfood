"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { carouselData } from "@/public/data/data";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";
import { iCarousel } from "@/public/interfaces";
import Container from "./Container";
import Button from "./re-usables/Button";

const Discover = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1, spacing: 16 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 4, spacing: 16 },
      },
    },
  });

  return (
    <section className="w-full relative flex justify-center">
      <div className="bg-primary absolute w-full max-w-full -top-[480px] md:-top-[370px] lg:-top-[300px] xl:-top-[200px] min-h-[1000px] pb-[50px]">
        <center>
          <h1 className="mt-[200px] text-white font-bold capitalize text-[50px] md:text-[70px] leading-[60px]">
            discover personalized <br /> nutrition
          </h1>
          <Button className="bg-white text-primary mt-3 text-[24px]">
            Create Meal Plan
          </Button>
        </center>

        <Container className=" z-50">
          <div
            ref={sliderRef}
            className="keen-slider mt-10 lg:ml-7 cursor-pointer"
          >
            {carouselData.map((el: iCarousel, i: number) => (
              <div
                key={i}
                className="keen-slider__slide w-[450px] h-[600px] bg-white rounded-[40px]"
              >
                <div className="h-1/2 w-full">
                  <Image
                    src={el.img!}
                    alt="food"
                    height={100}
                    width={100}
                    unoptimized
                    className="h-full w-full rounded-t-[40px] object-cover"
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
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Discover;
