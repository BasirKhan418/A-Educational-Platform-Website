// import React from 'react'
// import AchieveSuccess from './AchieveSuccess'
// // import SliderCard from './SliderCard'
// import Offers from './Offers'
// import FeatureCards from './FeatureCards'
// import Session from './Session'
// import Image from 'next/image'
// import Dinesh from "../../../public/about/dinesh.svg"
// const AboutPage = () => {
//   return (
//     <div className='min-h-screen container max-w-[80%] md:max-w-[83%] flex justify-between items-center flex-col'>
//       <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-white my-24">
//       <div className="w-full md:w-2/3 mb-8 md:mb-0 lg:w-6/12">
//         <h2 className="text-5xl font-bold text-bgcust inter-bold">About us</h2>
//         <div className='h-1 w-24 bg-bgcust rounded mb-16 '></div>
//         <div className="mb-6">
//           <h3 className="text-3xl font-bold mb-8 poppins-bold">VISION</h3>
//           <p className="text-lg leading-relaxed text-gray-700  poppins-medium lg:w-686px]">
//             Pioneer education through daily improvements, fostering innovation with technology and modern learning approaches.
//           </p>
//         </div>
//         <div className="mb-6">
//           <h3 className="text-3xl font-bold mb-8 poppins-bold">MISSION</h3>
//           <p className="text-lg leading-relaxed text-gray-700 lg:w-686px] poppins-medium">
//             Deliver quality education and valuable life lessons, helping students achieve academic success and develop skills for future success.
//           </p>
//         </div>
//         <div>
//           <p className="text-lg leading-relaxed text-gray-700 lg:w-686px] poppins-medium">
//             Gour's Educare Plus, founded in 2012 by Dinesh Gour, offers innovative education for grades VIII–X in Nagpur. It focuses on holistic growth, individualized learning, and addressing specific student needs, leading to rapid expansion.
//           </p>
//         </div>
//       </div>
//       <div className="w-full md:w-1/3 flex flex-col items-center mt-20">
//         <div className="relative">
//           <Image
//             src={Dinesh}
//             alt="Dinesh Gour"
//             className="object-cover rounded-lg"
//           />
          
//         </div>
//         <div className="text-center">
//           <h4 className="text-2xl font-bold poppins-bold">Dinesh Gour</h4>
//           <p className="text-gray-500 poppins-medium">MD & CEO</p>
//         </div>
//       </div>
//     </div>
//     {/* acieve success page starts from here */}
//     <AchieveSuccess />
//     <Session/>
//     {/* <SliderCard/> */}
//     <FeatureCards/>
//     <Offers/>
//     </div>
//   )
// }

// export default AboutPage


import React from 'react';
import AchieveSuccess from './AchieveSuccess';
// import SliderCard from './SliderCard'
import Offers from './Offers';
import FeatureCards from './FeatureCards';
import Session from './Session';
import Image from 'next/image';
import Dinesh from "../../../public/about/dinesh.svg";

const AboutPage = () => {
  return (
    <div className="min-h-screen container lg:max-w-navbar mx-auto flex flex-col justify-center items-center px-6">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-4 md:px-16 md:py-8 bg-white my-24 w-full">
        <div className="w-full md:w-2/3 mb-8 md:mb-0 lg:w-1/2">
          <h2 className="text-5xl font-bold text-bgcust inter-bold">About us</h2>
          <div className="h-1 w-24 bg-bgcust rounded mb-16"></div>
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-8 poppins-bold">VISION</h3>
            <p className="text-lg leading-relaxed text-gray-700 poppins-medium">
              Pioneer education through daily improvements, fostering innovation with technology and modern learning approaches.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-8 poppins-bold">MISSION</h3>
            <p className="text-lg leading-relaxed text-gray-700 poppins-medium">
              Deliver quality education and valuable life lessons, helping students achieve academic success and develop skills for future success.
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-gray-700 poppins-medium">
              Gour's Educare Plus, founded in 2012 by Dinesh Gour, offers innovative education for grades VIII–X in Nagpur. It focuses on holistic growth, individualized learning, and addressing specific student needs, leading to rapid expansion.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center mt-20">
          <div className="relative">
            <Image
              src={Dinesh}
              alt="Dinesh Gour"
              className="object-cover rounded-lg"
            />
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold poppins-bold">Dinesh Gour</h4>
            <p className="text-gray-500 poppins-medium">MD & CEO</p>
          </div>
        </div>
      </div>
      {/* Achieve success section */}
      <AchieveSuccess />
      <Session />
      {/* <SliderCard/> */}
      <FeatureCards />
      <Offers />
    </div>
  );
};

export default AboutPage;
