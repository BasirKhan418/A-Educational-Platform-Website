import React from "react";
import Image from "next/image";
import Im1 from "../../../public/event/grid3/im1.png";
import Im2 from "../../../public/event/grid3/im2.png";
import Im3 from "../../../public/event/grid3/im3.png";
import Im4 from "../../../public/event/grid3/im4.png";
import Im5 from "../../../public/event/grid3/im5.png";
import Im6 from "../../../public/event/grid3/im6.png";

const GarbaImage = () => {
  return (
    <div className="container mx-auto p-4 mb-8 lg:mb-24">
      <div className="lg:relative grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 md:col-span-1">
          <Image src={Im1} alt="Trophy" className="rounded-lg object-cover" />
        </div>
        <div className="col-span-1 md:col-span-2">
          <Image src={Im2} alt="Stage" className="rounded-lg object-cover" />
        </div>
        <div className="lg:absolute top-[32.5%] left-[34%] col-span-1 md:col-span-1">
          <Image
            src={Im3}
            alt="Students"
            className="rounded-lg object-cover"
            height={380}
            width={380}
          />
        </div>
        <div className="col-span-1 md:col-span-1">
          <Image src={Im5} alt="Students" className="rounded-lg object-cover" />
        </div>
        <div className="col-span-1 md:col-span-1">
          <Image src={Im6} alt="Students" className="rounded-lg object-cover" />
        </div>
        <div className="lg:absolute right-0 top-[33%] col-span-1 md:col-span-1">
          <Image
            src={Im4}
            alt="Students"
            className="rounded-lg object-cover"
            height={380}
            width={380}
          />
        </div>
      </div>
    </div>
  );
};

export default GarbaImage;

