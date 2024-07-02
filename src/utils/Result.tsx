import React from 'react';
import JoinUsSection from './Joinus';
import Title from '@/components/title';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Result = () => {
  return (
    <section id="result" className="section-width space-y-8">
      <Title title="Our Results" />
      <div className=" flex flex-col items-center justify-center lg:mr-24">
        <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:place-items-start">
          {Array<number>(8)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="relative h-[331px] w-[268px] rounded-2xl bg-white text-center shadow-md"
              >
                <div className="relative">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/e075/1b22/24b9a68402884a8f8b48f50360f215cf?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a-xUnLTHr7NEnbXnp7nyCQMSZY8sCXC7Uq-T65N-1AV2p3vhHrbyOzSIziL0ov-45~-2e5NzabGkl-ncT9hADF4CbRlnIT8r1qyoTibxVIk1y34r4vOvaUrmvy9jLPqpBbWbIku2DLzn3FUNs-63XDJVhy~SiHeN5zpBrpqsYXUvmMMxHpRy5kVnCi1zNc2tTp9OlznRlaSnNQ0tmDfxbCdNcutiyH-6lckwXMS7hbjbBcjdTZ0oN8egt3C8OXPqalEWs0fnVxcbgMIvd9sIKc3MRQnJf23TN2mbuK~P95ul82LL3M3eXjPFLvx7oJ8877S3Wz9fH4lQApIA6gLs~g__"
                    alt="Harry Dne"
                    className="h-[331px] w-[268px] w-full object-cover "
                    style={{ borderRadius: "20px" }}
                  />
                  <div className="bg-bgresult absolute bottom-0 flex h-[122px] w-[268px] flex-col items-center justify-center rounded-b-2xl">
                    <h3 className="roboto-bold text-2xl text-white">
                      Harry Dne
                    </h3>
                    <p className="roboto-bold py-2 text-2xl text-white">92%</p>
                  </div>
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
        <JoinUsSection />
      </div>
    </section>
  );
};

export default Result;
