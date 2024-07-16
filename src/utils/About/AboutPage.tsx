import React from 'react'
import AchieveSuccess from './AchieveSuccess'
import SliderCard from './SliderCard'
import FeatureCards from './FeatureCards'
import Image from 'next/image'
import Dinesh from "../../../public/about/dinesh.svg"
const AboutPage = () => {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-white my-24">
      <div className="w-full md:w-2/3 mb-8 md:mb-0 lg:w-6/12">
        <h2 className="text-5xl font-bold text-bgcust inter-bold">About us</h2>
        <div className='h-1 w-24 bg-bgcust rounded mb-16 '></div>
        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-8 poppins-bold">VISION</h3>
          <p className="text-lg leading-relaxed text-gray-700  poppins-medium lg:w-686px]">
            Pioneer education through daily improvements, fostering innovation with technology and modern learning approaches.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-8 poppins-bold">MISSION</h3>
          <p className="text-lg leading-relaxed text-gray-700 lg:w-686px] poppins-medium">
            Deliver quality education and valuable life lessons, helping students achieve academic success and develop skills for future success.
          </p>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-gray-700 lg:w-686px] poppins-medium">
            Gour's Educare Plus, founded in 2012 by Dinesh Gour, offers innovative education for grades VIII–X in Nagpur. It focuses on holistic growth, individualized learning, and addressing specific student needs, leading to rapid expansion.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 flex flex-col items-center mt-20">
        <div className="relative">
          {/* <img
            src="https://s3-alpha-sig.figma.com/img/7f4a/d591/7c24839951ce5a9ba959a039d43b43be?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mWyxOph-lq-C~1lqvoQ-y4AmBOmFcPa-T3RFSu11RNxtKGct-7dIErB9RqZ74wkFjyO810uMnz8p55OUCed1TiKN~hkKtOPH1RbKjThE0Oli14hifXwVGh8s3g70ht76XbuCLITW2yi8JH0IupJjW2gOnDzTIbKAMG0TiNP38k2kmNVUGzbKv9b6h5DIsNEGydE3LTziRxTn6s-FYVtOpaInE-SOtOeCfptrqSpAfWKc~IwLg5ONUc7443aXowOsFCdmZBLVBJmf1XK6TCs7vM8CvKh-Dn~Ke5X1bta6dSy223iNETGR5OurSZ6nrhwKM3rwlC~HAELBks8eTEpaug__"
            alt="Dinesh Gour"
            className="w-72 h-72 object-cover rounded-lg shadow-lg border-2 border-black"
          /> */}
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
    {/* acieve success page starts from here */}
    <AchieveSuccess />
    <SliderCard/>
    <FeatureCards/>
    </div>
  )
}

export default AboutPage
