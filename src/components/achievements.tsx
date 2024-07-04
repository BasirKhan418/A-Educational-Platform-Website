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
        name: "Henny Wilson",
        title: "Lorem ipsum lorem",
        content:
          "Lorem ipsum is placehext commonly. Lorem ipsu is placeholder text common Lorem ipsum is placehor text commonly.",
        image: "/api/placeholder/400/300",
      },
      {
        name: "Jane Doe",
        title: "Product Manager",
        content:
          "Another great testimonial showcasing our achievements and the impact of our work.",
        image: "/api/placeholder/400/300",
      },
      {
        name: "John Smith",
        title: "Senior Developer",
        content:
          "A third testimonial highlighting the success and achievements of our team.",
        image: "/api/placeholder/400/300",
      },
    ];

    
    
    return (
      <div className="relative w-full bg-gray-100" >
        <section
          id="acievement"
          className="z-10 section-width relative min-h-[75vh] py-12"
        >
          <Title title="Achievements" className="inline" />

          <div className="flex flex-col items-start space-y-8 md:flex-row md:justify-between md:space-x-8 md:space-y-0">
            <div className="flex min-h-[40vh] flex-1 flex-col justify-center md:max-w-md">
              <h3 className="mb-4 text-3xl font-semibold md:text-5xl">
                What we have <span className="text-cyan-500">achieved</span> in
                this place...
              </h3>
              <p className="mb-4 text-lg text-gray-600">
                Lorem ipsum is placehold text commonly. Lorem ipsum is
                placeholder text commonly.
              </p>
            </div>

            <div className="w-full md:w-1/2">
              <Carousel className="mx-auto max-md:max-w-[225px]">
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <Card className="mx-auto max-w-[225px] md:max-w-md ">
                        <CardContent className="flex min-h-[40vh] flex-col items-center p-0 md:flex-row md:items-stretch md:gap-4">
                          <div className="md:w-1/2">
                            <Image
                              width={400}
                              height={300}
                              // src={testimonial.image}
                              src={
                                "https://st3.depositphotos.com/7677414/16494/i/450/depositphotos_164940980-stock-photo-low-key-golden-trophy-blur.jpg"
                              }
                              alt={`${testimonial.name}'s portrait`}
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
                            <p className="mb-4  font-semibold text-gray-400">
                              {testimonial.content}
                            </p>
                            <div>
                              <h4 className="font-semibold">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {testimonial.title}
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
