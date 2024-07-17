import React from "react";
import Image from "next/image";

interface FelicitationContentProps {
  title: string;
  imagePath: string;
  description: string;
}

const Content: React.FC<FelicitationContentProps> = ({ title, imagePath, description }) => {
  return (
    <div className="flex w-full flex-col items-center lg:items-start justify-center gap-12">
      <div className="flex flex-col gap-2">
        <h1 className="inter-bold text-center text-5xl font-bold">{title}</h1>
        <Image src={imagePath} alt={title} className="rounded-lg object-cover" 
            width={400}
            height={400}    
        />
      </div>
      <p className="inter-medium w-2/3 text-start text-lg text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default Content;
