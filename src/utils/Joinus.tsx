import { Button } from '@/components/ui/button';
import React from 'react';

const JoinUsSection = () => {
  return (
    <div className="flex justify-center items-center my-20 rounded h-full w-full -mr-4">
      <div className="bg-cover bg-center rounded-lg shadow-lg overflow-hidden max-w-6xl " style={{ backgroundImage: `url('https://s3-alpha-sig.figma.com/img/9250/c89e/f18f33d783fef5055204ced5370bafac?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=klNFNvi5HAVuSdEoWb3whhFS47CNDzbFhR5xqIcjuSzm~Lh3Sca7owtK3jHGxi4c4rrsJbTmfmcu0iYg-XtavA-mgh0DORqs8IAKRtG0YAL9sG-RgDh5oZcAin6z8lB5ZVWgSgWvkmQQZI3sf5gIny~NXzXwiSWUfP7ExG3~EoB-egAu3PYLVB5YRPvHeoKgMOCo8tx1Q--0avpohmDT~Txtg9LD4SdrNh4VTmskXcnWS9GT3zXtxAQ~LpSnerETXisax8eXufN4gCxhptaDpn1KOByu2IhOkM5DOCSLos5Nj58nZdHemzK14iiUqae9g80R-icg1BlDOhulJUbQsA__')` }}>
        <div className="bg-black bg-opacity-80 p-8 sm:p-12 text-center rounded-lg lg:h-[400px] md:h-[400px] h-[460px] flex justify-center items-center flex-col w-full lg:w-[1160px] ">
          <h3 className="text-xl sm:text-2xl font-semibold text-bgcust inter-bold">Join Us</h3>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4 inter-bold lg:w-[474px] md:w-full">Join Us by Creating an Account or Start a Free Trial</h2>
          <p className="text-gray-300 mb-6 lg:w-[474px] inter-medium md:w-full">
            Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products.
          </p>
          <div className="flex justify-center space-x-4 flex-wrap my-2">
            <Button className='rounded-full my-2'>
               Start Free Trial &rarr;
            </Button>
            <Button variant={"outline"} className='rounded-full my-2' >
              Contact Us &rarr;
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;
