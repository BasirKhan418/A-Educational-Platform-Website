import React from "react";
import Image from "next/image";
import Im1 from "../../../public/event/grid1/im1.png";
import Im2 from "../../../public/event/grid1/im2.png";
import Im3 from "../../../public/event/grid1/im3.png";
import Im4 from "../../../public/event/grid1/im4.png";
import Im5 from "../../../public/event/grid1/im5.png";
import Im6 from "../../../public/event/grid1/im6.png";

const FalicitationImage = () => {
  return (
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
        <div className="right-0 top-[33%] col-span-1 md:col-span-1 lg:absolute">
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

export default FalicitationImage;
