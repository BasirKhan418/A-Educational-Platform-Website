import React from "react";
import CourseCard from "@/components/CourseCard";
import Title from "@/components/title";

interface Course {
  title: string;
  description: string;
  duration: string;
  videos: number;
  students: number;
  rating: number;
  image: string;
}

const courses: Course[] = [
  {
    title: "CRASH COURSE",
    description:
      "Educare Plus presents intensive Crash Courses designed to boost academic performance in a short time frame.",
    duration: "4.5 hrs",
    videos: 20,
    students: 1900,
    rating: 4.9,
    image: "/hero/courses/crash.png",
  },
  {
    title: "TEST SERIES",
    description:
      "Educare Plus offers comprehensive Test Series, boosting exam preparedness through consistent practice.",
    duration: "4.5hrs",
    videos: 20,
    students: 930,
    rating: 4.9,
    image: "/hero/courses/test.png",
  },
  {
    title: "PIP",
    description:
      "Percentage Improvement Program- a targeted approach to boost your grades significantly.",
    duration: "4.5 hrs",
    videos: 46,
    students: 1043,
    rating: 4.9,
    image: "/hero/courses/pip.png",
  },
  {
    title: "SUMMER FOUNDATION",
    description:
      "Summer Foundation: Blending fun and learning to prepare students for the upcoming academic year.",
    duration: "4.5 hrs",
    videos: 20,
    students: 1900,
    rating: 4.9,
    image: "/hero/courses/summer.png",
  },
  {
    title: "BASIC FOUNDATION",
    description:
      "Basic Foundation: Strengthening core concepts and skills for long-term academic success.",
    duration: "4.5 hrs",
    videos: 32,
    students: 930,
    rating: 4.9,
    image: "/hero/courses/basic.png",
  },
  {
    title: "WINTER FOUNDATION",
    description:
      "Reinforcing learning, consolidating knowledge, and preparing students for future academic challenges.",
    duration: "4.5 hrs",
    videos: 20,
    students: 1043,
    rating: 4.9,
    image: "/hero/courses/winter.png",
  },
];

const Course: React.FC = () => {
  return (
    <section id="course" className="section-width poppins-bold my-32 space-y-4">
      <div className="mb-20">
        <Title title="Popular courses " className="mx-2" />
      </div>
      <div className="flex w-full flex-wrap items-center justify-center ">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <div className="relative flex items-center justify-center md:justify-between lg:justify-between xl:justify-between ml-0 md:ml-4 lg:ml-12">
          <a
            href="#"
            className="inter-bold mx-2 hidden text-2xl text-bgcust md:block md:text-xl lg:block whitespace-nowrap"
          >
            View All Courses
          </a>
          <div className="hidden md:block lg:block">
            <span className="poppins-bold absolute bottom-10 left-48 flex w-[48vw] items-center justify-center text-gray-500 ">
              We help you find the perfect tutor. It is completely free. Explore
              all courses <span className="mx-2 text-bgcust">&rarr;</span>
            </span>
          </div>
          <div className="mx-3 hidden h-[2px] w-[44vw] bg-gray-600 md:block md:text-xl lg:block"></div>
          <button className="inter-medium mx-2 w-full rounded-full border-2 border-bgcust p-4 text-sm text-bgcust md:mr-10 md:w-36 lg:mr-10 lg:w-36">
            All Courses <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Course;
