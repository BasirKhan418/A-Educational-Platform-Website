import React from 'react'
import Title from './title'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from 'next/image';
import styles from '@/styles/achievements.css'


const Achievements = () => {
    const testimonials = [
      {
        name: "Mr. Dinesh Gour",
        title: `Inspiring Men’s of Nagpur Award `,
        year:"#YEAR 2022",
        post:
          "MD &CEO",
        image: "/api/placeholder/400/300",
      },
      {
        name: "Mr. Dinesh Gour",
        title: `Inspiring Men’s of Nagpur Award `,
        year:"#YEAR 2022",
        post:
          "MD &CEO",
        image: "/api/placeholder/400/300",
      },
      {
        name: "Mr. Dinesh Gour",
        title: `Inspiring Men’s of Nagpur Award `,
        year:"#YEAR 2022",
        post:
          "MD &CEO",
        image: "/api/placeholder/400/300",
      },
    ];

    
    
    return (
      <div className="relative w-full bg-gray-100 my-10 poppins-bold " >
        <section
          id="acievement"
          className="z-10 section-width relative min-h-[75vh] py-12"
        >
          <Title title="Achievements" className=" text-2xl inline" />

          <div className="flex flex-col items-start space-y-8 md:flex-row md:justify-between md:space-x-8 md:space-y-0">
            <div className="flex min-h-[40vh] flex-1 flex-col justify-center md:max-w-md my-20">
              <h3 className="mb-4 text-2xl font-semibold md:text-4xl poppins-bold lg:m-0 md:m-0 m-2">
              Milestones Reached in Our Educare.
              </h3>
              <p className="mb-4 text-sm text-gray-600 w-56 my-4 ">
              Transforming Education in Nagpur Since 2012: Pioneering Growth, Excellence, and Innovation.
              </p>
            </div>

            <div className="lg:w-[663px] w-full poppins-medium ">
              <Carousel className=" max-md:max-w-md lg:my-20 ">
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <Card className="mx-auto max-w-[225px] md:max-w-xl border-2 border-blue-200">
                        <CardContent className="flex min-h-[40vh] flex-col items-center p-0 md:flex-row md:items-stretch md:gap-4">
                          <div className="md:w-1/2">
                            <Image
                              width={400}
                              height={300}
                              // src={testimonial.image}
                              src={
                                "https://s3-alpha-sig.figma.com/img/576e/f29f/f98de2b143921391ff7d1ad87072e6c0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LtgKp85sNS703Jjzcly9CpCk6qXjZ0hg3oNijPsDNsMleIAtcxW-G1Q3PLj7mEA8iBxGPNQKrJYkeRUR9WjV~CSoCFZBSWGUnV6nhC5muUDL5~ENbLAXBu8AukvTOvLXujQOVdpoOcH~lb~UMm0OPBb2QMWMX1GnZbzLVLxJ0GPjSzVbgqgiH-LrhIx8GXlXADwPNdATGrMisuhCDRbkJsG1JrXcOzYB3gdD~D8JWRMN6oLGyPoHsTZChVXq2n0vR--oUepBe6LWMOtaU~2Y-2ZUqUnN2dVYzaUjSCZfjl87qDrqSEawbAZ7Q3zwNSRfvypGoPkt0JB6xPRy1sVG6Q__"
                              }
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
                            <p className="mb-4  font-semibold text-gray-400 w-40">
                              {testimonial.title}
                            </p>
                            <p className="mb-4  font-semibold text-gray-400">
                              {testimonial.year}
                            </p>
                            <div>
                              <h4 className="">
                                {testimonial.name}
                              </h4>
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
        </div>
      </div>
    );
}

export default Achievements
