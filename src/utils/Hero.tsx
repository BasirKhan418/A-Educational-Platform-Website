import React from 'react';

const Hero = () => {
  return (
    <div id="home">
      <div className="bg-white dark:bg-gray-900">
        <section className="bg-[#FCF8F1] dark:bg-black bg-opacity-30 py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center items-center lg:block">
                <h1 className="mt-12 text-5xl font-bold text-black dark:text-white lg:mt-12 sm:text-6xl xl:text-[84px] inter-bold text-center md:mt-8 lg:text-left ">
                  Best Offline Platform For Education
                </h1>
                <p className="mt-2 text-sm text-secondary dark:text-gray-300 lg:mt-4 sm:text-sm inter-medium lg:w-[425px] lg:h-[32px] lg:text-left md:text-left text-center">
                  Using highly personalised activities, videos and animations you can energise your students.
                </p>
                <div className="mt-8 flex space-x-4 flex-wrap justify-center items-center lg:justify-start lg:items-start md:justify-start md:items-start">
                  <button
                    
                    className="inline-flex items-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-bgcust rounded-full inter-medium mb-4 lg:mb-0  md:mb-0 "
                    role="button"
                  >
                    Get Start
                    <svg
                      className="w-6 h-6 ml-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <button
                    className="inline-flex items-center px-6 py-4 font-semibold text-bgcust transition-all duration-200 border-2 border-bgcust rounded-full inter-medium mb-4 lg:mb-0  md:mb-0 "
                    role="button"
                  >
                    How it works
                    <svg
                      className="w-6 h-6 ml-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-8">
                  <div className="flex space-x-8 lg:space-x-14 md:space-x-14 sm:space-x-14">
                    <div className='poppins-bold'>
                      <h3 className="text-3xl font-bold text-black dark:text-white">50+
                        
                      </h3>
                      <div className='lg:w-[114px] md:w-[114px] w-20 h-1 bg-bgcust rounded'></div>
                      <p className="text-md text-gray-500  poppins-semibold">Tutors</p>
                    </div>
                    <div className='poppins-bold'>
                      <h3 className="text-3xl font-bold text-black dark:text-white ">100+</h3>
                      <div className='lg:w-[114px] md:w-[114px]  w-20 h-1 bg-bgcust rounded'></div>
                      <p className="text-md text-gray-500  poppins-semibold">Students</p>
                    </div>
                    <div className='poppins-bold'>
                      <h3 className="text-3xl font-bold text-black dark:text-white">150+</h3>
                      <div className='lg:w-[114px] md:w-[114px]  w-20 h-1 bg-bgcust rounded'></div>
                      <p className="text-md text-gray-500  poppins-semibold">Courses</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center relative">
                <div className="bg-bgcust flex justify-center items-center rounded-3xl " style={{ height: '382px', width: '290px', borderRadius: '98.35px 98.35px 98.35px 6.15px' }}>
                  <img src="https://s3-alpha-sig.figma.com/img/03f1/9e27/7131b8e23e07d648f5a34d8f6ddd3cff?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aRN0lXk5lg~C2WxbKKKAl2rIH9bf~-zPVZ5rzKcezSO5hD~8wZhgRB9dPr8FicPgmJbOAq-1cTkEhccGBfA-F32Eya-ouVadsSoIRtB~LIT2E2mfG7TItsh8w6ckXEwjEchwOsw~WNSxvCzdALeipOEv3eidTopBwvZDROLUlVhowm7gmVCbwZoCQ5XjpZk8lR6vAqbGSAFh6CPQVodVdnhZf5CO6R9Xbx-6L2hS96nKEtwUN1Ak3ererCJH7RDuSjG3n40mttxCHJhTWyhd5ItJcYPVCac6g2dzHlNRQNOoSdu6IIFElRbqWiJorXyuXohOubrgLvO8F45OUwAofA__" alt="" className="object-cover h-80" />
                  
                </div>
                <div className='absolute lg:-right-3  lg:top-48 md:top-48 sm:top-48 md:right-28 sm:right-0 right-0 top-60'>
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
