import React from 'react';
import Title from '@/components/title';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const ResultData = [
  {
      "name": "Sanchi Ramteke",
      "score": "99.0%",
      "school": "Vincent Pallotti School, Nagpur",
      "img":"https://s3-alpha-sig.figma.com/img/8fb2/c341/eee5b05b3a5c9f2f0c33ea6665ec17fb?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KC-hT3mUbD6NNu7qLVMVAwV17-avmP6Dmef2VuGJ5SmUCfiocWED~zr8p3hX67QAOQYJ9x8vXwPKFJ6PkIKi3RDIQYVBcf8i7WBPCvSKk9SAqWP2UhK~7Z~yR~U5sfFSERZMjLrtganAug56rgYpwefrkD6LXZjTG9jiMHCP5IorlrGjQrfSEJuqlDRKZWywwyTLZpaY8sInKcXgYMgDM~j~AgXsCxwUOd6hib60xaoL3FYoo2leQELY1uSih7qOaz2wv~dZirTPVfKlflUlldcu-rAAbvx-V0aszQhE6Qm-e-hHtHB0SM-6EzdsZ089GGyxcIsMP1o889Sq5dibQQ__"
  },
  {
      "name": "Aryan Ukudde",
      "score": "98.6%",
      "school": "Somalwar High School, Nagpur",
      "img":"https://s3-alpha-sig.figma.com/img/8fb2/c341/eee5b05b3a5c9f2f0c33ea6665ec17fb?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KC-hT3mUbD6NNu7qLVMVAwV17-avmP6Dmef2VuGJ5SmUCfiocWED~zr8p3hX67QAOQYJ9x8vXwPKFJ6PkIKi3RDIQYVBcf8i7WBPCvSKk9SAqWP2UhK~7Z~yR~U5sfFSERZMjLrtganAug56rgYpwefrkD6LXZjTG9jiMHCP5IorlrGjQrfSEJuqlDRKZWywwyTLZpaY8sInKcXgYMgDM~j~AgXsCxwUOd6hib60xaoL3FYoo2leQELY1uSih7qOaz2wv~dZirTPVfKlflUlldcu-rAAbvx-V0aszQhE6Qm-e-hHtHB0SM-6EzdsZ089GGyxcIsMP1o889Sq5dibQQ__"
  },
  {
      "name": "Koyna Agrawal",
      "score": "98.2%",
      "school": "Priyadarshini Nagpur Public",
      "img":"https://s3-alpha-sig.figma.com/img/8fb2/c341/eee5b05b3a5c9f2f0c33ea6665ec17fb?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KC-hT3mUbD6NNu7qLVMVAwV17-avmP6Dmef2VuGJ5SmUCfiocWED~zr8p3hX67QAOQYJ9x8vXwPKFJ6PkIKi3RDIQYVBcf8i7WBPCvSKk9SAqWP2UhK~7Z~yR~U5sfFSERZMjLrtganAug56rgYpwefrkD6LXZjTG9jiMHCP5IorlrGjQrfSEJuqlDRKZWywwyTLZpaY8sInKcXgYMgDM~j~AgXsCxwUOd6hib60xaoL3FYoo2leQELY1uSih7qOaz2wv~dZirTPVfKlflUlldcu-rAAbvx-V0aszQhE6Qm-e-hHtHB0SM-6EzdsZ089GGyxcIsMP1o889Sq5dibQQ__"
  },
  {
      "name": "Shamit Bundela",
      "score": "97.8%",
      "school": "Centre Point School, Katol",
      "img":"https://s3-alpha-sig.figma.com/img/8fb2/c341/eee5b05b3a5c9f2f0c33ea6665ec17fb?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KC-hT3mUbD6NNu7qLVMVAwV17-avmP6Dmef2VuGJ5SmUCfiocWED~zr8p3hX67QAOQYJ9x8vXwPKFJ6PkIKi3RDIQYVBcf8i7WBPCvSKk9SAqWP2UhK~7Z~yR~U5sfFSERZMjLrtganAug56rgYpwefrkD6LXZjTG9jiMHCP5IorlrGjQrfSEJuqlDRKZWywwyTLZpaY8sInKcXgYMgDM~j~AgXsCxwUOd6hib60xaoL3FYoo2leQELY1uSih7qOaz2wv~dZirTPVfKlflUlldcu-rAAbvx-V0aszQhE6Qm-e-hHtHB0SM-6EzdsZ089GGyxcIsMP1o889Sq5dibQQ__"
  },
  {
      "name": "Bhavik Katariya",
      "score": "97.8%",
      "school": "Bhavan's Bhagwandas Purohit",
      "img":"https://s3-alpha-sig.figma.com/img/8fb2/c341/eee5b05b3a5c9f2f0c33ea6665ec17fb?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KC-hT3mUbD6NNu7qLVMVAwV17-avmP6Dmef2VuGJ5SmUCfiocWED~zr8p3hX67QAOQYJ9x8vXwPKFJ6PkIKi3RDIQYVBcf8i7WBPCvSKk9SAqWP2UhK~7Z~yR~U5sfFSERZMjLrtganAug56rgYpwefrkD6LXZjTG9jiMHCP5IorlrGjQrfSEJuqlDRKZWywwyTLZpaY8sInKcXgYMgDM~j~AgXsCxwUOd6hib60xaoL3FYoo2leQELY1uSih7qOaz2wv~dZirTPVfKlflUlldcu-rAAbvx-V0aszQhE6Qm-e-hHtHB0SM-6EzdsZ089GGyxcIsMP1o889Sq5dibQQ__"
  }
]

const Result = () => {
  return (
    <section id="result" className="section-width space-y-8 poppins-bold my-20">
      <Title title="Our Results" />
      <div className=" flex flex-col items-center justify-center lg:mr-24">
        <div className="flex justify-center items-center flex-wrap ">
          {ResultData
            .map((item, index) => (
              <div
                key={index}
                className="relative h-[361px] w-[262px] rounded-2xl bg-white text-center shadow-md shadow-bgcust mx-2 lg:mx-6 my-2 lg:my-4 px-4"
                style={{ borderRadius: "20px" }}
              >
                 <div className='absolute top-2 right-6 w-[53px] h-[61px] z-20'>
                    <img src="/goldmedal.svg" alt="" className=''/>
                  </div>
                <div className="relative flex justify-center items-center mt-4 z-10">
                 
                  <img
                    src={item.img}
                    alt="Harry Dne"
                    className="h-[216px] w-[216px] w-full object-cover border-4 border-bgcust"
                    style={{ borderRadius: "50px" }}
                  />
                
                  {/* <div className="bg-bgresult absolute bottom-0 flex h-[122px] w-[268px] flex-col items-center justify-center rounded-b-2xl">
                    <h3 className="roboto-bold text-2xl text-white">
                      Harry Dne
                    </h3>
                    <p className="roboto-bold py-2 text-2xl text-white">92%</p>
                  </div> */}
                  
                </div>
               
                <div className='absolute bottom-1/4 right-4 w-[230px] h-[66px] z-20'>
                    <img src="/banner.svg" alt="" className='relative'/>
                    <h1 className='text-white inter-bold text-2xl absolute top-[25px] left-[85px]'>{item.score}</h1>
                  </div>
                  <div className='poppins-medium mt-14'>
                    <h1 className='text-xl text-black font-semibold'>{item.name}</h1>
                    <p className='text-xs text-bgcust mt-4'>
                    {item.school}
                    </p>
                  </div>
              </div>
            ))}
        </div>
        <div className="mt-8 flex items-center justify-center md:justify-between lg:justify-between xl:justify-between">
          <a
            href="#"
            className="inter-bold mx-2 hidden text-2xl text-bgcust md:block md:text-xl lg:block"
          >
            View All Courses
          </a>
          <div className="mx-3 hidden h-[0.75px] w-[52vw] bg-black md:block md:text-xl lg:block"></div>
        <Button variant={"outline"} className='rounded-full text-lg'>
            <span>
              All Courses
            </span>
            <ArrowRight strokeWidth={1} size={14} />
        </Button> 
        </div>
    
      </div>
    </section>
  );
};

export default Result;
