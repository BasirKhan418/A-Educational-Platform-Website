import React from 'react';
import CourseCard from '@/components/CourseCard';
import Title from '@/components/title';

interface Course {
  title: string;
  duration: string;
  videos: number;
  students: number;
  rating: number;
  image: string;
}

const courses: Course[] = [
  {
    title: "Dasar Pemrograman WEB",
    duration: "4.5 Jam",
    videos: 20,
    students: 1900,
    rating: 4.9,
    image: "/hero/courses/crash.png",
  },
  {
    title: "Digital Marketing 101",
    duration: "6.2 Jam",
    videos: 32,
    students: 930,
    rating: 4.9,
    image: "/hero/courses/test.png",
  },
  {
    title: "Data Science Dasar",
    duration: "8 Jam",
    videos: 46,
    students: 1043,
    rating: 4.9,
    image: "/hero/courses/pip.png",
  },
  {
    title: "Dasar Pemrograman WEB",
    duration: "4.5 Jam",
    videos: 20,
    students: 1900,
    rating: 4.9,
    image: "/hero/courses/summer.png",
  },
  {
    title: "Digital Marketing 101",
    duration: "6.2 Jam",
    videos: 32,
    students: 930,
    rating: 4.9,
    image: "/hero/courses/basic.png",
  },
  {
    title: "Data Science Dasar",
    duration: "8 Jam",
    videos: 46,
    students: 1043,
    rating: 4.9,
    image: "/hero/courses/winter.png",
  },
];

const Course: React.FC = () => {
  return (
    <section id="course" className='section-width space-y-4 poppins-bold my-32'>
      <div className='mb-20'>
     <Title title="Popular courses " className='mx-2' />
     </div>
    <div className="flex flex-wrap justify-center items-center w-full ">
          
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
      
     
    </div>
    <div className='flex justify-center items-center'>
    <div className="flex lg:justify-between md:justify-between xl:justify-between justify-center items-center relative">
        <a href="#" className="text-bgcust inter-bold mx-2 text-2xl hidden lg:block md:block md:text-xl">View All Courses</a>
        <div className='hidden lg:block md:block'>

        
        <span className='absolute left-48 flex justify-center items-center w-[54vw] bottom-10 poppins-bold text-gray-500 '>
        We help you find the perfect tutor. It is completely free. Explore all courses <span className='text-bgcust mx-2'>&rarr;</span>
        </span>
        </div>
        <div className='h-[2px] bg-gray-600 w-[54vw] hidden lg:block md:block md:text-xl mx-3'></div>
        <button  className="text-bgcust inter-medium mx-2 text-sm border-2 p-4 rounded-full border-bgcust lg:mr-10 md:mr-10 w-full md:w-36 lg:w-36">All Courses <span>&rarr;</span></button>
      </div>
    </div>
    </section>
  );
};

export default Course;
