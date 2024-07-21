import React from "react";
import { Clock, CirclePlay, Users, Star } from "lucide-react";
import Image from "next/image";

interface CourseCardProps {
  title: string;
  duration: string;
  videos: number;
  students: number;
  rating: number;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  duration,
  videos,
  students,
  rating,
  image,
}) => {
  return (
    <div className="relative m-2 h-[418px]  w-[376px] overflow-hidden  rounded-lg bg-white">
      {/* <img className="w-full h-[236px] object-cover rounded-lg " src={image} alt={title} /> */}
      <Image
        src={image}
        alt={title}
        // layout="fill"
        // objectFit="cover"
        className="rounded-t-lg"
        width={400}
        height={400}
      />
      <div
        className="absolute right-2 top-56 flex h-[25px] w-[61px] items-center justify-end rounded-full backdrop-blur-xl"
        style={{ background: "rgba(93, 93, 93, 1)" }}
      >
        <div className="mr-2 flex items-center justify-center">
          <Star className="mr-1 h-4 w-4 text-yellow-500" />
          <span className="text-sm text-white">{rating}</span>
        </div>
      </div>
      <div className=" py-4">
        <div className="poppins-medium mb-1 text-xl font-bold text-bgcust ">
          {title}
        </div>
        <p
          className="poppins-bold mb-4 text-sm"
          style={{ color: "rgba(68, 68, 68, 0.47)" }}
        >
          Lorem ipsum is placeholder text commonly used in the graphic, print
          mockups.
        </p>
        <div className="flex w-[343px] items-center justify-between">
          <div className="poppins-medium mb-2 flex items-center">
            <Clock className="mr-1 h-4 w-4 text-gray-500" />
            <span className="mx-2 text-sm text-gray-500">{duration}</span>
          </div>
          <div className="mb-2 flex items-center">
            <CirclePlay className="mr-1 h-4 w-4 text-gray-500" />
            <span className="mx-2 text-sm text-gray-500">{videos} Video</span>
          </div>
          <div className="mb-2 flex items-center">
            <Users className="mr-1 h-4 w-4 text-gray-500" />
            <span className="mx-2 text-sm text-gray-500">{students} Siswa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
