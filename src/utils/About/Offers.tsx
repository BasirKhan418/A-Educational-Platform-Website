"use client";
import React, { useState } from "react";
import Image from "next/image";
import Title from "@/components/title";
import One from "../../../public/about/corousal/1.png";
import Two from "../../../public/about/corousal/2.png";
import Three from "../../../public/about/corousal/3.png";
// import Circle from "../../../public/about/circle.png";

const images = [One, Two, Three];

const Offers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getDisplayedImages = () => {
    const displayImages = [];
    for (let i = 0; i < 3; i++) {
      displayImages.push(images[(currentIndex + i) % images.length]);
    }
    return displayImages;
  };

  return (
    <div className="container max-w-[82%] mb-8 flex h-full w-full flex-col items-center justify-center gap-12 p-4">
      <Title title="What we offer" className="mb-4 text-left text-3xl font-bold self-start" />
      <div className="relative flex w-full max-w-screen-lg items-center overflow-hidden">
        <div className="relative flex w-full justify-center transition-transform duration-500 ease-in-out">
          {getDisplayedImages().map((image, index) => (
            <div key={index} className="mx-2 flex-shrink-0">
              <Image
                src={image}
                alt={`Slide ${index}`}
                className="rounded-lg object-cover"
                width={350}
                height={350}
                layout="fixed"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={prevSlide}
          className="rounded-full p-2 text-5xl text-black"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="rounded-full p-2 text-5xl text-black"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Offers;
