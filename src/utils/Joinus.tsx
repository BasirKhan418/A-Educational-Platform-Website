import { Button } from "@/components/ui/button";
import React from "react";
import BannerImage from "../../public/result/join.png";

const JoinUsSection = () => {
  return (
    <div className="my-20 flex w-full items-center justify-center">
      <div className="mt-20 flex w-[90vw] items-center justify-center rounded-lg md:w-full lg:w-full">
        <div
          className="max-w-4xl overflow-hidden rounded-lg bg-cover bg-center shadow-lg md:max-w-5xl lg:max-w-7xl"
          style={{
            backgroundImage: `url('${BannerImage.src}')`,
            height: "100%",
          }}
        >
          <div className=" flex h-[460px] w-full flex-col items-center justify-center gap-4 rounded-lg bg-opacity-80 p-8 text-center sm:p-12 md:h-[400px] lg:h-[400px] lg:w-[1160px]">
            <h3 className="text-bgcust inter-bold text-xl font-semibold sm:text-2xl">
              Join Us
            </h3>
            <h2 className="inter-bold mb-4 mt-2 text-2xl font-bold text-white sm:text-3xl md:w-full lg:w-[474px]">
              Join Us by Creating an Account or Start a Free Trial
            </h2>
            <p className="inter-medium mb-6 text-gray-300 md:w-full lg:w-[474px]">
              Transform your education with us. Personalized coaching for
              standards VII-X. Growing since 2012. Contact us to enroll today!
            </p>
            <div className="my-2 flex flex-wrap justify-center space-x-4">
              {/* <Button className="my-2 rounded-full font-medium">
                Book a demo &rarr;
              </Button> */}
              <button className="rounded-full bg-primary px-4 py-3 text-white">
                <a
                  href="https://www.google.com"
                  className="my-2 rounded-full font-medium"
                >
                  Book a demo &rarr;
                </a>
              </button>
              <button className="rounded-full border px-4 py-3 text-white">
                <a
                  href="https://www.google.com"
                  className="my-2 rounded-full font-medium"
                >
                  Download Brochure &rarr;
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;
