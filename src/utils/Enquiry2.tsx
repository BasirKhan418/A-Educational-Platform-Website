import React from 'react';
import {MapPin,PhoneCall} from 'lucide-react'
const Enquiry2 = () => {
  return (
    <div className='relative'>
      <div className=' w-full lg:h-[318px] md:h-[318px] h-[218px] flex justify-center relative' style={{ backgroundColor: "rgba(2, 179, 228, 0.17)" }}>
        <div className='absolute top-10 left-2 '>
          <img
            src="https://s3-alpha-sig.figma.com/img/a882/5901/1ad79801565535bce92321fc3543c61a?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dw5fSehbWB4s03pzABNmKt-vQ~Y3fEF1sE1vY0qjvTXNro1H8NXP288pmbkh1DugTaRlN1iEt3N5Wggn2LAo~MLAZnykOCs9AWVZNmIncdde5VYAjacDrk~Egvi-4pZPSz4S0LcABmi3q5kK1YNrGwdQRhpLXf041I4DZbLaIoZTzfXtux8V5EW8Mp2C7et5wgmJ41yIvqWEqfJdwXVPzYvwpev-eNIJw6nyI4B~QAKHjeg9UyYdoSeBog21Kqa6EzDvC3fJeXJWS1itsojR~G2VC1~zyFwUMj5gRAwcDnPXVQoer5cqwKwCS-NA-qaGs6rjC5AO-PXCbBkC~Brydw__"
            alt=""
            className='w-[161px] h-[161px] rounded-full'
          />
        </div>
        <div className='mt-20'>
          <h1 className='text-4xl text-center pt-10 poppins-bold text-bgcust'>Get In Touch</h1>
          <div className='h-[2px] lg:w-[600px] bg-bgcust mt-4 w-42' ></div>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-white z-50">
        <div className="bg-bgcust rounded-lg shadow-xl p-6 w-full max-w-6xl lg:absolute lg:top-52 md:absolute md:top-52">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bgcust text-white p-6 rounded-lg flex flex-col justify-between">
                <div>
              <h2 className=" font-bold mb-2 lg:text-5xl text-4xl  poppins-bold">Contact us</h2>
              <div className='h-1 w-28 bg-white rounded'></div>
              </div>
              <div>
              <p className="mb-2 text-lg text-gray-200 my-2">Corporate Office:</p>
              <p className="font-semibold poppins-bold text-3xl">Gour's Educare Plus</p>
              
              <p className="mb-2 w-[282px] flex my-2 ">
              <MapPin className=' w-10 mx-2 '/>
                Near Pink Girls Hostel, Behind KRIMS Hospital, Ramdaspeth, Nagpur - 10
              </p>
              </div>
              <div className="flex items-center mb-2 ">
               <PhoneCall className='w-8 h-6 mx-2'/>
               <div className='flex flex-col'>
               <p className=" text-lg text-gray-200">Call:</p>
               
               <p className='text-sm poppins-medium'> 9881244063 || 9970320890</p>
               </div>
             
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg poppins-medium">
              
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="student-name">
                    Student Name
                  </label>
                  <input
                    type="text"
                    id="student-name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="std">
                    STD
                  </label>
                  <input
                    type="text"
                    id="std"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="school-name">
                    School Name
                  </label>
                  <input
                    type="text"
                    id="school-name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="email-address">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email-address"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="e.g. mary@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="mobile-number">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    id="mobile-number"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="+91xxxxxxxxxx"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Interested in Demo Class
                  </label>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="yes"
                      name="demo-class"
                      value="yes"
                      className="mr-2 leading-tight"
                    />
                    <label className="text-gray-700" htmlFor="yes">
                      Yes
                    </label>
                    <input
                      type="radio"
                      id="no"
                      name="demo-class"
                      value="no"
                      className="ml-4 mr-2 leading-tight"
                    />
                    <label className="text-gray-700" htmlFor="no">
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4 flex  items-center h-full">
                 
                
                <button
                  type="submit"
                  className="bg-bgcust  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Continue
                </button>
                <label className="block text-gray-700 font-bold mb-2 mx-8">
                    <input
                      type="checkbox"
                      id="remember-me"
                      className="mr-2 leading-tight"
                    />
                    Remember me!
                  </label>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry2;
