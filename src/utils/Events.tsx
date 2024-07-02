import React from 'react';

const Events = () => {
  return (
    <>
    <div className='lg:mx-36 '>
          <h2 className="text-4xl inter-bold   mx-2 text-bgcust">Our Event</h2>
          <div className='h-[4px] w-[114px] bg-bgcust rounded mb-8 mx-2 my-1'></div>
          </div>
    <div className=" mx-auto lg:px-4 ">
    

      <div className='mx-4 lg:mx-36 '>
      <p className="text-gray-600 max-w-4xl text-md poppins-medium">
      Lorem ipsum is placehold text commonly .Lorem ipsum is placeholder text commonly  is placeholder text commo
      </p>
      <p className="text-gray-600  max-w-4xl text-md poppins-medium">
      Lorem ipsum is placehold text commonly .Lorem ipsum is placeholder text commonly  is placeholder text commo
      </p>
      <p className="text-gray-600  max-w-4xl text-md poppins-medium mb-8">
      Lorem ipsum is placehold text commonly .Lorem ipsum is placeholder text commonly  is placeholder text commo
      </p>
      </div>
      <div className='flex justify-center items-center flex-col'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6  lg:w-[1164px] lg:mr-14">
        {Array(8).fill().map((_, index) => (
          <div key={index} className="bg-white rounded-lg  text-center lg:h-[426px] lg:w-[360px] md:h-[426px] md:w-[360px] h-[426px] w-[300px] roboto-medium my-4 mx-2" style={{borderLeft:"1px solid #02B3E4",borderRight:"1px solid #02B3E4"}}>
            <img
              src="https://s3-alpha-sig.figma.com/img/b48e/2933/8f6c330b4f0881bf773b3f24635ee909?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pzd7DsH~ipLA1vR35hIvjAgrHs9LbvnEFkkW0AjCt~2tdjPW2Tn3pNO8mJx5u-DN15h~u68YqjSpJG8f8O9Hp34Nds~i0DM~Epppz62PLBmu3OqfUhXBx1gECm78kUPC48VKTzSP~9Hia9yiTSVnapEnDc8UJTQiwhfGZqSQ4zDBUzeTsl6FoRp1b-M-pgSNI5s-b-M~1~BErSvs3gLlgfctTcIIbikrnI7lf63o3uqUZzz4br8qkDcAdLeUfwGbPKF1dSIpkcQzBnAZXCon8Pi0kikFU5OpA-0uq~KQK9NyBngkjo9nXJZGtnRdyTgKmd9a5LxCtnpXoRG8g1rjqQ__"
              alt="Consequat"
              style={{borderLeft:"1px solid #02B3E4",borderRight:"1px solid #02B3E4"}}
              className=" object-cover mb-4 rounded-lg h-[227px] w-[360px]"
            />
            <h3 className="text-xl font-bold  text-left px-4">Consequat</h3>
            <p className="text-gray-400 text-left px-4 text-sm my-2">16 January 2017</p>
            <p className="text-gray-400 poppins-medium  px-3 w-[321px] text-left">
              Lorem ipsum is placeholder text commonly used in the graphic, print mockups.
            </p>
          </div>
        ))}
      </div>
      <div className="flex lg:justify-between md:justify-between xl:justify-between justify-center mt-8 items-center">
        <a href="#" className="text-bgcust inter-bold mx-2 text-2xl hidden lg:block md:block md:text-xl">View All Courses</a>
        <div className='h-[2px] bg-gray-600 w-[54vw] hidden lg:block md:block md:text-xl mx-3'></div>
        <button  className="text-bgcust inter-medium mx-2 text-sm border-2 p-4 rounded-full border-bgcust lg:mr-10 md:mr-10 w-full md:w-36 lg:w-36">All Courses <span>&rarr;</span></button>
      </div>
      </div>
      
    </div>
    
    </>
  );
};

export default Events;
