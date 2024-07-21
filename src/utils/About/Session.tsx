import React from "react";
import Lesson from "../../..//public/about/lesson.png";
import Image from "next/image";
import Audio from "../../../public/about/audio.png";
import Live from "../../../public/about/live.png";
import Recorded from "../../../public/about/recorded.png";
import Pattern from "../../../public/about/Pattern.png"

const Session = () => {
  return (
    <div className="flex h-max w-full flex-col items-center justify-center gap-8 mt-16">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="inter-bold text-5xl ">
          What's in the class at Educare?
        </h1>
        <p className="poppins-medium text-justify  text-xl text-gray-400">
          Online classes with teachers, continuous questions and answers during
          class if you do <br /> not understand. At the end of the session, the
          lesson is recorded for your child to review
        </p>
      </div>
      <div className="flex items-center justify-center rounded-xl bg-[#02B3E4] px-8 py-3">
        <button className="flex items-center justify-center font-bold text-white">
          Free trial lesson
        </button>
      </div>
      <div className="relative ">
        <Image
          src={Pattern}
          alt="Pattern"
          className="absolute top-0 right-0 translate-x-8 md:translate-x-16 -translate-y-8 md:-translate-y-16 w-24 h-24 md:w-32 md:h-32 z-0"
          width={128}
          height={128}
        />
          <Image
            src={Lesson}
            alt="Lesson"
            className="object-cover rounded-lg shadow-lg z-20"
            width={900}
            height={900}
          />
      </div>
      <div className="flex flex-col md:flex-row gap-16 mt-12 mb-32">
        <div className="flex items-center justify-center gap-8 bg-white rounded-xl shadow-md p-3">
          <Image
            src={Audio}
            alt="Audio"
            className="rounded-lg object-cover"
            width={80}
            height={80}
          />
          <p className="inter-bold text-3xl">Audio Classes</p>
        </div>
        <div className="flex items-center justify-center gap-8 bg-white rounded-xl shadow-md p-3">
          <Image
            src={Live}
            alt="Live"
            className="rounded-lg object-cover"
            width={80}
            height={80}
          />
          <p className="inter-bold text-3xl">Audio Classes</p>
        </div>
        <div className="flex items-center justify-center gap-8 bg-white rounded-xl shadow-md p-3">
          <Image
            src={Recorded}
            alt="Recorded"
            className="rounded-lg object-cover"
            width={80}
            height={80}
          />
          <p className="inter-bold text-3xl">Audio Classes</p>
        </div>
      </div>
    </div>
  );
};

export default Session;
