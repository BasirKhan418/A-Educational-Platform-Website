import React from "react";

interface VectorImageProps {
  imagePath: string;
}

const VectorImage: React.FC<VectorImageProps> = ({ imagePath }) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative h-64 w-64 overflow-hidden md:h-96 md:w-96">
        <img
          src="/about/roundedvector.svg"
          alt="Vector Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute right-0 top-0">
          <img
            src="/about/vector1.svg"
            alt="Vector Overlay"
            className="inset-0 h-14 w-14 -rotate-[22deg] object-cover"
            style={{ borderRadius: "83px 83px 83px 6.15px" }}
          />
        </div>
        <div className="absolute left-20 top-12">
          <img
            src={imagePath}
            alt="Dynamic Image"
            className="inset-0 object-cover"
            style={{ borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default VectorImage;
