"use client";
import React, { useState } from "react";
import VisionCard from "./BatchesCard";
import { Card, CardContent } from "@/components/ui/card2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ParentComponent: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState<number>(7); // Default to VII

  const handleBatchClick = (batch: number) => {
    setSelectedBatch(batch);
  };
  const batchCards2 = [
    {
      title: "Shagun",
      discount: "90-97 %",
      timings: {
        morning: "---",
        noon: "4 pm - 8 pm",
        evening: "5 pm - 9 pm",
      },
      subjects: ["Maths", "Science", "SST"],
      syllabusCompletion: "Apr - Dec",
      revision: "Jan",
      tests: "Weekly",
      testSeries: "Jan - Feb",
    },
  ];
  const batchCards = [
    {
      title: "Vision",
      discount: "80-90 %",
      timings: {
        morning: "---",
        noon: "4 pm - 8 pm",
        evening: "5 pm - 9 pm",
      },
      subjects: ["Maths", "English", "Science", "SST"],
      syllabusCompletion: "Apr - Aug",
      revision: "Sep - Dec",
      tests: "Weekly 3-4 days",
      testSeries: "Jan - Feb",
    },
    {
      title: "Samruddhi",
      discount: "90-97 %",
      timings: {
        morning: "---",
        noon: "4 pm - 8 pm",
        evening: "5 pm - 9 pm",
      },
      subjects: ["Maths", "English", "Science", "SST"],
      syllabusCompletion: "Apr - Dec",
      revision: "Jan",
      tests: "Weekly",
      testSeries: "Jan - Feb",
    },
    {
      title: "Regular",
      discount: "70-80 %",
      timings: {
        morning: "6 am - 8:15 am",
        noon: "4 pm - 8 pm",
        evening: "5 pm - 9 pm",
      },
      subjects: ["Maths", "English", "Science", "SST"],
      syllabusCompletion: "Apr - Aug",
      revision: "Jan",
      tests: "Weekly",
      testSeries: "Jan - Feb",
    },
    {
      title: "Sankalp",
      discount: "50-60 %",
      timings: {
        morning: "---",
        noon: "4 pm - 8 pm",
        evening: "5 pm - 9 pm",
      },
      subjects: ["Maths", "English", "Science", "SST"],
      syllabusCompletion: "Apr - Dec",
      revision: "Jan",
      tests: "Weekly",
      testSeries: "Jan - Feb",
    },
  ];

  const visibleCards = batchCards.slice(0, selectedBatch - 6);
  const showCarousel = selectedBatch === 10;

  return (
    <div className="bg-[#F6F4EE] px-4 py-8 md:px-8 md:py-16 lg:px-32 lg:py-24">
      <div className="section-width flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
        <h1 className="text-center text-3xl font-medium text-[#2C7488] md:text-left md:text-4xl lg:text-5xl">
          What our <br /> <span className="text-[#02B3E4]">Batches</span> offer
        </h1>
        <div className="flex flex-wrap gap-4 rounded-full bg-white px-2 py-1 md:gap-8 md:px-4 md:py-2">
          {["VII", "VIII", "IX", "X"].map((batch, index) => (
            <button
              key={batch}
              onClick={() => handleBatchClick(index + 7)}
              className={`rounded-full px-4 py-2 transition-colors duration-300 ${
                selectedBatch === index + 7
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black hover:bg-blue-100"
              }`}
            >
              {batch}
            </button>
          ))}
        </div>
      </div>

      <div className="section-width my-8">
        {showCarousel ? (
          <Carousel opts={{ align: "start" }} className="relative w-full">
            <CarouselContent>
              {visibleCards.map((card, index) => (
                <CarouselItem
                  key={index}
                  className="w-full flex-shrink-0 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-2 md:p-4 lg:p-6">
                    <Card>
                      <CardContent className="aspect-w-1 aspect-h-1 flex items-center justify-center p-4">
                        <VisionCard {...card} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-500 p-2 text-white" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-500 p-2 text-white" />
          </Carousel>
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            {visibleCards.map((card, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 p-2 sm:w-1/2 sm:p-4 md:w-1/3 lg:w-[23rem]"
              >
                <Card>
                  <CardContent className="aspect-w-1 aspect-h-1 flex items-center justify-center p-4">
                    <VisionCard {...card} />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentComponent;
