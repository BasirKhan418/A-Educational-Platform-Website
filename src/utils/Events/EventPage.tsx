import React from "react";
import VectorImage from "./VectorImage";
import FelicitationContent from "./Content";
import Im1 from "../../../public/event/grid1/im1.png";
import Im2 from "../../../public/event/grid1/im2.png";
import Im3 from "../../../public/event/grid1/im3.png";
import Im4 from "../../../public/event/grid1/im4.png";
import Im5 from "../../../public/event/grid1/im5.png";
import Im6 from "../../../public/event/grid1/im6.png";
import Image from "next/image";

const EventPage = () => {
  const vectorImagePath = "/event/Felicitation.png";
  const felicitationContent = {
    title: "Felicitation",
    imagePath: "/event/Frame.png",
    description: `At Gour's Educare Plus, we believe in recognizing and celebrating
      the outstanding achievements of our students. Our annual
      Felicitation Ceremony is a prestigious event where we honor academic
      excellence, personal growth, and exceptional talents.`,
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12">
      <div className="my-24 flex flex-col items-center justify-center bg-white p-4 md:flex-row">
        <h2 className="inter-bold text-center text-5xl font-bold text-bgcust">
          Our Events
        </h2>
      </div>
      <div className="relative flex w-full flex-col justify-center lg:flex-row">
        <VectorImage imagePath={vectorImagePath} />
        <FelicitationContent
          title={felicitationContent.title}
          imagePath={felicitationContent.imagePath}
          description={felicitationContent.description}
        />
      </div>
      <div className="container mx-auto mb-8 p-4 lg:mb-24">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3 lg:relative">
          <div className="col-span-1 md:col-span-1">
            <Image src={Im1} alt="Trophy" className="rounded-lg object-cover" />
          </div>
          <div className="col-span-1 md:col-span-2">
            <Image src={Im2} alt="Stage" className="rounded-lg object-cover" />
          </div>
          <div className="left-[34%] top-[33.5%] col-span-1 md:col-span-1 lg:absolute">
            <Image
              src={Im3}
              alt="Students"
              className="rounded-lg object-cover"
              height={450}
              width={450}
            />
          </div>
          <div className="col-span-1 md:col-span-1">
            <Image
              src={Im5}
              alt="Students"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="col-span-1 md:col-span-1">
            <Image
              src={Im6}
              alt="Students"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="right-0 top-[33%] col-span-1 md:col-span-1 lg:absolute">
            <Image
              src={Im4}
              alt="Students"
              className="rounded-lg object-cover"
              height={440}
              width={440}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
