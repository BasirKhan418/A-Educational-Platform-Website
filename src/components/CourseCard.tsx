import React from 'react';
import { Clock, CirclePlay , Users, Star } from 'lucide-react';

interface CourseCardProps {
  title: string;
  duration: string;
  videos: number;
  students: number;
  rating: number;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, duration, videos, students, rating, image }) => {
  return (
    <div className="h-[418px] w-[376px] overflow-hidden  bg-white rounded-lg  relative m-2">
      <img className="w-full h-[236px] object-cover rounded-lg " src={image} alt={title} />
      <div className="flex items-center justify-end absolute right-2 top-56 backdrop-blur-xl rounded-full w-[61px] h-[25px]" style={{background: "rgba(93, 93, 93, 1)"
}}>
          <div className='mr-2 flex justify-center items-center'>
          <Star className="w-4 h-4 mr-1 text-yellow-500" />
          <span className="text-white text-sm">{rating}</span>
          </div>
        </div>
      <div className=" py-4">
        <div className="font-bold text-xl text-bgcust mb-1 poppins-medium ">{title}</div>
        <p className="text-sm mb-4 poppins-bold" style={{color: "rgba(68, 68, 68, 0.47)"
}}>
          Lorem ipsum is placeholder text commonly used in the graphic, print mockups.
        </p>
        <div className='flex justify-between items-center w-[343px]'>

       
        <div className="flex items-center mb-2 poppins-medium">
          <Clock className="w-4 h-4 mr-1 text-gray-500" />
          <span className="text-gray-500 text-sm mx-2">{duration}</span>
        </div>
        <div className="flex items-center mb-2">
          <CirclePlay className="w-4 h-4 mr-1 text-gray-500" />
          <span className="text-gray-500 text-sm mx-2">{videos} Video</span>
        </div>
        <div className="flex items-center mb-2">
          <Users className="w-4 h-4 mr-1 text-gray-500" />
          <span className="text-gray-500 text-sm mx-2">{students} Siswa</span>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default CourseCard;
