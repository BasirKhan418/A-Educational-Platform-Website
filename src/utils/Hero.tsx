"use client"
import { Button } from '@/components/ui/button';
import { Circle } from '@/components/ui/circle';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" className="flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900">
        <section className="bg-[#FCF8F1] bg-opacity-30 py-10 dark:bg-black sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <motion.div
                className="flex flex-col items-center justify-center lg:block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="inter-bold mt-12 text-center text-5xl font-bold text-black dark:text-white sm:text-6xl md:mt-8 lg:mt-12 lg:text-left xl:text-[84px]">
                  Best Offline Platform For Education
                </h1>
                <p className="inter-medium mt-2 text-center text-sm text-secondary dark:text-gray-300 sm:text-sm md:text-left lg:mt-4 lg:h-[32px] lg:w-[425px] lg:text-left">
                  Nurturing Individual Potential: Nagpurs Leading Coaching Center Since 2012. Growing Annually.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:justify-start lg:items-start lg:justify-start">
                  <Link href={"/enquiry"}>
                    <Button
                      size={"lg"}
                      className="w-full rounded-full py-6 text-lg md:max-w-[200px]"
                    >
                      <span>Get Started</span>
                      <ArrowRight strokeWidth={1} size={20} />
                    </Button>
                  </Link>
                  <Link href={"/enquiry"}>
                    <Button
                      variant={"outline"}
                      size={"lg"}
                      className="w-full rounded-full py-6 text-lg md:max-w-[200px]"
                    >
                      <span>How it works</span>
                      <ArrowRight strokeWidth={1} size={20} />
                    </Button>
                  </Link>
                </div>
                <div className="mt-8">
                  <div className="flex space-x-8 sm:space-x-14 md:space-x-14 lg:space-x-14">
                    <motion.div
                      className="poppins-bold"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.2 }}
                    >
                      <h3 className="text-3xl font-bold text-black dark:text-white">
                        50+
                      </h3>
                      <div className="h-1 w-20 rounded bg-bgcust md:w-[114px] lg:w-[114px]"></div>
                      <p className="text-md poppins-semibold text-gray-500">
                        Tutors
                      </p>
                    </motion.div>
                    <motion.div
                      className="poppins-bold"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.4 }}
                    >
                      <h3 className="text-3xl font-bold text-black dark:text-white">
                        100+
                      </h3>
                      <div className="h-1 w-20 rounded bg-bgcust md:w-[114px] lg:w-[114px]"></div>
                      <p className="text-md poppins-semibold text-gray-500">
                        Students
                      </p>
                    </motion.div>
                    <motion.div
                      className="poppins-bold"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.6 }}
                    >
                      <h3 className="text-3xl font-bold text-black dark:text-white">
                        150+
                      </h3>
                      <div className="h-1 w-20 rounded bg-bgcust md:w-[114px] lg:w-[114px]"></div>
                      <p className="text-md poppins-semibold text-gray-500">
                        Courses
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="relative flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div
                  className="relative flex items-end rounded-3xl bg-bgcust"
                  className="relative flex items-end rounded-3xl bg-bgcust "
                  style={{
                    height: "418px",
                    width: "321px",
                    borderRadius: "98.35px 98.35px 98.35px 6.15px",
                  }}
                >
                  <Circle
                    className="absolute right-10 top-0"
                    variant="white"
                    size="sm"
                  />
                  <Circle className="absolute left-0 top-5" size="sm" />
                  <Circle
                    className="absolute left-4 top-10"
                    variant="white"
                    size="lg"
                  />
                  <div className="absolute left-12 top-12 h-2 w-2 rounded-full bg-white" />
                  <Circle className="absolute right-0 top-0" size="sm" />
                  <div className="absolute -right-8 top-16 h-2 w-2 rounded-full bg-primary" />
                  <Circle className="absolute bottom-10 right-0" size="lg" variant='white' />
                  <Image
                    height={349}
                    priority
                    width={280}
                    src="https://s3-alpha-sig.figma.com/img/ecac/6553/71158b96468b91abfea06a320b329870?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dAuH5Yy-Ii6VjKPSYkAyjyRGca7eq6LuFBT4jvm7GEuQtrWVZY2agQOZNSCsBR9QgiOG3ChbgTPVZDkuu6~1m4WAdaBezUYLap08mpAi8EMCuHHDPIayj~tKYUspzfxCj7mi1YsvjTbSkavT7iooHzyMivPd9zoLoGB~yxrbFB1yvKXPv7L2dCxI1CAh01T3eTrpJkqsnLGdGDac4kKO8u3STr3brAb8KDNpDgjclScOpfRB4v3GHWFF25mxUZxjxBTlqQE7mq7UoCjUPaRecCHg~ousJMdvvja1Fcpav4zntz8F5F8ye2pmXclrqaPktmHx-uTchhzX~G1-7JOlOQ__"
                    alt=""
                    className="mt-10 h-[349px] w-[280px] object-cover z-20"
                    style={{ borderRadius: "0px 0px 51px 0px" }}
                    className="mt-10 h-[309px] w-[240px] object-cover"
                    className="mt-10 h-[309px] w-[240px] object-cover"
                  />
                </div>
                <div className="absolute right-0 top-60 sm:right-0 sm:top-48 md:right-28 md:top-52 lg:-right-4 lg:top-64 z-10">
                  <img
                    src="/herosvg.svg"
                    alt=""
                    className="h-40 object-cover md:h-80"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
