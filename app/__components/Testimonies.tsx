import React from "react";
import Container from "./Container";
import Image from "next/image";
import { testimonialData } from "@/public/data/data";
import { iTestimonial } from "@/public/interfaces";

const Testimonies = () => {
  return (
    <div className="flex items-center justify-center min-h-[800px] py-20 md:py-14 md:min-h-[600px]">
      <Container>
        <center>
          <h1 className="text-[60px] leading-[1.1] font-black">
            <span className="text-secondary">
              Hear From <br />
            </span>
            Pocket Foodies
          </h1>
        </center>

        <section className="flex flex-wrap lg:flex-nowrap items-center justify-between mt-8 gap-10">
          {testimonialData.map((el: iTestimonial, i: number) => (
            <div key={i} className="space-y-3 ">
              <p className="text-[20px]">{el.p}</p>

              <div className="flex items-center gap-7">
                <Image
                  src={el.img!}
                  alt="testimony-image"
                  width={100}
                  height={100}
                  unoptimized
                  className="w-16 h-16 rounded-full object-cover object-center"
                />

                <div className="lg:-space-y-2 text-[16px] md:text-[20px]">
                  <p>
                    <b>{el.b}</b>
                  </p>
                  <p className="leading-[1]"> {el.bp}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </Container>
    </div>
  );
};

export default Testimonies;
