import React from "react";
import Title from "./title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import styles from "@/styles/achievements.css";

const Achievements = () => {
  const testimonials = [
    {
      name: "Mr. Dinesh Gour",
      title: "Inspiring Men’s of Nagpur Award",
      year: "#YEAR 2018",
      post: "MD & CEO",
      image: "/achievement/2018.jpg",
    },
    {
      name: "Mr. Dinesh Gour",
      title: "Times Business Award",
      year: "#YEAR 2019",
      post: "MD & CEO",
      image: "/achievement/2019.jpg",
    },
    {
      name: "Mr. Dinesh Gour",
      title: "Times Top Coaching Institute Award",
      year: "#YEAR 2020",
      post: "MD & CEO",
      image: "/achievement/2020.jpg",
    },
    {
      name: "Mr. Dinesh Gour",
      title: "Times Business Award",
      year: "#YEAR 2021",
      post: "MD & CEO",
      image: "/achievement/2021.jpg",
    },
    {
      name: "Mr. Dinesh Gour",
      title: "Inspiring Men’s of Nagpur Award",
      year: "#YEAR 2022",
      post: "MD & CEO",
      image: "/achievement/2022.jpg",
    },
    {
      name: "Mr. Dinesh Gour",
      title: "Times Business Leadership Award",
      year: "#YEAR 2022",
      post: "MD & CEO",
      image: "/achievement/2023.jpg",
    },
    {
      name: "Mr. Dinesh Gour",
      title: "ET Icons Of Nagpur Award",
      year: "#YEAR 2024",
      post: "MD & CEO",
      image:
        "https://s3-alpha-sig.figma.com/img/da4e/bec6/de15ac4c3170f05af72fb6b5f7043599?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qZrG9ADSaocR3b5TUPf~hqfLfXGaQ97pXB4FWjvHpzRirzH7T2S4~pYQpysETUyHf1PHpzN-Dk2pPR-1pT3hga11526qKCwIiv7YU9F4qhzKQu0oZb--3Kl5pFfgKHJ6atcd~tjROvf58vz1DlL9JkvFYoB0wjb6vlXQMUOqAuRO1wBV5W-LZ3Qd1b9AHB-SoucsA68qKFuQHZ9V~AiF5nNTGZx-ShiEOOqohcZ~lxhtYk~JgFfWA74JXcPbflxBbzOFFakxWGGnMJtNE6fURzsuf6LTBeS~1GiMZJHN2q3pfvm8EvZPo4CI5l4B67u49UfkJLa~QQ5FcvUOz0zc3Q__",
    },
  ];

  return (
    <div className="poppins-bold relative my-10 w-full bg-gray-200 ">
      <section
        id="acievement"
        className="section-width relative z-10 min-h-[75vh] py-12"
      >
        <Title title="Achievements" className=" inline text-2xl" />

        <div className="flex flex-col items-start space-y-8 md:flex-row md:justify-between md:space-x-8 md:space-y-0">
          <div className="my-0 flex min-h-[40vh] flex-1 flex-col justify-center md:max-w-lg lg:my-20">
            <h3 className="poppins-medium m-2 mb-4 text-2xl font-semibold md:m-0 md:text-4xl lg:m-0">
              Milestones Reached in Our Educare.
            </h3>
            <p className="poppins-medium my-8 mb-4 w-[22rem] text-lg text-gray-600 ">
              Transforming Education in Nagpur Since 2012: Pioneering Growth,
              Excellence, and Innovation.
            </p>
          </div>

          <div className="poppins-medium w-full lg:w-[663px] ">
            <Carousel className=" my-0 max-md:max-w-md lg:my-20">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="mx-auto max-w-[225px] border-2 border-blue-200 md:max-w-xl">
                      <CardContent className="flex min-h-[40vh] flex-col items-center p-0 md:flex-row md:items-stretch md:gap-4">
                        <div className="md:w-1/2">
                          <Image
                            width={400}
                            height={300}
                            src={testimonial.image}
                            alt={`${testimonial.title}'s portrait`}
                            className=" h-full w-full flex-1 rounded-md object-cover object-center"
                          />
                        </div>
                        <div className="flex flex-col justify-between space-y-2 py-12 max-md:p-6 md:w-1/2">
                          <div>
                            <div className="mb-2 inline-flex rounded-full bg-[#D39121] px-2 py-1">
                              {[...Array<number>(5).fill(0)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 fill-white text-white"
                                />
                              ))}
                            </div>
                          </div>
                          <p className="mb-4 text-lg w-40 poppins-bold text-gray-500">
                            {testimonial.title}
                          </p>
                          <p className="mb-4 text-lg  poppins-bold text-gray-500">
                            {testimonial.year}
                          </p>
                          <div>
                            <h4 className="poppins-bold">{testimonial.name}</h4>
                            <p className="text-xs text-gray-500">
                              {testimonial.post}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </Carousel>
          </div>
        </div>
      </section>

      <div className={styles.verticalDivisions}>
        <div className="division"></div>
        <div className="division"></div>
        <div className="division"></div>
        <div className="division"></div>
        <div className="division"></div>
        <div className="division"></div>
        <div className="division"></div>
        <div className="division"></div>
        <div className="division"></div>
        <div className="division"></div>
      </div>
    </div>
  );
};

export default Achievements;
