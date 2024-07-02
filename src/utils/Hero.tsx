import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const Hero = () => {
  return (
    <div id="home" className='flex justify-center items-center'>
      <div className="bg-white dark:bg-gray-900">
        <section className="bg-[#FCF8F1] bg-opacity-30 py-10 dark:bg-black sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="flex flex-col items-center justify-center lg:block">
                <h1 className="inter-bold mt-12 text-center text-5xl font-bold text-black dark:text-white sm:text-6xl md:mt-8 lg:mt-12 lg:text-left xl:text-[84px] ">
                  Best Offline Platform For Education
                </h1>
                <p className="inter-medium mt-2 text-center text-sm text-secondary dark:text-gray-300 sm:text-sm md:text-left lg:mt-4 lg:h-[32px] lg:w-[425px] lg:text-left">
                  Using highly personalised activities, videos and animations
                  you can energise your students.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:justify-start lg:items-start lg:justify-start">
                  <Button
                    size={"lg"}
                    className="w-full rounded-full py-6 text-lg md:max-w-[200px]"
                  >
                    <span>Get Started</span>
                    <ArrowRight strokeWidth={1} size={20} />
                  </Button>
                  <Button
                    variant={"outline"}
                    size={"lg"}
                    className="w-full rounded-full py-6 text-lg md:max-w-[200px]"
                  >
                    <span>How it works</span>
                    <ArrowRight strokeWidth={1} size={20} />
                  </Button>
                </div>
                <div className="mt-8">
                  <div className="flex space-x-8 sm:space-x-14 md:space-x-14 lg:space-x-14">
                    <div className="poppins-bold">
                      <h3 className="text-3xl font-bold text-black dark:text-white">
                        50+
                      </h3>
                      <div className="h-1 w-20 rounded bg-bgcust md:w-[114px] lg:w-[114px]"></div>
                      <p className="text-md poppins-semibold  text-gray-500">
                        Tutors
                      </p>
                    </div>
                    <div className="poppins-bold">
                      <h3 className="text-3xl font-bold text-black dark:text-white ">
                        100+
                      </h3>
                      <div className="h-1 w-20  rounded bg-bgcust md:w-[114px] lg:w-[114px]"></div>
                      <p className="text-md poppins-semibold  text-gray-500">
                        Students
                      </p>
                    </div>
                    <div className="poppins-bold">
                      <h3 className="text-3xl font-bold text-black dark:text-white">
                        150+
                      </h3>
                      <div className="h-1 w-20  rounded bg-bgcust md:w-[114px] lg:w-[114px]"></div>
                      <p className="text-md poppins-semibold  text-gray-500">
                        Courses
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center relative">
                <div className="bg-bgcust flex justify-center items-center rounded-3xl " style={{ height: '382px', width: '290px', borderRadius: '98.35px 98.35px 98.35px 6.15px' }}>
                  <img src="https://s3-alpha-sig.figma.com/img/03f1/9e27/7131b8e23e07d648f5a34d8f6ddd3cff?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aRN0lXk5lg~C2WxbKKKAl2rIH9bf~-zPVZ5rzKcezSO5hD~8wZhgRB9dPr8FicPgmJbOAq-1cTkEhccGBfA-F32Eya-ouVadsSoIRtB~LIT2E2mfG7TItsh8w6ckXEwjEchwOsw~WNSxvCzdALeipOEv3eidTopBwvZDROLUlVhowm7gmVCbwZoCQ5XjpZk8lR6vAqbGSAFh6CPQVodVdnhZf5CO6R9Xbx-6L2hS96nKEtwUN1Ak3ererCJH7RDuSjG3n40mttxCHJhTWyhd5ItJcYPVCac6g2dzHlNRQNOoSdu6IIFElRbqWiJorXyuXohOubrgLvO8F45OUwAofA__" alt="" className="object-cover h-[341px] w-[331px] mt-10" />
                  
                </div>
                <div className='absolute lg:-right-4  lg:top-52 md:top-52 sm:top-48 md:right-28 sm:right-0 right-0 top-60'>
                <img src="/herosvg.svg" alt="" className="object-cover h-40 md:h-80" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
