import Title from '@/components/title';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Events = () => {
  return (
    <section id="events" className="section-width space-y-8">
      <Title title="Our Events" />
      <div className=" ">
        <div className="">
          <p className="text-md poppins-medium max-w-4xl text-gray-600">
            Lorem ipsum is placehold text commonly .Lorem ipsum is placeholder
            text commonly  is placeholder text commo Lorem ipsum is placehold
            text commonly .Lorem ipsum is placeholder text commonly  is
            placeholder text commo Lorem ipsum is placehold text commonly .Lorem
            ipsum is placeholder text commonly  is placeholder text commo
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:mr-14  lg:w-[1164px] lg:grid-cols-3">
            {Array<number>(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="roboto-medium mx-2 my-4 rounded-lg  bg-white text-center shadow-lg"
                  style={{
                    borderLeft: "1px solid #02B3E4",
                    borderRight: "1px solid #02B3E4",
                  }}
                >
                  <img
                    src="https://s3-alpha-sig.figma.com/img/b48e/2933/8f6c330b4f0881bf773b3f24635ee909?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pzd7DsH~ipLA1vR35hIvjAgrHs9LbvnEFkkW0AjCt~2tdjPW2Tn3pNO8mJx5u-DN15h~u68YqjSpJG8f8O9Hp34Nds~i0DM~Epppz62PLBmu3OqfUhXBx1gECm78kUPC48VKTzSP~9Hia9yiTSVnapEnDc8UJTQiwhfGZqSQ4zDBUzeTsl6FoRp1b-M-pgSNI5s-b-M~1~BErSvs3gLlgfctTcIIbikrnI7lf63o3uqUZzz4br8qkDcAdLeUfwGbPKF1dSIpkcQzBnAZXCon8Pi0kikFU5OpA-0uq~KQK9NyBngkjo9nXJZGtnRdyTgKmd9a5LxCtnpXoRG8g1rjqQ__"
                    alt="Consequat"
                    className=" mb-4 h-[227px] w-[360px] rounded-lg object-cover"
                  />
                  <div className='py-4'>
                    <h3 className="px-4 text-left  text-xl font-bold">
                      Consequat
                    </h3>
                    <p className="my-2 px-4 text-left text-sm text-gray-400">
                      16 January 2017
                    </p>
                    <p className="poppins-medium w-[321px]  px-3 text-left text-gray-400">
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print mockups.
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-8 flex items-center justify-center md:justify-between lg:justify-between xl:justify-between">
            <Link
              href="/events"
              className="inter-bold mx-2 hidden text-2xl text-bgcust md:block md:text-xl lg:block"
            >
              View All Events
            </Link>
            <div className="mx-3 hidden h-[0.75px] w-[54vw] bg-black md:block md:text-xl lg:block"></div>
            <Button variant={"outline"} size={"lg"} className="rounded-full">
              All Events <span> &rarr;</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
