import React from "react";
import Container from "./Container";
import Button from "./re-usables/Button";
import Image from "next/image";

const Info = () => {
  return (
    <div className="w-full flex justify-center mt-[800px] min-h-[10000px]">
      <Container className="bg-food ">
        <div className="w-full h-[700px] flex items-center justify-between">
          <div className="pl-[80px] w-full md:w-[35%] space-y-5">
            <h3 className="text-[#241a43] font-black leading-[50px] text-[50px]">
              Save Time And Reduce Meal Decision Stress
            </h3>
            <p className="text-[24px] leading-tight font-semibold">
              Plan meals effortlessly; subscribe to weekly and monthly meal
              plans from your favorite food plug, leaving you more time to do
              your thing.
            </p>

            <Button className="text-[20px]">Subscribe to meal plan</Button>
          </div>

          <center className="sticky">
            <Image
              src={"/assets/1.webp"}
              alt="phone"
              width={100}
              height={100}
              unoptimized
              className="w-[70%] h-full object-contain top-0"
            />
          </center>
        </div>
      </Container>
    </div>
  );
};

export default Info;
