import React from 'react'
import Title, { SubTitle } from './title'
import aboutItems from '@/config/about';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const About = () => {
    return (
      <section id="about" className="section-width relative min-h-screen poppins-bold my-10">
        <Title title="About us" className="inline" />
        <div className=" flex flex-col md:flex-row h-full items-center gap-32 pb-10">
          {/* About description */}
          <div className="flex md:w-1/4 flex-col ">
            <div className='max-md:mt-8'>
              <SubTitle title="Why choose us?" />
              <h3 className='text-lg my-2'>
                Vision
              </h3>
              <p className='poppins-medium text-gray-500 my-2'>
              Pioneering innovative education through technology and modern study patterns.
              </p>
            </div>
            <div className="space-y-4">
              <Image
                className="absolute max-md:top-10 right-5 max-md:opacity-50  md:top-[30rem] md:left-10"
                src="/about/plant.svg"
                alt="growth"
                width={150}
                height={150}
              />

              <Button className="rounded-full font-semibold">
                <span>Learn More</span>
                <ArrowRight strokeWidth={1} size={20} />
              </Button>
            </div>
          </div>

          {/* About 4 main points  */}
          <div className="flex  mx-auto md:w-3/5 flex-col gap-24 md:gap-12">
            {aboutItems.allItems.map(
              (
                item: {
                  id: number;
                  title: string;
                  description: string;
                  icon: string;
                },
                index: number,
              ) => {
                return <AboutItem key={index} {...item} />;
              },
            )}
          </div>
        </div>
      </section>
    );
}


const AboutItem = ({
  id,
  title,
  description,
  icon,
  className,
}: {
  id: number;
  title: string;
  description: string;
  icon: string;
  className?: string;
}) => {
  return (
    <div
      className={`relative max-w-xs space-y-2 text-xl *:font-bold ${id % 2 == 0 ? "self-end max-md:text-right" : ""}  ${className}`}
    >
      <Image
        src={icon}
        alt="icon"
        width={40}
        height={40}
        className={`absolute ${id % 2 != 0 ? "left-0 -translate-x-1/2" : "right-0 translate-x-[20%]"} md:-translate-x-1/2 top-0 md:left-0 h-40 w-40  -translate-y-1/2`}
      />
      <h3 className="">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

export default About
