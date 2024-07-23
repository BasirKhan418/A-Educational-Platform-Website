
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

  const batchCards = [
    {
      title: "Vision 1",
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
      title: "Vision 2",
      timings: {
        morning: "7 am - 9 am",
        noon: "1 pm - 3 pm",
        evening: "6 pm - 8 pm",
      },
      subjects: ["Physics", "Chemistry", "Biology"],
      syllabusCompletion: "Mar - Jul",
      revision: "Aug - Nov",
      tests: "Weekly 2-3 days",
      testSeries: "Dec - Jan",
    },
    {
      title: "Vision 3",
      timings: {
        morning: "6 am - 8 am",
        noon: "2 pm - 4 pm",
        evening: "7 pm - 9 pm",
      },
      subjects: ["History", "Geography", "Political Science"],
      syllabusCompletion: "May - Sep",
      revision: "Oct - Jan",
      tests: "Weekly 1-2 days",
      testSeries: "Feb - Mar",
    },
    {
      title: "Vision 4",
      timings: {
        morning: "8 am - 10 am",
        noon: "3 pm - 5 pm",
        evening: "7 pm - 9 pm",
      },
      subjects: ["Economics", "Accountancy", "Business Studies"],
      syllabusCompletion: "Jun - Oct",
      revision: "Nov - Feb",
      tests: "Weekly 3-4 days",
      testSeries: "Mar - Apr",
    },
  ];

  const visibleCards = batchCards.slice(0, selectedBatch - 6);
  const showCarousel = selectedBatch === 10;

  return (
    <div className="bg-[#F6F4EE] px-4 py-8 md:px-8 md:py-16 lg:px-32 lg:py-24">
      <div className="section-width flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
        <h1 className="text-3xl font-medium text-[#2C7488] md:text-4xl lg:text-5xl text-center md:text-left">
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
          <Carousel
            opts={{ align: "start" }}
            className="relative w-full"
          >
            <CarouselContent>
              {visibleCards.map((card, index) => (
                <CarouselItem
                  key={index}
                  className="flex-shrink-0 w-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-2 md:p-4 lg:p-6">
                    <Card>
                      <CardContent className="flex aspect-w-1 aspect-h-1 items-center justify-center p-4">
                        <VisionCard {...card} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2" />
            <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2" />
          </Carousel>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center">
            {visibleCards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-[23rem] p-2 sm:p-4"
              >
                <Card>
                  <CardContent className="flex aspect-w-1 aspect-h-1 items-center justify-center p-4">
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
