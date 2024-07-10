import React from "react";
import Container from "./Container";
import Image from "next/image";
import Button from "./re-usables/Button";

const Banner = () => {
  return (
    <div className="flex items-center justify-center overflow-x-hidden">
      <Container className="min-h-[500px] space-y-10 max-w-full xl:max-w-[1200px]">
        <section className="w-full min-h-[500px] bg-secondary py-10 md:py-0 px-20 flex items-center justify-center">
          <div className="bg-[#fee1c4] rounded-[40px] flex items-end px-[40px] md:px-[4%] relative justify-between flex-wrap md:flex-nowrap">
            <div className="h-full gap-4 flex flex-col justify-center items-start py-[4%] w-full md:w-[50%]">
              <h1
                className="text-[40px] md:text-[60px] text-secondary leading-[1] font-bold
         "
              >
                Life is Hectic, but your Meals shouldn&apos;t be.
              </h1>
              <Button className="">Get Started</Button>
            </div>

            <div className="md:w-1/2 w-full h-full flex items-end justify-end">
              <Image
                src={"/assets/half.webp"}
                unoptimized
                alt="phone"
                width={100}
                height={100}
                className="md:w-[60%] w-full h-full object-contain"
              />
            </div>
          </div>
        </section>
        <section className="w-full min-h-[150px] rounded-[40px] shadow-lg flex items-center justify-center md:justify-between bg-[#fee1c4] px-14 space-y-3 md:space-y-0 py-12 md:py-0 flex-wrap md:flex-nowrap">
          <h1 className="text-[28px] md:text-[40px] font-bold leading-[1]">
            Your Inbox Deserves Some Extra Warmth
          </h1>

          <div className="md:w-[320px] w-[300px] h-[50px] bg-white pr-3 rounded-md flex items-center ">
            <input
              type="email"
              placeholder="Email Address"
              className="flex flex-1 pl-3 outline-none border-none"
            />
            <Button className="text-[12px]">Subscribe</Button>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Banner;
