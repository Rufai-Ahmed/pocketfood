"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import Button from "./re-usables/Button";
import Galano from "next/font/local";
import Image from "next/image";
const galano = Galano({
  src: "../../public/fonts/GalanoGrotesqueExtraBold.woff2",
});

const Hero = () => {
  const hText = [
    "Busy Week?",
    "unexpected visitors?",
    "date night?",
    "health goals?",
    "team meeting?",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % hText.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [hText.length]);

  return (
    <section className="w-full flex justify-center capitalize min-h-[1000px]">
      <Container>
        <center className="h-[400px] flex flex-col justify-center items-center">
          <motion.h1
            key={index}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 1 }}
            className={`${galano.className} text-[56px] w-full font-[700] text-primary`}
          >
            {hText[index]}
          </motion.h1>
          <Button className="text-[20px] mt-10">Get Meals Sorted</Button>
        </center>

        <center className="relative">
          <Image
            src={"/assets/phone.webp"}
            alt="phone"
            width={100}
            unoptimized
            className="w-[70%] object-contain h-full"
            height={100}
          />
          <Image
            src={"/assets/broc.webp"}
            alt="phone"
            width={100}
            unoptimized
            className="w-[150px] md:w-[300px] -z-50 left-[10%] lg:-top-[60px] -top-[30px] md:-top-[80px] absolute h-fit"
            height={100}
          />
          <Image
            src={"/assets/mixed.webp"}
            alt="phone"
            width={100}
            unoptimized
            className="w-[150px] md:w-[300px] right-[10%]  -z-50 lg:-top-[160px] -top-[100px] md:-top-[200px] absolute h-fit"
            height={100}
          />
        </center>
      </Container>
    </section>
  );
};

export default Hero;
