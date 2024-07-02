import React from 'react';
import JoinUsSection from './Joinus';

const Result = () => {
  return (
    <div>
    <div className='lg:mx-36 mx-6'>
          <h2 className="text-4xl inter-bold   mx-2 text-bgcust">Our Result</h2>
          <div className='h-[4px] w-[114px] bg-bgcust rounded mb-8 mx-2 my-1'></div>
          </div>
    <div className="container mx-auto  flex justify-center items-center flex-col lg:mr-24">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center lg:place-items-start">
        {Array(8).fill().map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md text-center h-[331px] w-[268px] relative" style={{borderRadius:"0px 0px 20px 20px"}}>
            <div className='relative'>
            <img
              src="https://s3-alpha-sig.figma.com/img/e075/1b22/24b9a68402884a8f8b48f50360f215cf?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a-xUnLTHr7NEnbXnp7nyCQMSZY8sCXC7Uq-T65N-1AV2p3vhHrbyOzSIziL0ov-45~-2e5NzabGkl-ncT9hADF4CbRlnIT8r1qyoTibxVIk1y34r4vOvaUrmvy9jLPqpBbWbIku2DLzn3FUNs-63XDJVhy~SiHeN5zpBrpqsYXUvmMMxHpRy5kVnCi1zNc2tTp9OlznRlaSnNQ0tmDfxbCdNcutiyH-6lckwXMS7hbjbBcjdTZ0oN8egt3C8OXPqalEWs0fnVxcbgMIvd9sIKc3MRQnJf23TN2mbuK~P95ul82LL3M3eXjPFLvx7oJ8877S3Wz9fH4lQApIA6gLs~g__"
              alt="Harry Dne"
              className="w-full h-[331px] w-[268px] object-cover "
              style={{ borderRadius: '20px' }}
            />
            <div className='absolute bottom-0 h-[122px] w-[268px] bg-bgresult flex justify-center items-center flex-col' style={{borderRadius:"0px 0px 20px 20px"}}>
            <h3 className="text-2xl roboto-bold text-white">Harry Dne</h3>
            <p className="text-2xl roboto-bold text-white py-2">92%</p>
            </div>
            </div>
          
            
          </div>
        ))}
      </div>
      <div className="flex lg:justify-between md:justify-between xl:justify-between justify-center mt-8 items-center">
        <a href="#" className="text-bgcust inter-bold mx-2 text-2xl hidden lg:block md:block md:text-xl">View All Courses</a>
        <div className='h-[2px] bg-gray-600 w-[52vw] hidden lg:block md:block md:text-xl mx-3'></div>
        <button  className="text-bgcust inter-medium mx-2 text-sm border-2 p-4 rounded-full border-bgcust w-full md:w-36 lg:w-36">All Courses <span>&rarr;</span></button>
      </div>
      <JoinUsSection/>
    </div>
    </div>
  );
};

export default Result;
