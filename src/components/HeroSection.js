import React from "react";
// import Image from "next/image";
// import illustration-intro from "../../public/illustration-intro.svg";
// illustration-intro.svg
const HeroSection = () => {
  return (
    <div className="h-fit pb-40">
      <div className="grid md:grid-cols-2 mt-24 px-10">
        <div className="mt-10 order-2 md:order-1 flex justify-center md:justify-start">
          <div className="w-3/4 space-y-12">
            <h1 className="text-5xl font-bold">
              Your Fast and Reliable Lending Solution
            </h1>
            <p className="text-darkGrayishBlue">
              Providing you with fast, convenient, and secure lending solutions.
              Simplified the loan application process.
            </p>
            <button className="bg-brightRed px-4 p-3 rounded-full text-white hover:bg-brightRedLight">
              Get started
            </button>
          </div>
        </div>

        <div className="sm:flex sm:justify-center order-1 md:order-2">
          <img src="/illustration-intro.svg" alt="Description of the image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
