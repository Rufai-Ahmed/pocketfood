import React from "react";
import Container from "../Container";
import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center flex-col overflow-x-hidden py-12">
      <Container className="min-h-[300px] flex items-start justify-between">
        <div className="flex items-center gap-3">
          <BsTwitterX size={24} />
          <BsInstagram size={24} />
          <FaFacebook size={24} />
          <BsLinkedin size={24} />
        </div>

        <div className="flex items-start gap-8">
          <div className="space-y-4">
            {["Company", "About", "Feautures", "Career", "Business"].map(
              (el: string, i: number) => (
                <div
                  key={i}
                  className={`${
                    i === 0
                      ? "text-primary font-black text-[19px]"
                      : "text-[17px] font-semibold "
                  }`}
                >
                  {el}
                </div>
              )
            )}
          </div>
          <div className="space-y-4">
            {[
              "Help",
              "Contact Us",
              "Delivery Details",
              "Terms & Conditions",
              "Privacy Policy",
            ].map((el: string, i: number) => (
              <div
                key={i}
                className={`${
                  i === 0
                    ? "text-primary font-black text-[19px]"
                    : "text-[17px] font-semibold "
                }`}
              >
                {el}
              </div>
            ))}
          </div>
        </div>
      </Container>
      <center className="h-[50px] text-gray-700">
        © Copyright 2022, All Rights Reserved by GoMarket, Inc.
      </center>
    </footer>
  );
};

export default Footer;
